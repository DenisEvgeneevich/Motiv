"use client";

import { ArrowUp, Map } from "lucide-react";

export function CTASection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTimelines = () => {
    document.getElementById("timelines")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="glass-card-strong rounded-3xl p-8 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 glass-card rounded-full px-5 py-3 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="text-sm font-medium text-white">Профбюро №4</span>
            </div>

            {/* Main heading */}
            <h2 className="text-2xl font-bold text-white mb-5 glow-text leading-snug text-balance">
              Понятная система.<br />
              Понятная ценность.<br />
              Понятный путь.
            </h2>

            {/* Description */}
            

            {/* CTA buttons - stacked */}
            <div className="flex flex-col gap-4">
              <button 
                onClick={scrollToTimelines}
                className="w-full bg-white text-[#69757C] rounded-2xl px-6 py-5 text-base font-semibold active:scale-[0.97] transition-all flex items-center justify-center gap-3"
              >
                <Map className="w-5 h-5" />
                <span>Все таймлайны</span>
              </button>
              <button 
                onClick={scrollToTop}
                className="w-full glass-button text-white rounded-2xl px-6 py-5 text-base font-semibold active:scale-[0.97] transition-all flex items-center justify-center gap-3"
              >
                <ArrowUp className="w-5 h-5" />
                <span>Наверх</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-1">
            Дорожная карта мотивации вступления в профсоюз
          </p>
          <p className="text-white/40 text-sm">
            Профбюро №4 · 2026–2027
          </p>
        </div>
      </div>
    </section>
  );
}
