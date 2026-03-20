"use client";

import { User, Users2, Building } from "lucide-react";

const roles = [
  {
    icon: User,
    title: "Профорг",
    subtitle: "Первичный контакт",
    description: "Связующее звено между профсоюзом и каждым студентом. Первым узнаёт о потребностях, помогает с адаптацией и вовлекает в жизнь профсоюза.",
    tasks: [
      "Личное общение со студентами",
      "Информирование о возможностях и мероприятиях",
      "Помощь одногруппникам",
      "Роль лидера группы",
      "Ведение социального паспорта группы"
    ]
  },
  {
    icon: () => (
    <img 
      src="/косатка.png" 
      alt="Логотип ППОСА"
      className="w-7 h-7 object-contain"
    />
  ),
    title: "Профбюро Института №4",
    subtitle: "Организация работы",
    description: "Команда активистов института: организует мероприятия, создаёт контент, координирует работу профоргов и развивает сообщество.",
    tasks: [
      "Организация мероприятий",
      "Создание полезного и развлекательного контента",
      "Координация работы профоргов",
      "Развитие внутри команды",
      "Взаимодействие с администрацией института/ВУЗа"
    ]
  },
 {
  icon: () => (
    <img 
      src="/profkom.png" 
      alt="Логотип ППОСА"
      className="w-7 h-7 object-contain"
    />
  ),
  title: "ППОСА ГУАП",
  subtitle: "Системная поддержка",
  description: "Обеспечивает ресурсы, стратегическое планирование и правовую защиту. Фундамент всей работы профсоюза в вузе.",
  tasks: [
    "Стратегическое планирование",
    "Ресурсная поддержка",
    "Правовая защита",
    "Межвузовское сотрудничество",
    "Масштабные проекты"
  ]
}
];

export function RolesSection() {
  return (
    <section id="roles" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block glass-card rounded-full px-5 py-2.5 text-sm font-medium text-white mb-6">
            Участники
          </span>
          <h2 className="text-2xl font-bold text-white mb-5 glow-text text-balance">
            Кто работает с аудиториями?
          </h2>
          <p className="text-base text-white/80 leading-relaxed text-pretty">
            Три уровня: от личного контакта до системной поддержки
          </p>
        </div>

        {/* Roles cards - vertical stack */}
        <div className="space-y-5">
          {roles.map((role) => (
            <div 
              key={role.title}
              className="glass-card-strong rounded-3xl p-6"
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 glow">
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-xl font-bold text-white mb-1">{role.title}</h3>
                  <span className="text-sm text-white/60 font-medium">{role.subtitle}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-white/80 leading-relaxed mb-5">{role.description}</p>

              {/* Tasks */}
              <div className="pt-5 border-t border-white/15">
                <span className="text-sm font-semibold text-white/70 block mb-3">Задачи:</span>
                <div className="flex flex-wrap gap-2">
                  {role.tasks.map((task, i) => (
                    <span
                      key={i}
                      className="text-sm bg-white/15 text-white/80 px-3 py-2 rounded-xl"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection visual */}
        <div className="mt-8 glass-card rounded-3xl p-6">
          <h3 className="text-lg font-bold text-white mb-8 text-center">
            Как работает система?
          </h3>
          <div className="flex flex-col items-center gap-4">
            {roles.map((role, i) => (
              <div key={role.title} className="flex flex-col items-center text-center relative z-10 w-full">
                <div className="flex items-center gap-4 w-full glass-card rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 glow">
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-base text-white font-bold">{role.title}</p>
                    <p className="text-sm text-white/60">{role.subtitle}</p>
                  </div>
                </div>
                {i < roles.length - 1 && (
                  <div className="w-0.5 h-4 bg-white/20 my-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
