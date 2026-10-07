"use client";

import { CHARACTER_SPOTLIGHT } from "@/data/animeData";
import { Sparkles, Quote } from "lucide-react";

export default function CharacterSpotlight() {
  return (
    <section id="character-section" className="my-14 space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-brand-orange" />
          Karakter Anime Favorit (Spotlight)
        </h2>
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
          Kutukan, pahlawan, dan sosok legendaris dari anime terpopuler.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CHARACTER_SPOTLIGHT.map((char) => (
          <div
            key={char.name}
            className="character-card rounded-2xl bg-white dark:bg-brand-dark-card border border-brand-orange/20 shadow-lg p-5 flex flex-col justify-between hover:border-brand-orange/50 transition-all"
          >
            <div className="space-y-4">
              {/* Image & Tag */}
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-stone-900">
                <img
                  src={char.img}
                  alt={char.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-brand-orange text-white font-black text-[10px] shadow-glow-orange">
                  {char.tag}
                </span>
                <div className="absolute bottom-2 left-3 right-3">
                  <h3 className="text-base font-extrabold text-white">{char.name}</h3>
                  <p className="text-[11px] text-brand-yellow font-semibold">{char.anime}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-3 rounded-xl bg-orange-50/60 dark:bg-brand-dark-hover border border-brand-orange/20 space-y-1">
                <p className="text-xs italic text-stone-700 dark:text-stone-300 font-medium flex gap-1">
                  <Quote className="w-3 h-3 text-brand-orange flex-shrink-0" />
                  "{char.quote}"
                </p>
                <p className="text-[10px] font-japanese text-brand-orange pl-4">
                  {char.japaneseQuote}
                </p>
              </div>

              {/* Stats / Traits */}
              <div className="space-y-1.5 text-xs pt-1">
                <div className="flex items-center justify-between text-stone-500 dark:text-stone-400">
                  <span>Peran:</span>
                  <span className="font-bold text-stone-800 dark:text-stone-200">
                    {char.role}
                  </span>
                </div>
                <div className="flex items-center justify-between text-stone-500 dark:text-stone-400">
                  <span>Kekuatan:</span>
                  <span className="font-bold text-brand-orange dark:text-brand-yellow truncate ml-2">
                    {char.power}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
