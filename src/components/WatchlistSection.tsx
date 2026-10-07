"use client";

import { Anime } from "@/data/animeData";
import { Bookmark, Trash2, X, Star } from "lucide-react";

interface WatchlistSectionProps {
  watchlist: number[];
  allAnime: Anime[];
  onOpenModal: (anime: Anime) => void;
  onToggleWatchlist: (id: number) => void;
  onClearWatchlist: () => void;
}

export default function WatchlistSection({
  watchlist,
  allAnime,
  onOpenModal,
  onToggleWatchlist,
  onClearWatchlist,
}: WatchlistSectionProps) {
  const savedAnimeList = allAnime.filter((item) => watchlist.includes(item.id));

  return (
    <section id="watchlist-section" className="my-14 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-white flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-brand-orange" />
            Daftar Tontonan Saya (Watchlist)
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              {watchlist.length} Anime
            </span>
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Koleksi anime favorit yang Anda simpan di browser ini.
          </p>
        </div>

        {watchlist.length > 0 && (
          <button
            onClick={onClearWatchlist}
            className="px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Kosongkan
          </button>
        )}
      </div>

      {savedAnimeList.length === 0 ? (
        <div className="py-12 text-center space-y-2 bg-white dark:bg-brand-dark-card rounded-3xl border border-stone-200 dark:border-brand-dark-border">
          <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange mx-auto flex items-center justify-center text-xl">
            <Bookmark className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-stone-700 dark:text-stone-300">
            Belum ada anime di daftar tontonan
          </p>
          <p className="text-[11px] text-stone-500">
            Klik ikon bookmark pada anime mana saja untuk menyimpannya di sini.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {savedAnimeList.map((anime) => (
            <div
              key={anime.id}
              onClick={() => onOpenModal(anime)}
              className="anime-card group relative rounded-2xl overflow-hidden bg-white dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border shadow-md flex flex-col cursor-pointer hover:border-brand-orange/60"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-900">
                <img
                  src={anime.poster}
                  alt={anime.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWatchlist(anime.id);
                    }}
                    title="Hapus dari Watchlist"
                    className="w-7 h-7 rounded-lg bg-red-500 text-white flex items-center justify-center text-xs shadow-md hover:scale-110 transition-transform"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-bold text-xs text-stone-900 dark:text-white truncate">
                  {anime.title}
                </h4>
                <p className="text-[10px] text-brand-orange mt-0.5 flex items-center gap-1 font-semibold">
                  <Star className="w-3 h-3 fill-brand-yellow text-brand-yellow" />
                  {anime.score} • {anime.episodes} Ep
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
