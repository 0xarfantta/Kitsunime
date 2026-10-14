"use client";

import { useState } from "react";
import { Search, Moon, Sun, Bookmark, Menu, X, Flame } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  watchlistCount: number;
  darkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (id: string) => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  watchlistCount,
  darkMode,
  toggleDarkMode,
  scrollToSection,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 dark:bg-brand-dark/80 border-b border-stone-200/80 dark:border-brand-dark-border/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          onClick={() => handleNavClick("hero-section")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="/logo.png" 
            alt="Kitsune Stream Logo" 
            className="w-11 h-11 rounded-2xl object-cover shadow-glow-orange group-hover:scale-105 transition-transform" 
          />
          <div>
            <span className="text-xl font-extrabold tracking-tight text-stone-900 dark:text-white flex items-center gap-1">
              Kitsune<span className="text-brand-orange">Stream</span>
            </span>
            <span className="block text-[10px] tracking-wider text-brand-yellow font-semibold -mt-0.5">
              Streaming Anime Indonesia
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100/70 dark:bg-stone-900/60 p-1.5 rounded-2xl border border-stone-200/50 dark:border-stone-800/50 backdrop-blur-md">
          <button
            onClick={() => handleNavClick("catalog-section")}
            className="px-4 py-2 rounded-xl text-xs font-bold text-stone-700 dark:text-stone-300 hover:text-brand-orange dark:hover:text-brand-yellow transition-all"
          >
            Katalog Anime
          </button>
          <button
            onClick={() => handleNavClick("schedule-section")}
            className="px-4 py-2 rounded-xl text-xs font-bold text-stone-700 dark:text-stone-300 hover:text-brand-orange dark:hover:text-brand-yellow transition-all"
          >
            Jadwal Tayang
          </button>
          <button
            onClick={() => handleNavClick("character-section")}
            className="px-4 py-2 rounded-xl text-xs font-bold text-stone-700 dark:text-stone-300 hover:text-brand-orange dark:hover:text-brand-yellow transition-all"
          >
            Karakter
          </button>
          <button
            onClick={() => handleNavClick("watchlist-section")}
            className="px-4 py-2 rounded-xl text-xs font-bold text-stone-700 dark:text-stone-300 hover:text-brand-orange dark:hover:text-brand-yellow transition-all flex items-center gap-1.5"
          >
            Watchlist
            {watchlistCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-brand-orange text-white font-extrabold">
                {watchlistCount}
              </span>
            )}
          </button>
        </nav>

        {/* Quick Search & Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search Input */}
          <div className="relative hidden lg:block w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari anime..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-stone-100 dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* Watchlist Quick Button */}
          <button
            onClick={() => handleNavClick("watchlist-section")}
            className="relative p-2.5 rounded-xl bg-stone-100 dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border text-stone-700 dark:text-stone-300 hover:border-brand-orange transition-all"
            title="Daftar Tontonan Saya"
          >
            <Bookmark className="w-4 h-4 text-brand-orange" />
            {watchlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] font-black flex items-center justify-center shadow-glow-orange">
                {watchlistCount}
              </span>
            )}
          </button>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-stone-100 dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border text-stone-700 dark:text-stone-300 hover:border-brand-orange transition-all"
            title="Ganti Tema Gelap / Terang"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-brand-yellow" />
            ) : (
              <Moon className="w-4 h-4 text-brand-orange" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-stone-100 dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border text-stone-700 dark:text-stone-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-brand-dark-border bg-white dark:bg-brand-dark px-4 py-4 space-y-3">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari anime..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-stone-100 dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border text-stone-900 dark:text-stone-100 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-bold pt-2">
            <button
              onClick={() => handleNavClick("catalog-section")}
              className="p-3 rounded-xl bg-stone-100 dark:bg-brand-dark-card text-left text-stone-800 dark:text-stone-200"
            >
              Katalog Anime
            </button>
            <button
              onClick={() => handleNavClick("schedule-section")}
              className="p-3 rounded-xl bg-stone-100 dark:bg-brand-dark-card text-left text-stone-800 dark:text-stone-200"
            >
              Jadwal Tayang
            </button>
            <button
              onClick={() => handleNavClick("character-section")}
              className="p-3 rounded-xl bg-stone-100 dark:bg-brand-dark-card text-left text-stone-800 dark:text-stone-200"
            >
              Karakter
            </button>
            <button
              onClick={() => handleNavClick("watchlist-section")}
              className="p-3 rounded-xl bg-stone-100 dark:bg-brand-dark-card text-left text-stone-800 dark:text-stone-200 flex items-center justify-between"
            >
              Watchlist
              {watchlistCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-brand-orange text-white text-[10px]">
                  {watchlistCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
