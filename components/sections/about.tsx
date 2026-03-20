"use client";

import { Target, Route, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Системная мотивация",
    description: "Последовательная работа с каждой аудиторией от первого контакта до активного взаимодействия"
  },
  {
    icon: Route,
    title: "Единый маршрут",
    description: "Понятная логика коммуникации для выстраивания доверительных отношений"
  },
  {
    icon: TrendingUp,
    title: "Путь к вовлечённости",
    description: "Поэтапный перевод от знакомства к интересу, от интереса к членству"
  }
];

const steps = [
  { num: 1, label: "Контакт" },
  { num: 2, label: "Знакомство" },
  { num: 3, label: "Интерес" },
  { num: 4, label: "Вовлечение" },
  { num: 5, label: "Членство" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block glass-card rounded-full px-5 py-2.5 text-sm font-medium text-white mb-6">
            О проекте
          </span>
          <h2 className="text-2xl font-bold text-white mb-5 glow-text text-balance">
            Зачем нужна дорожная карта?
          </h2>
          <p className="text-base text-white/80 leading-relaxed text-pretty">
            Профсоюз — это сообщество, объединяющее студентов,  
            администрацию, преподавателей и родителей ради общих целей.
          </p>
          <p className="text-base text-white/80 leading-relaxed text-pretty mt-2">
            <span className="text-white font-semibold">«Вместе мы можем больше»</span> — благодаря такому принципу каждый голос будет услышан, а каждый участник — важен.
          </p>
        </div>

        {/* Features cards - vertical stack */}
        <div className="space-y-4 mb-10">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="glass-card-strong rounded-3xl p-6"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual flow - vertical for mobile */}
        <div className="glass-card rounded-3xl p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Путь от контакта к членству
          </h3>
          <div className="relative">
            {/* Vertical line - исправленная версия */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/40 via-white/60 to-white/40 rounded-full" />
            
            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.num} className="flex items-center gap-5 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/30 to-white/20 flex items-center justify-center shrink-0 z-10 backdrop-blur-sm border border-white/30">
                    <span className="text-xl font-bold text-white">{step.num}</span>
                  </div>
                  <span className="text-base text-white/90 font-semibold">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}