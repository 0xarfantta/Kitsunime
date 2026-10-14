"use client";

import { useState, useEffect, useMemo } from "react";
import { ANIME_DATABASE, Anime } from "@/data/animeData";

import AmbientParticles from "@/components/AmbientParticles";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import GenreFilter from "@/components/GenreFilter";
import AnimeGrid from "@/components/AnimeGrid";
import CharacterSpotlight from "@/components/CharacterSpotlight";
import AiringSchedule from "@/components/AiringSchedule";
import WatchlistSection from "@/components/WatchlistSection";
import AnimeDetailModal from "@/components/AnimeDetailModal";
import ToastNotification from "@/components/ToastNotification";
import Footer from "@/components/Footer";

export default function Home() {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortCriteria, setSortCriteria] = useState("popularity");
  const [watchlist, setWatchlist] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState(true);

  // Modal State
  const [modalAnime, setModalAnime] = useState<Anime | null>(null);
  const [autoPlayTrailer, setAutoPlayTrailer] = useState(false);

  // Toast State
  const [toast, setToast] = useState<{
    message: string;
    icon: string;
    visible: boolean;
  }>({
    message: "",
    icon: "fa-check",
    visible: false,
  });

  // Top 4 Spotlight Anime for Hero Banner
  const spotlightList = useMemo(() => ANIME_DATABASE.slice(0, 4), []);

  // Initialize theme & watchlist from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("kitsune_theme") || "dark";
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    try {
      const savedWatchlist = JSON.parse(
        localStorage.getItem("kitsune_watchlist") || "[]"
      );
      if (Array.isArray(savedWatchlist)) {
        setWatchlist(savedWatchlist);
      }
    } catch {
      setWatchlist([]);
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("kitsune_theme", "dark");
      showToast("Mode Gelap Citrus Aktif", "fa-palette");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("kitsune_theme", "light");
      showToast("Mode Terang Sunrise Aktif", "fa-palette");
    }
  };

  // Toast Trigger Helper
  const showToast = (message: string, icon: string = "fa-check") => {
    setToast({ message, icon, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  };

  // Watchlist Toggle Helper
  const toggleWatchlist = (id: number) => {
    const anime = ANIME_DATABASE.find((item) => item.id === id);
    const title = anime ? anime.title : "Anime";

    setWatchlist((prev) => {
      let updated: number[];
      if (prev.includes(id)) {
        updated = prev.filter((item) => item !== id);
        showToast(`${title} dihapus dari daftar tonton`, "fa-trash");
      } else {
        updated = [...prev, id];
        showToast(`${title} ditambahkan ke daftar tonton!`, "fa-bookmark");
      }
      localStorage.setItem("kitsune_watchlist", JSON.stringify(updated));
      return updated;
    });
  };

  // Clear Watchlist
  const clearWatchlist = () => {
    if (watchlist.length === 0) return;
    if (confirm("Apakah kamu yakin ingin mengosongkan seluruh daftar tonton?")) {
      setWatchlist([]);
      localStorage.setItem("kitsune_watchlist", JSON.stringify([]));
      showToast("Daftar tontonan telah dibersihkan", "fa-trash");
    }
  };

  // Modal Open Handlers
  const handleOpenModal = (anime: Anime, autoPlay: boolean = false) => {
    setModalAnime(anime);
    setAutoPlayTrailer(autoPlay);
  };

  const handleCloseModal = () => {
    setModalAnime(null);
    setAutoPlayTrailer(false);
  };

  // Smooth Scroll Helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filtered & Sorted Anime List
  const filteredAnimeList = useMemo(() => {
    let list = [...ANIME_DATABASE];

    // Filter by Genre
    if (selectedGenre !== "all") {
      list = list.filter((item) => item.genres.includes(selectedGenre));
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          (item.romaji ? item.romaji.toLowerCase().includes(q) : false) ||
          (item.japaneseTitle ? item.japaneseTitle.toLowerCase().includes(q) : false) ||
          item.genres.some((g) => g.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortCriteria === "score") {
      list.sort((a, b) => b.score - a.score);
    } else if (sortCriteria === "newest") {
      list.sort((a, b) => b.year - a.year);
    } else if (sortCriteria === "title") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [selectedGenre, searchQuery, sortCriteria]);

  // Reset Filters
  const resetFilters = () => {
    setSelectedGenre("all");
    setSearchQuery("");
    setSortCriteria("popularity");
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Canvas Floating Particles Background */}
      <AmbientParticles />

      {/* Navigation Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        watchlistCount={watchlist.length}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {/* Hero Banner Slider */}
        <HeroSlider
          spotlightList={spotlightList}
          onOpenModal={handleOpenModal}
          watchlist={watchlist}
          onToggleWatchlist={toggleWatchlist}
        />

        {/* Catalog Section (Genre Filter & Grid) */}
        <section id="catalog-section">
          <GenreFilter
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            sortCriteria={sortCriteria}
            setSortCriteria={setSortCriteria}
            resultsCount={filteredAnimeList.length}
            onResetFilters={resetFilters}
          />

          <AnimeGrid
            animeList={filteredAnimeList}
            watchlist={watchlist}
            onOpenModal={handleOpenModal}
            onToggleWatchlist={toggleWatchlist}
            onResetFilters={resetFilters}
          />
        </section>

        {/* Weekly Airing Schedule Section */}
        <AiringSchedule />

        {/* Character Spotlight Section */}
        <CharacterSpotlight />

        {/* LocalStorage Watchlist Section */}
        <WatchlistSection
          watchlist={watchlist}
          allAnime={ANIME_DATABASE}
          onOpenModal={handleOpenModal}
          onToggleWatchlist={toggleWatchlist}
          onClearWatchlist={clearWatchlist}
        />
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Anime Detail Modal */}
      <AnimeDetailModal
        anime={modalAnime}
        autoPlayTrailer={autoPlayTrailer}
        onClose={handleCloseModal}
        isBookmarked={modalAnime ? watchlist.includes(modalAnime.id) : false}
        onToggleWatchlist={toggleWatchlist}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <ToastNotification toast={toast} />
    </div>
  );
}
