"use client";

import { useState } from "react";
import { WEEKLY_SCHEDULE, ScheduleItem } from "@/data/animeData";
import { Calendar, Play } from "lucide-react";

const DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function AiringSchedule() {
  const getTodayNameInIndonesian = () => {
    const daysMap = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const idx = new Date().getDay();
    return daysMap[idx];
  };

  const [selectedDay, setSelectedDay] = useState<string>(getTodayNameInIndonesian());

  const items: ScheduleItem[] = WEEKLY_SCHEDULE[selectedDay] || [];

  return (
    <section id="schedule-section" className="my-14 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-6 h-6 text-brand-orange" />
            Jadwal Rilis Simulcast Mingguan
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Pantau jam tayang episode terbaru anime favorit Anda (WIB).
          </p>
        </div>

        {/* Day Tabs Switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none bg-stone-100 dark:bg-brand-dark-card p-1.5 rounded-2xl border border-stone-200 dark:border-brand-dark-border">
          {DAYS.map((day) => {
            const isActive = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-brand-orange text-white shadow-glow-orange scale-105"
                    : "text-stone-600 dark:text-stone-300 hover:text-brand-orange"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Schedule Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.length === 0 ? (
          <p className="col-span-full text-xs text-stone-400 text-center py-8">
            Tidak ada jadwal rilis untuk hari ini.
          </p>
        ) : (
          items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-brand-dark-card border border-stone-200 dark:border-brand-dark-border shadow-sm flex items-center justify-between hover:border-brand-orange/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-brand-orange/20 text-brand-orange flex items-center justify-center font-black text-xs flex-shrink-0">
                  <Play className="w-4 h-4 fill-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white line-clamp-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                    <span className="text-brand-orange font-bold">{item.time}</span>
                    <span>•</span>
                    <span>{item.ep}</span>
                    <span>•</span>
                    <span>{item.studio}</span>
                  </div>
                </div>
              </div>

              <span className="px-2 py-1 rounded-lg text-[10px] font-black bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 flex-shrink-0">
                {item.type}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
