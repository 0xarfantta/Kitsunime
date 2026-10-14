// KitsuneAnime - Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // State Management
    let currentHeroIndex = 0;
    let selectedGenre = 'all';
    let searchQuery = '';
    let sortCriteria = 'popularity';
    let currentSelectedDay = getTodayNameInIndonesian();
    let watchlist = JSON.parse(localStorage.getItem('kitsune_watchlist')) || [];

    // Top 4 Spotlight Anime for Hero Banner
    const spotlightList = ANIME_DATABASE.slice(0, 4);

    // Initialize Components
    initTheme();
    initAmbientParticles();
    initHeroSlider();
    renderAnimeGrid();
    renderCharacters();
    renderSchedule(currentSelectedDay);
    updateWatchlistUI();
    setupEventListeners();

    // ==========================================
    // THEME HANDLING (Dark / Light)
    // ==========================================
    function initTheme() {
        const savedTheme = localStorage.getItem('kitsune_theme') || 'dark';
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('kitsune_theme', isDark ? 'dark' : 'light');
            showToast(isDark ? 'Mode Gelap Citrus Aktif' : 'Mode Terang Sunrise Aktif', 'fa-palette');
        });
    }

    // ==========================================
    // AMBIENT PARTICLES (Floating Orange/Yellow Embers)
    // ==========================================
    function initAmbientParticles() {
        const canvas = document.getElementById('ambient-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particleCount = 28;
        const particles = [];

        const colors = [
            'rgba(255, 94, 14, ',   // Orange
            'rgba(255, 184, 0, ',   // Yellow
            'rgba(255, 230, 0, ',   // Bright Yellow
            'rgba(255, 255, 255, '  // White
        ];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2.5 + 0.8,
                colorBase: colors[Math.floor(Math.random() * colors.length)],
                opacity: Math.random() * 0.5 + 0.2,
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: -Math.random() * 0.6 - 0.2,
                pulse: Math.random() * 0.05
            });
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                p.opacity += Math.sin(Date.now() * 0.002 + p.radius) * 0.005;

                // Wrap around screen
                if (p.y < 0) p.y = height + 10;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.colorBase + Math.max(0.1, Math.min(0.7, p.opacity)) + ')';
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#FF5E0E';
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            requestAnimationFrame(animate);
        }
        animate();
    }

    // ==========================================
    // HERO BANNER SLIDER
    // ==========================================
    let heroAutoSlideInterval;

    function initHeroSlider() {
        renderHeroSlide(0);
        startHeroAutoSlide();
    }

    function startHeroAutoSlide() {
        clearInterval(heroAutoSlideInterval);
        heroAutoSlideInterval = setInterval(() => {
            currentHeroIndex = (currentHeroIndex + 1) % spotlightList.length;
            renderHeroSlide(currentHeroIndex);
        }, 6000);
    }

    function renderHeroSlide(index) {
        const anime = spotlightList[index];
        if (!anime) return;

        const bgImg = document.getElementById('hero-bg-img');
        const title = document.getElementById('hero-title');
        const jpTitle = document.getElementById('hero-japanese');
        const synopsis = document.getElementById('hero-synopsis');
        const rating = document.getElementById('hero-rating');
        const year = document.getElementById('hero-year');
        const badge = document.getElementById('hero-badge');
        const genres = document.getElementById('hero-genres');
        const watchBtn = document.getElementById('hero-watch-btn');
        const infoBtn = document.getElementById('hero-info-btn');
        const bookmarkBtn = document.getElementById('hero-bookmark-btn');

        if (bgImg) bgImg.style.backgroundImage = `url('${anime.banner}')`;
        if (title) title.textContent = anime.title;
        if (jpTitle) jpTitle.textContent = '';
        if (synopsis) synopsis.textContent = anime.synopsis;
        if (rating) rating.innerHTML = `<i class="fa-solid fa-star text-brand-yellow"></i> ${anime.score}`;
        if (year) year.textContent = `${anime.year} • ${anime.episodes} Ep`;
        if (badge) badge.innerHTML = `<i class="fa-solid fa-fire animate-bounce"></i> #${index + 1} Spotlight Anime`;

        if (genres) {
            genres.innerHTML = anime.genres.map(g => 
                `<span class="px-2.5 py-1 text-xs rounded-lg bg-stone-900/80 text-orange-200 border border-brand-orange/30 font-medium">${g}</span>`
            ).join('');
        }

        if (watchBtn) {
            watchBtn.onclick = () => openAnimeModal(anime, true);
        }
        if (infoBtn) {
            infoBtn.onclick = () => openAnimeModal(anime, false);
        }
        if (bookmarkBtn) {
            const isBookmarked = watchlist.includes(anime.id);
            bookmarkBtn.innerHTML = `<i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>`;
            bookmarkBtn.classList.toggle('bg-brand-orange', isBookmarked);
            bookmarkBtn.classList.toggle('text-white', isBookmarked);
            bookmarkBtn.onclick = () => toggleWatchlist(anime.id);
        }

        // Update Dots
        const dots = document.querySelectorAll('.hero-dot');
        dots.forEach((dot, idx) => {
            if (idx === index) {
                dot.className = 'hero-dot w-8 h-2.5 rounded-full bg-brand-orange transition-all';
            } else {
                dot.className = 'hero-dot w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/80 transition-all';
            }
        });
    }

    window.switchHeroSlide = function(index) {
        currentHeroIndex = index;
        renderHeroSlide(index);
        startHeroAutoSlide();
    };

    // ==========================================
    // ANIME GRID & FILTERING
    // ==========================================
    function getFilteredAnimeList() {
        let list = [...ANIME_DATABASE];

        // Filter by Genre
        if (selectedGenre !== 'all') {
            list = list.filter(item => item.genres.includes(selectedGenre));
        }

        // Filter by Search Query
        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase().trim();
            list = list.filter(item => 
                item.title.toLowerCase().includes(q) || 
                (item.romaji ? item.romaji.toLowerCase().includes(q) : false) ||
                (item.japaneseTitle ? item.japaneseTitle.toLowerCase().includes(q) : false) ||
                item.genres.some(g => g.toLowerCase().includes(q))
            );
        }

        // Sort List
        if (sortCriteria === 'popularity') {
            // Keep original curated rank
        } else if (sortCriteria === 'score') {
            list.sort((a, b) => b.score - a.score);
        } else if (sortCriteria === 'newest') {
            list.sort((a, b) => b.year - a.year);
        } else if (sortCriteria === 'title') {
            list.sort((a, b) => a.title.localeCompare(b.title));
        }

        return list;
    }

    function renderAnimeGrid() {
        const grid = document.getElementById('anime-grid');
        const countLabel = document.getElementById('results-count');
        if (!grid) return;

        const filteredList = getFilteredAnimeList();

        if (countLabel) {
            countLabel.textContent = `${filteredList.length} Anime Ditemukan`;
        }

        if (filteredList.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full py-16 text-center space-y-3">
                    <div class="w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange mx-auto flex items-center justify-center text-3xl">
                        <i class="fa-regular fa-face-frown"></i>
                    </div>
                    <h3 class="text-lg font-bold text-stone-800 dark:text-stone-200">Tidak ada anime yang cocok</h3>
                    <p class="text-xs text-stone-500">Coba ganti kata kunci pencarian atau pilih genre lain.</p>
                    <button onclick="resetFilters()" class="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-glow-orange hover:scale-105 transition-all">
                        Reset Filter
                    </button>
                </div>
            `;
            return;
        }

        grid.innerHTML = filteredList.map(anime => {
            const isSaved = watchlist.includes(anime.id);
            return `
                <div class="anime-card group relative rounded-2xl overflow-hidden bg-white dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border shadow-md hover:border-brand-orange/60 flex flex-col cursor-pointer" onclick="openAnimeModalById(${anime.id})">
                    <!-- Image Container with Aspect Ratio -->
                    <div class="relative w-full aspect-[3/4] overflow-hidden bg-stone-900">
                        <img src="${anime.poster}" alt="${anime.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        
                        <!-- Overlay gradient -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70 group-hover:opacity-90 transition-opacity"></div>
                        
                        <!-- Top Badges -->
                        <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                            <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-brand-yellow border border-brand-yellow/30 flex items-center gap-1">
                                <i class="fa-solid fa-star text-[9px]"></i> ${anime.score}
                            </span>

                            <button onclick="event.stopPropagation(); toggleWatchlist(${anime.id})" title="${isSaved ? 'Hapus dari Watchlist' : 'Simpan ke Watchlist'}" class="w-7 h-7 rounded-lg ${isSaved ? 'bg-brand-orange text-white shadow-glow-orange' : 'bg-black/60 text-white/80 hover:text-white'} backdrop-blur-md flex items-center justify-center text-xs transition-all hover:scale-110">
                                <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>
                            </button>
                        </div>

                        <!-- Quick Play Icon on Hover -->
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div class="w-12 h-12 rounded-full bg-brand-orange text-white text-lg flex items-center justify-center shadow-glow-orange transform scale-75 group-hover:scale-100 transition-transform">
                                <i class="fa-solid fa-play ml-0.5"></i>
                            </div>
                        </div>

                        <!-- Bottom Tag -->
                        <div class="absolute bottom-2 left-2.5 right-2.5 z-10 flex items-center justify-between text-[11px] text-white/90">
                            <span class="font-semibold truncate">${anime.studio}</span>
                            <span class="px-1.5 py-0.5 rounded bg-brand-orange/80 font-bold text-[9px] uppercase">${anime.genres[0]}</span>
                        </div>
                    </div>

                    <!-- Details -->
                    <div class="p-3 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 group-hover:text-brand-orange transition-colors line-clamp-2" title="${anime.title}">
                                ${anime.title}
                            </h3>
                        </div>

                        <div class="pt-2 mt-2 border-t border-stone-100 dark:border-brand-dark-border/50 flex items-center justify-between text-[10px] text-stone-500 dark:text-stone-400">
                            <span>${anime.year}</span>
                            <span>${anime.episodes} Ep</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    window.openAnimeModalById = function(id) {
        const anime = ANIME_DATABASE.find(item => item.id === id);
        if (anime) openAnimeModal(anime, false);
    };

    window.resetFilters = function() {
        selectedGenre = 'all';
        searchQuery = '';
        const searchInput = document.getElementById('quick-search-input');
        if (searchInput) searchInput.value = '';
        const mobileSearch = document.getElementById('mobile-search-input');
        if (mobileSearch) mobileSearch.value = '';

        // Reset active genre button
        document.querySelectorAll('.genre-btn').forEach(btn => {
            if (btn.dataset.genre === 'all') {
                btn.className = 'genre-btn active px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-gradient-to-r from-brand-orange to-brand-yellow text-white shadow-glow-orange transition-all';
            } else {
                btn.className = 'genre-btn px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white dark:bg-brand-dark-card text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-brand-dark-border hover:border-brand-orange dark:hover:border-brand-orange transition-all';
            }
        });

        renderAnimeGrid();
    };

    window.filterByGenre = function(genre) {
        selectedGenre = genre;
        document.querySelectorAll('.genre-btn').forEach(btn => {
            if (btn.dataset.genre === genre) {
                btn.className = 'genre-btn active px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-gradient-to-r from-brand-orange to-brand-yellow text-white shadow-glow-orange transition-all';
            } else {
                btn.className = 'genre-btn px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white dark:bg-brand-dark-card text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-brand-dark-border hover:border-brand-orange dark:hover:border-brand-orange transition-all';
            }
        });
        renderAnimeGrid();
    };

    // ==========================================
    // ANIME DETAIL & TRAILER MODAL
    // ==========================================
    let currentModalAnime = null;
    let isTrailerPlaying = false;

    function openAnimeModal(anime, autoPlayTrailer = false) {
        currentModalAnime = anime;
        isTrailerPlaying = false;

        const modal = document.getElementById('anime-modal');
        const card = document.getElementById('modal-card');
        const bannerImg = document.getElementById('modal-banner-img');
        const posterImg = document.getElementById('modal-poster-img');
        const title = document.getElementById('modal-title');
        const jpTitle = document.getElementById('modal-japanese-title');
        const score = document.getElementById('modal-score');
        const synopsis = document.getElementById('modal-synopsis');
        const studio = document.getElementById('modal-studio');
        const season = document.getElementById('modal-season');
        const duration = document.getElementById('modal-duration');
        const source = document.getElementById('modal-source');
        const genresList = document.getElementById('modal-genres-list');
        const charactersList = document.getElementById('modal-characters-list');
        const watchlistBtn = document.getElementById('modal-watchlist-btn');
        const watchlistText = document.getElementById('modal-watchlist-text');
        const trailerWrapper = document.getElementById('modal-trailer-wrapper');
        const trailerOverlay = document.getElementById('modal-trailer-overlay');

        if (!modal) return;

        // Populate Data
        if (bannerImg) bannerImg.src = anime.banner;
        if (posterImg) posterImg.src = anime.poster;
        if (title) title.textContent = anime.title;
        if (jpTitle) jpTitle.textContent = '';
        if (score) score.textContent = anime.score;
        if (synopsis) synopsis.textContent = anime.synopsis;
        if (studio) studio.textContent = anime.studio;
        if (season) season.textContent = anime.season;
        if (duration) duration.textContent = anime.duration;
        if (source) source.textContent = anime.source;

        // Genres
        if (genresList) {
            genresList.innerHTML = anime.genres.map(g => 
                `<span class="px-2.5 py-1 text-xs rounded-lg bg-orange-100 dark:bg-brand-orange/20 text-brand-orange dark:text-orange-200 border border-brand-orange/30 font-semibold">${g}</span>`
            ).join('');
        }

        // Characters
        if (charactersList) {
            charactersList.innerHTML = anime.characters.map(char => `
                <div class="flex items-center gap-2.5 p-2 rounded-xl bg-stone-100 dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border">
                    <img src="${char.img}" alt="${char.name}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0">
                    <div class="overflow-hidden">
                        <p class="font-bold text-xs text-stone-900 dark:text-stone-100 truncate">${char.name}</p>
                        <p class="text-[10px] text-stone-500 dark:text-stone-400 truncate">VA: ${char.va}</p>
                    </div>
                </div>
            `).join('');
        }

        // Watchlist Button State
        const isSaved = watchlist.includes(anime.id);
        if (watchlistText) {
            watchlistText.textContent = isSaved ? 'Hapus dari Watchlist' : 'Tambah Watchlist';
        }
        if (watchlistBtn) {
            watchlistBtn.className = `flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-bold text-xs shadow-glow-orange hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 ${
                isSaved ? 'bg-stone-700 text-white' : 'bg-gradient-to-r from-brand-orange to-brand-yellow text-white'
            }`;
            watchlistBtn.onclick = () => {
                toggleWatchlist(anime.id);
                const nowSaved = watchlist.includes(anime.id);
                watchlistText.textContent = nowSaved ? 'Hapus dari Watchlist' : 'Tambah Watchlist';
                watchlistBtn.className = `flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-bold text-xs shadow-glow-orange hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 ${
                    nowSaved ? 'bg-stone-700 text-white' : 'bg-gradient-to-r from-brand-orange to-brand-yellow text-white'
                }`;
            };
        }

        // Reset Trailer Video
        trailerWrapper.innerHTML = `<img id="modal-banner-img" src="${anime.banner}" alt="${anime.title}" class="w-full h-full object-cover">`;
        trailerOverlay.style.display = 'flex';

        // Play Trailer button
        const playTrailerBtn = document.getElementById('modal-play-trailer-btn');
        if (playTrailerBtn) {
            playTrailerBtn.onclick = () => {
                startModalTrailerVideo(anime.trailerId);
            };
        }

        if (autoPlayTrailer) {
            startModalTrailerVideo(anime.trailerId);
        }

        // Share button
        const shareBtn = document.getElementById('modal-share-btn');
        if (shareBtn) {
            shareBtn.onclick = () => {
                if (navigator.share) {
                    navigator.share({
                        title: anime.title,
                        text: `Tonton anime ${anime.title} di KitsuneAnime!`,
                        url: window.location.href
                    }).catch(() => {});
                } else {
                    navigator.clipboard.writeText(`${anime.title} - ${window.location.href}`);
                    showToast('Link anime berhasil disalin ke clipboard!', 'fa-link');
                }
            };
        }

        // Show Modal
        modal.classList.remove('opacity-0', 'pointer-events-none');
        card.classList.remove('scale-95');
        card.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    }

    function startModalTrailerVideo(trailerId) {
        const trailerWrapper = document.getElementById('modal-trailer-wrapper');
        const trailerOverlay = document.getElementById('modal-trailer-overlay');
        if (!trailerWrapper) return;

        trailerWrapper.innerHTML = `
            <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1&rel=0&modestbranding=1" 
                    title="Anime Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        `;
        if (trailerOverlay) trailerOverlay.style.display = 'none';
        isTrailerPlaying = true;
    }

    function closeModal() {
        const modal = document.getElementById('anime-modal');
        const card = document.getElementById('modal-card');
        const trailerWrapper = document.getElementById('modal-trailer-wrapper');

        if (!modal) return;

        modal.classList.add('opacity-0', 'pointer-events-none');
        card.classList.remove('scale-100');
        card.classList.add('scale-95');
        document.body.style.overflow = '';

        // Stop video iframe
        if (trailerWrapper) {
            trailerWrapper.innerHTML = '';
        }
    }

    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    const modalBackdrop = document.getElementById('anime-modal');
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ==========================================
    // CHARACTER SPOTLIGHT SECTION
    // ==========================================
    function renderCharacters() {
        const charGrid = document.getElementById('character-grid');
        if (!charGrid) return;

        charGrid.innerHTML = CHARACTER_SPOTLIGHT.map(char => `
            <div class="character-card rounded-2xl bg-white dark:bg-brand-dark-card border border-brand-orange/20 shadow-lg p-5 flex flex-col justify-between hover:border-brand-orange/50 transition-all">
                <div class="space-y-4">
                    <!-- Image & Tag -->
                    <div class="relative w-full h-44 rounded-xl overflow-hidden bg-stone-900">
                        <img src="${char.img}" alt="${char.name}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <span class="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-brand-orange text-white font-black text-[10px] shadow-glow-orange">
                            ${char.tag}
                        </span>
                        <div class="absolute bottom-2 left-3 right-3">
                            <h3 class="text-base font-extrabold text-white">${char.name}</h3>
                            <p class="text-[11px] text-brand-yellow font-semibold">${char.anime}</p>
                        </div>
                    </div>

                    <!-- Quote -->
                    <div class="p-3 rounded-xl bg-orange-50/60 dark:bg-brand-dark-hover border border-brand-orange/20 space-y-1">
                        <p class="text-xs italic text-stone-700 dark:text-stone-300 font-medium">"${char.quote}"</p>
                        <p class="text-[10px] font-japanese text-brand-orange">${char.japaneseQuote}</p>
                    </div>

                    <!-- Stats / Traits -->
                    <div class="space-y-1.5 text-xs">
                        <div class="flex items-center justify-between text-stone-500 dark:text-stone-400">
                            <span>Peran:</span>
                            <span class="font-bold text-stone-800 dark:text-stone-200">${char.role}</span>
                        </div>
                        <div class="flex items-center justify-between text-stone-500 dark:text-stone-400">
                            <span>Kekuatan Utama:</span>
                            <span class="font-bold text-brand-orange dark:text-brand-yellow truncate ml-2">${char.power}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // AIRING SCHEDULE LOGIC
    // ==========================================
    function getTodayNameInIndonesian() {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const todayIdx = new Date().getDay();
        return days[todayIdx];
    }

    function renderSchedule(dayName) {
        const scheduleList = document.getElementById('schedule-list');
        if (!scheduleList) return;

        const items = WEEKLY_SCHEDULE[dayName] || [];

        if (items.length === 0) {
            scheduleList.innerHTML = `<p class="col-span-full text-xs text-stone-400 text-center py-6">Tidak ada jadwal rilis untuk hari ini.</p>`;
            return;
        }

        scheduleList.innerHTML = items.map(item => `
            <div class="p-4 rounded-2xl bg-white dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border shadow-sm flex items-center justify-between hover:border-brand-orange/50 transition-all">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-orange-100 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center font-black text-xs">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <div>
                        <h4 class="text-xs sm:text-sm font-bold text-stone-900 dark:text-white line-clamp-1">${item.title}</h4>
                        <div class="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                            <span class="text-brand-orange font-bold">${item.time}</span>
                            <span>•</span>
                            <span>${item.ep}</span>
                            <span>•</span>
                            <span>${item.studio}</span>
                        </div>
                    </div>
                </div>

                <span class="px-2 py-1 rounded-lg text-[10px] font-black bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30">
                    ${item.type}
                </span>
            </div>
        `).join('');
    }

    // Day Tabs Switcher
    const dayTabs = document.querySelectorAll('.day-tab');
    dayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            dayTabs.forEach(t => {
                t.className = 'day-tab px-3 py-1.5 rounded-xl text-xs font-semibold transition-all bg-white dark:bg-brand-dark-card text-stone-600 dark:text-stone-300';
            });
            tab.className = 'day-tab px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-brand-orange text-white active';
            currentSelectedDay = tab.dataset.day;
            renderSchedule(currentSelectedDay);
        });
    });

    // ==========================================
    // WATCHLIST MANAGEMENT (LocalStorage)
    // ==========================================
    window.toggleWatchlist = function(id) {
        const index = watchlist.indexOf(id);
        const anime = ANIME_DATABASE.find(item => item.id === id);
        const title = anime ? anime.title : 'Anime';

        if (index > -1) {
            watchlist.splice(index, 1);
            showToast(`${title} dihapus dari daftar tonton`, 'fa-trash');
        } else {
            watchlist.push(id);
            showToast(`${title} ditambahkan ke daftar tonton!`, 'fa-bookmark');
        }

        localStorage.setItem('kitsune_watchlist', JSON.stringify(watchlist));
        updateWatchlistUI();
        renderAnimeGrid();

        // If currently displaying this anime in hero, update hero bookmark
        if (spotlightList[currentHeroIndex] && spotlightList[currentHeroIndex].id === id) {
            renderHeroSlide(currentHeroIndex);
        }
    };

    function updateWatchlistUI() {
        const badge = document.getElementById('watchlist-badge');
        const watchlistGrid = document.getElementById('watchlist-grid');

        if (badge) badge.textContent = watchlist.length;

        if (!watchlistGrid) return;

        if (watchlist.length === 0) {
            watchlistGrid.innerHTML = `
                <div class="col-span-full py-10 text-center space-y-2">
                    <div class="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange mx-auto flex items-center justify-center text-xl">
                        <i class="fa-regular fa-bookmark"></i>
                    </div>
                    <p class="text-xs font-bold text-stone-700 dark:text-stone-300">Belum ada anime di daftar tontonan</p>
                    <p class="text-[11px] text-stone-500">Klik ikon bookmark pada anime mana saja untuk menyimpannya di sini.</p>
                </div>
            `;
            return;
        }

        const savedAnimeList = ANIME_DATABASE.filter(item => watchlist.includes(item.id));

        watchlistGrid.innerHTML = savedAnimeList.map(anime => `
            <div class="anime-card group relative rounded-2xl overflow-hidden bg-white dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border shadow-md flex flex-col cursor-pointer" onclick="openAnimeModalById(${anime.id})">
                <div class="relative w-full aspect-[3/4] overflow-hidden bg-stone-900">
                    <img src="${anime.poster}" alt="${anime.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute top-2 right-2 z-10">
                        <button onclick="event.stopPropagation(); toggleWatchlist(${anime.id})" title="Hapus" class="w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center text-xs shadow-md hover:scale-110 transition-transform">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <div class="p-3">
                    <h4 class="font-bold text-xs text-stone-900 dark:text-white truncate">${anime.title}</h4>
                    <p class="text-[10px] text-brand-orange mt-0.5">⭐ ${anime.score} • ${anime.episodes} Ep</p>
                </div>
            </div>
        `).join('');
    }

    const clearWatchlistBtn = document.getElementById('clear-watchlist-btn');
    if (clearWatchlistBtn) {
        clearWatchlistBtn.addEventListener('click', () => {
            if (watchlist.length === 0) return;
            if (confirm('Apakah kamu yakin ingin mengosongkan seluruh daftar tonton?')) {
                watchlist = [];
                localStorage.setItem('kitsune_watchlist', JSON.stringify(watchlist));
                updateWatchlistUI();
                renderAnimeGrid();
                showToast('Daftar tontonan telah dibersihkan', 'fa-trash');
            }
        });
    }

    // ==========================================
    // TOAST NOTIFICATIONS
    // ==========================================
    let toastTimeout;
    function showToast(message, iconClass = 'fa-check') {
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toast-message');
        const toastIcon = document.getElementById('toast-icon');

        if (!toast) return;

        if (toastMsg) toastMsg.textContent = message;
        if (toastIcon) toastIcon.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;

        clearTimeout(toastTimeout);
        toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
        toast.classList.add('translate-y-0', 'opacity-100');

        toastTimeout = setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
        }, 3200);
    }

    // ==========================================
    // EVENT LISTENERS & SEARCH
    // ==========================================
    function setupEventListeners() {
        // Quick Search
        const searchInput = document.getElementById('quick-search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                if (clearSearchBtn) {
                    clearSearchBtn.classList.toggle('hidden', searchQuery === '');
                }
                renderAnimeGrid();
            });
        }

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                searchQuery = '';
                if (searchInput) searchInput.value = '';
                clearSearchBtn.classList.add('hidden');
                renderAnimeGrid();
            });
        }

        // Mobile Search
        const mobileSearch = document.getElementById('mobile-search-input');
        if (mobileSearch) {
            mobileSearch.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderAnimeGrid();
            });
        }

        // Sort Select
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                sortCriteria = e.target.value;
                renderAnimeGrid();
            });
        }

        // Genre Filter Chips
        const genreBtns = document.querySelectorAll('.genre-btn');
        genreBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                genreBtns.forEach(b => {
                    b.className = 'genre-btn px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-white dark:bg-brand-dark-card text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-brand-dark-border hover:border-brand-orange dark:hover:border-brand-orange transition-all';
                });
                btn.className = 'genre-btn active px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-gradient-to-r from-brand-orange to-brand-yellow text-white shadow-glow-orange transition-all';
                selectedGenre = btn.dataset.genre;
                renderAnimeGrid();
            });
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu on clicking any link
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    }

    // Smooth Scroll Helper
    window.scrollToSection = function(sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
});
