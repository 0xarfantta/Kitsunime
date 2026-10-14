"use client";

import { useState, useEffect } from "react";
import { Anime } from "@/data/animeData";
import { X, Play, Star, Bookmark, Share2, Tv, Calendar, Clock, Film } from "lucide-react";

interface AnimeDetailModalProps {
  anime: Anime | null;
  autoPlayTrailer?: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleWatchlist: (id: number) => void;
  onShowToast: (message: string, icon?: string) => void;
}

export default function AnimeDetailModal({
  anime,
  autoPlayTrailer = false,
  onClose,
  isBookmarked,
  onToggleWatchlist,
  onShowToast,
}: AnimeDetailModalProps) {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(autoPlayTrailer);

  useEffect(() => {
    setIsPlayingTrailer(autoPlayTrailer);
  }, [anime, autoPlayTrailer]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!anime) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: anime.title,
          text: `Tonton anime ${anime.title} di KitsuneStream!`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${anime.title} - ${window.location.href}`);
      onShowToast("Link anime berhasil disalin ke clipboard!", "fa-link");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-brand-orange backdrop-blur-md flex items-center justify-center transition-all hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Banner Header */}
        <div className="relative w-full aspect-video sm:aspect-[21/9] bg-stone-950 overflow-hidden flex-shrink-0">
          {isPlayingTrailer ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${anime.trailerId}?autoplay=1&rel=0&modestbranding=1`}
              title="Anime Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={anime.banner}
                alt={anime.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />

              {/* Play Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlayingTrailer(true)}
                  className="px-6 py-3 rounded-2xl bg-brand-orange/90 hover:bg-brand-orange text-white text-xs sm:text-sm font-bold shadow-glow-orange flex items-center gap-2 backdrop-blur-md hover:scale-105 transition-all"
                >
                  <Play className="w-5 h-5 fill-white" />
                  Putar Trailer Official HD
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 custom-scrollbar">
          {/* Main Info Header */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <img
              src={anime.poster}
              alt={anime.title}
              className="w-28 sm:w-36 aspect-[3/4] rounded-2xl object-cover shadow-lg border border-stone-200 dark:border-brand-dark-border flex-shrink-0"
            />
            <div className="space-y-3 flex-1">
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 dark:text-white">
                  {anime.title}
                </h2>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-900 text-brand-yellow font-black border border-brand-yellow/30 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-brand-yellow" />
                  {anime.score}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-orange-100 dark:bg-brand-orange/20 text-brand-orange font-bold">
                  {anime.status}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 font-medium">
                  {anime.year}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onToggleWatchlist(anime.id)}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs shadow-glow-orange hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 ${
                    isBookmarked
                      ? "bg-stone-700 text-white"
                      : "bg-gradient-to-r from-brand-orange to-brand-yellow text-white"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-white" : ""}`} />
                  {isBookmarked ? "Hapus dari Watchlist" : "Tambah Watchlist"}
                </button>

                <button
                  onClick={handleShare}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-brand-dark-hover border border-stone-200 dark:border-brand-dark-border text-stone-700 dark:text-stone-300 text-xs font-bold hover:border-brand-orange transition-all flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Bagikan
                </button>
              </div>
            </div>
          </div>

          {/* Quick Info Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-stone-50 dark:bg-brand-dark-hover border border-stone-200 dark:border-brand-dark-border text-xs">
            <div className="flex items-center gap-2.5">
              <Tv className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <div>
                <p className="text-[10px] text-stone-400">Studio</p>
                <p className="font-bold text-stone-800 dark:text-stone-200">{anime.studio}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <div>
                <p className="text-[10px] text-stone-400">Musim</p>
                <p className="font-bold text-stone-800 dark:text-stone-200">{anime.season}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <div>
                <p className="text-[10px] text-stone-400">Durasi</p>
                <p className="font-bold text-stone-800 dark:text-stone-200">{anime.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Film className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <div>
                <p className="text-[10px] text-stone-400">Sumber</p>
                <p className="font-bold text-stone-800 dark:text-stone-200">{anime.source}</p>
              </div>
            </div>
          </div>

          {/* Genres */}
          <div>
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
              Genre & Kategori
            </h4>
            <div className="flex flex-wrap gap-2">
              {anime.genres.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1 rounded-xl bg-orange-100 dark:bg-brand-orange/20 text-brand-orange dark:text-orange-200 border border-brand-orange/30 text-xs font-semibold"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
              Sinopsis Cerita
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-normal">
              {anime.synopsis}
            </p>
          </div>

          {/* Characters List */}
          {anime.characters && anime.characters.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                Karakter Utama & Voice Actor (Seiyuu)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {anime.characters.map((char) => (
                  <div
                    key={char.name}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-100 dark:bg-brand-dark-hover border border-stone-200 dark:border-brand-dark-border"
                  >
                    <img
                      src={char.img}
                      alt={char.name}
                      className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="overflow-hidden">
                      <p className="font-bold text-xs text-stone-900 dark:text-stone-100 truncate">
                        {char.name}
                      </p>
                      <p className="text-[10px] text-stone-500 dark:text-stone-400 truncate">
                        VA: {char.va}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
