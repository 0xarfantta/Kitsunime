"use client";

import { Flame, Heart } from "lucide-react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-stone-200 dark:border-brand-dark-border bg-white dark:bg-brand-dark-card transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center shadow-glow-orange">
              <Flame className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-stone-900 dark:text-white">
                Kitsune<span className="text-brand-orange">Stream</span>
              </span>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">
                Portal katalog anime modern dengan desain Citrus & Sunrise Warm.
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-stone-600 dark:text-stone-300">
            <button
              onClick={() => scrollToSection("hero-section")}
              className="hover:text-brand-orange transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("catalog-section")}
              className="hover:text-brand-orange transition-colors"
            >
              Katalog
            </button>
            <button
              onClick={() => scrollToSection("schedule-section")}
              className="hover:text-brand-orange transition-colors"
            >
              Jadwal Tayang
            </button>
            <button
              onClick={() => scrollToSection("character-section")}
              className="hover:text-brand-orange transition-colors"
            >
              Karakter
            </button>
            <button
              onClick={() => scrollToSection("watchlist-section")}
              className="hover:text-brand-orange transition-colors"
            >
              Watchlist
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-2">
          <p>© {new Date().getFullYear()} KitsuneStream. Powered by Next.js & Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" /> untuk penggemar anime.
          </p>
        </div>
      </div>
    </footer>
  );
}
