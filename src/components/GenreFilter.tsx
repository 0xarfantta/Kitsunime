"use client";

import { SlidersHorizontal, RotateCcw } from "lucide-react";

interface GenreFilterProps {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  sortCriteria: string;
  setSortCriteria: (criteria: string) => void;
  resultsCount: number;
  onResetFilters: () => void;
}

const GENRES = [
  "all",
  "Action",
  "Fantasy",
  "Shounen",
  "Supernatural",
  "Adventure",
  "Drama",
  "Comedy",
  "Sci-Fi",
  "Romance",
  "Isekai",
  "Slice of Life",
];

export default function GenreFilter({
  selectedGenre,
  setSelectedGenre,
  sortCriteria,
  setSortCriteria,
  resultsCount,
  onResetFilters,
}: GenreFilterProps) {
  return (
    <div className="space-y-4 my-8">
      {/* Top Header & Sort Options */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-white flex items-center gap-2">
            Katalog Anime Terlengkap
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              {resultsCount} Anime
            </span>
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Jelajahi koleksi anime favorit dengan filter genre & peringkat.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Reset Filters button */}
          <button
            onClick={onResetFilters}
            className="p-2.5 rounded-xl bg-stone-100 dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border text-stone-600 dark:text-stone-300 hover:text-brand-orange text-xs font-semibold flex items-center gap-1.5 transition-all"
            title="Reset Filter"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Sort Select Dropdown */}
          <div className="flex items-center gap-2 bg-stone-100 dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border px-3 py-2 rounded-xl">
            <SlidersHorizontal className="w-4 h-4 text-brand-orange" />
            <select
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
              className="bg-transparent text-xs font-bold text-stone-800 dark:text-stone-200 focus:outline-none cursor-pointer"
            >
              <option value="popularity" className="bg-white dark:bg-stone-900">
                Urutkan: Terpopuler
              </option>
              <option value="score" className="bg-white dark:bg-stone-900">
                Urutkan: Rating Tertinggi
              </option>
              <option value="newest" className="bg-white dark:bg-stone-900">
                Urutkan: Rilis Terbaru
              </option>
              <option value="title" className="bg-white dark:bg-stone-900">
                Urutkan: Judul (A-Z)
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Genre Chips Container */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {GENRES.map((genre) => {
          const isActive = selectedGenre === genre;
          const label = genre === "all" ? "Semua Genre" : genre;

          return (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-xl text-xs whitespace-nowrap transition-all duration-200 font-bold ${
                isActive
                  ? "bg-gradient-to-r from-brand-orange to-brand-yellow text-white shadow-glow-orange scale-105"
                  : "bg-white dark:bg-brand-dark-card text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-brand-dark-border hover:border-brand-orange dark:hover:border-brand-orange"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
