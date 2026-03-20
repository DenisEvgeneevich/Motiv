"use client";

import { TrendingUp, Heart, Users, Award, Link2 } from "lucide-react";

const metrics = [
  {
    icon: Heart,
    title: "Уровень доверия",
    metric: "95%",
    subtext: "уровень"
  },
  {
    icon: Users,
    title: "Вовлечённость",
    metric: "1.5x",
    subtext: "участие"
  },
  {
    icon: Award,
    title: "Членство",
    metric: "+30% ",
    subtext: "рост среди первого курса"
  }
];

export function ResultsSection() {
  return (
    <section id="results" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block glass-card rounded-full px-5 py-2.5 text-sm font-medium text-white mb-6">
            Результаты
          </span>
          <h2 className="text-2xl font-bold text-white mb-5 glow-text text-balance">
            Что мы ожидаем?
          </h2>
          <p className="text-base text-white/80 leading-relaxed text-pretty">
            Системная работа приведёт к измеримым результатам
          </p>
        </div>

        {/* Metrics - vertical stack on mobile */}
        <div className="space-y-4 mb-6">
          {metrics.map((item) => (
            <div 
              key={item.title}
              className="glass-card-strong rounded-3xl p-5 flex items-center gap-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 glow">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-white glow-text">{item.metric}</span>
                  <span className="text-sm text-white/60">{item.subtext}</span>
                </div>
                <span className="text-base text-white/80 font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration card */}
        <div className="glass-card-strong rounded-3xl p-6 flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 glow">
            <Link2 className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-white glow-text">100%</span>
            </div>
            <p className="text-base text-white/80">Интеграция всех аудиторий в единую среду</p>
          </div>
        </div>

        {/* Summary card */}
        <div className="glass-card rounded-3xl p-6 text-center animate-pulse-glow">
          <h3 className="text-xl font-bold text-white mb-4">
            Главный результат
          </h3>
          <p className="text-base text-white/85 leading-relaxed">
            Профсоюз станет неотъемлемой частью студенческой жизни, 
            где каждый находит поддержку и возможности для развития.
          </p>
        </div>
      </div>
    </section>
  );
}
