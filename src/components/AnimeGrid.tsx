"use client";

import { Anime } from "@/data/animeData";
import AnimeCard from "./AnimeCard";
import { Frown, RotateCcw } from "lucide-react";

interface AnimeGridProps {
  animeList: Anime[];
  watchlist: number[];
  onOpenModal: (anime: Anime) => void;
  onToggleWatchlist: (id: number) => void;
  onResetFilters: () => void;
}

export default function AnimeGrid({
  animeList,
  watchlist,
  onOpenModal,
  onToggleWatchlist,
  onResetFilters,
}: AnimeGridProps) {
  if (animeList.length === 0) {
    return (
      <div className="py-16 text-center space-y-3 bg-white dark:bg-brand-dark-card rounded-3xl border border-stone-200 dark:border-brand-dark-border my-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange mx-auto flex items-center justify-center text-3xl">
          <Frown className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200">
          Tidak ada anime yang cocok
        </h3>
        <p className="text-xs text-stone-500 max-w-sm mx-auto">
          Coba ganti kata kunci pencarian atau pilih genre lain.
        </p>
        <button
          onClick={onResetFilters}
          className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-glow-orange hover:scale-105 transition-all inline-flex items-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Filter
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-6">
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.id}
          anime={anime}
          isBookmarked={watchlist.includes(anime.id)}
          onOpenModal={onOpenModal}
          onToggleWatchlist={onToggleWatchlist}
        />
      ))}
    </div>
  );
}
