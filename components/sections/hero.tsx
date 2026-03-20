"use client";

import { ChevronDown, Map, Users } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-28 pt-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-4 w-40 h-40 rounded-full bg-white/5 blur-3xl animate-float" />
        <div className="absolute bottom-40 right-4 w-56 h-56 rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 glass-card rounded-full px-5 py-3 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <span className="text-sm font-medium text-white">Профбюро №4 · 2026–2027</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl font-bold text-white mb-6 leading-tight glow-text text-balance px-2">
          Дорожная карта мотивации вступления в профсоюз
        </h1>

        {/* Subtitle */}
        <p className="text-base text-white/85 mb-10 leading-relaxed text-pretty px-4">
          Система работы с 6 целевыми аудиториями для привлечения и удержания членов профсоюза
        </p>

        {/* CTA Buttons - stacked for mobile */}
        <div className="flex flex-col gap-4 mb-14 px-2">
          <button 
            onClick={() => scrollToSection("audiences")}
            className="w-full bg-white text-[#69757C] rounded-2xl px-6 py-5 text-base font-semibold active:scale-[0.97] transition-all flex items-center justify-center gap-3"
          >
            <Users className="w-5 h-5" />
            <span>Выбрать аудиторию</span>
          </button>
          <button 
            onClick={() => scrollToSection("timelines")}
            className="w-full glass-button text-white rounded-2xl px-6 py-5 text-base font-semibold active:scale-[0.97] transition-all flex items-center justify-center gap-3"
          >
            <Map className="w-5 h-5" />
            <span>Смотреть таймлайны</span>
          </button>
        </div>

       {/* 6 audience preview cards - 2x3 grid */}
<div className="grid grid-cols-2 gap-3 mb-12 px-2">
  {[
    "Родители",
    "Абитуриенты", 
    "Студенты 1 курса",
    "Студенты 2–4 курса",
    "Администрация",
    "Преподаватели"
  ].map((item, i) => (
    <div 
      key={item}
      className="glass-card rounded-2xl px-4 py-4 transition-all duration-300 animate-float"
      style={{ animationDelay: `${i * 0.2}s` }}
    >
      <p className="text-white/90 text-sm font-medium leading-snug">{item}</p>
    </div>
  ))}
</div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection("about")}
          className="animate-bounce cursor-pointer p-3 active:opacity-70 transition-opacity"
          aria-label="Прокрутить вниз"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </button>
      </div>
    </section>
  );
}
