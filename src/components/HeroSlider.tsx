"use client";

import { useState, useEffect } from "react";
import { Anime } from "@/data/animeData";
import { Play, Info, Bookmark, Star, Flame } from "lucide-react";

interface HeroSliderProps {
  spotlightList: Anime[];
  onOpenModal: (anime: Anime, autoPlayTrailer?: boolean) => void;
  watchlist: number[];
  onToggleWatchlist: (id: number) => void;
}

export default function HeroSlider({
  spotlightList,
  onOpenModal,
  watchlist,
  onToggleWatchlist,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % spotlightList.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [spotlightList.length]);

  const currentAnime = spotlightList[currentIndex];
  if (!currentAnime) return null;

  const isBookmarked = watchlist.includes(currentAnime.id);

  return (
    <section id="hero-section" className="relative w-full overflow-hidden rounded-3xl my-6 bg-stone-900 shadow-2xl border border-brand-orange/20 min-h-[500px] flex flex-col justify-end">
      {/* Background Banner with Smooth Transition */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 transform scale-105"
        style={{ backgroundImage: `url('${currentAnime.banner}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl space-y-4">
        {/* Spotlight Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
          <span>#{currentIndex + 1} Spotlight Anime</span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {currentAnime.title}
          </h1>
        </div>

        {/* Meta Info Badge Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-2.5 py-1 rounded-lg bg-black/60 text-brand-yellow font-black border border-brand-yellow/30 flex items-center gap-1 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 fill-brand-yellow" />
            {currentAnime.score}
          </span>
          <span className="text-stone-300 font-semibold">
            {currentAnime.year} • {currentAnime.episodes} Ep
          </span>
          <span className="px-2 py-0.5 rounded bg-brand-orange/80 text-white font-bold text-[10px] uppercase">
            {currentAnime.studio}
          </span>
        </div>

        {/* Synopsis */}
        <p className="text-xs sm:text-sm text-stone-300 line-clamp-3 leading-relaxed max-w-2xl font-normal">
          {currentAnime.synopsis}
        </p>

        {/* Genre Chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {currentAnime.genres.map((g) => (
            <span
              key={g}
              className="px-2.5 py-1 text-[11px] rounded-lg bg-stone-900/80 text-orange-200 border border-brand-orange/30 font-medium backdrop-blur-md"
            >
              {g}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <button
            onClick={() => onOpenModal(currentAnime, true)}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-yellow text-white text-xs font-bold shadow-glow-orange hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            Tonton Trailer HD
          </button>

          <button
            onClick={() => onOpenModal(currentAnime, false)}
            className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold backdrop-blur-md hover:scale-105 transition-all flex items-center gap-2"
          >
            <Info className="w-4 h-4" />
            Detail Anime
          </button>

          <button
            onClick={() => onToggleWatchlist(currentAnime.id)}
            className={`p-3 rounded-2xl border text-xs transition-all hover:scale-105 ${
              isBookmarked
                ? "bg-brand-orange text-white border-brand-orange shadow-glow-orange"
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
            title={isBookmarked ? "Hapus dari Watchlist" : "Simpan ke Watchlist"}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-white" : ""}`} />
          </button>
        </div>
      </div>

      {/* Slider Indicators (Dots) */}
      <div className="relative z-10 flex items-center justify-end gap-2 p-6 sm:p-8">
        {spotlightList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 h-2.5 rounded-full bg-brand-orange shadow-glow-orange"
                : "w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
