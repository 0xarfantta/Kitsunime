"use client";

import { Anime } from "@/data/animeData";
import { Star, Bookmark, Play } from "lucide-react";

interface AnimeCardProps {
  anime: Anime;
  isBookmarked: boolean;
  onOpenModal: (anime: Anime) => void;
  onToggleWatchlist: (id: number) => void;
}

export default function AnimeCard({
  anime,
  isBookmarked,
  onOpenModal,
  onToggleWatchlist,
}: AnimeCardProps) {
  return (
    <div
      onClick={() => onOpenModal(anime)}
      className="anime-card group relative rounded-2xl overflow-hidden bg-white dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border shadow-md hover:border-brand-orange/60 flex flex-col cursor-pointer transition-all duration-300"
    >
      {/* Image Poster Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-900">
        <img
          src={anime.poster}
          alt={anime.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70 group-hover:opacity-90 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-brand-yellow border border-brand-yellow/30 flex items-center gap-1">
            <Star className="w-2.5 h-2.5 fill-brand-yellow" />
            {anime.score}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWatchlist(anime.id);
            }}
            title={isBookmarked ? "Hapus dari Watchlist" : "Simpan ke Watchlist"}
            className={`w-7 h-7 rounded-lg backdrop-blur-md flex items-center justify-center text-xs transition-all hover:scale-110 ${
              isBookmarked
                ? "bg-brand-orange text-white shadow-glow-orange"
                : "bg-black/60 text-white/80 hover:text-white"
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? "fill-white" : ""}`} />
          </button>
        </div>

        {/* Quick Play Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-brand-orange text-white text-lg flex items-center justify-center shadow-glow-orange transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="absolute bottom-2 left-2.5 right-2.5 z-10 flex items-center justify-between text-[11px] text-white/90">
          <span className="font-semibold truncate max-w-[60%]">{anime.studio}</span>
          <span className="px-1.5 py-0.5 rounded bg-brand-orange/80 font-bold text-[9px] uppercase">
            {anime.genres[0]}
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 group-hover:text-brand-orange transition-colors line-clamp-1"
            title={anime.title}
          >
            {anime.title}
          </h3>
          <p className="text-[10px] text-stone-400 font-japanese mt-0.5 truncate">
            {anime.japaneseTitle}
          </p>
        </div>

        <div className="pt-2 mt-2 border-t border-stone-100 dark:border-brand-dark-border/50 flex items-center justify-between text-[10px] text-stone-500 dark:text-stone-400">
          <span>{anime.year}</span>
          <span>{anime.episodes} Ep</span>
        </div>
      </div>
    </div>
  );
}
