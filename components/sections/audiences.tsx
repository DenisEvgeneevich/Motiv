"use client";

import { Heart, GraduationCap, Users, School, Building2, BookOpen, ChevronRight } from "lucide-react";

const audiences = [
  {
    id: "parents",
    icon: Heart,
    title: "Родители",
    shortGoal: "Доверие и поддержка",
    description: "Формируем понимание, что профсоюз защищает интересы студентов и помогает в адаптации.  Родители видят, что их дети под надёжной защитой, и могут быть спокойны за их учебный путь",
    importantTo: "Безопасность ребёнка, понимание пользы, связь с вузом"
  },
  {
    id: "applicants",
    icon: GraduationCap,
    title: "Абитуриенты",
    shortGoal: "Первое впечатление",
    description: (
      <p>
Абитуриентам показываем профсоюз как часть яркой студенческой жизни ещё до поступления.<p></p> Это события, новые знакомства, надёжная защита прав, поддержка и безопасность. <p></p>Профсоюз — это семья, которая никогда не оставит вас в беде,
      </p>
    ),
    
    importantTo: "Атмосфера вуза, возможности развития, активное сообщество, самореализация, принятие общества, безопасность"
  },
  {
    id: "freshmen",
    icon: School,
    title: "Студенты 1 курса",
    shortGoal: "Адаптация и вступление",
    description:(<p>Студентам 1 курса помогаем освоиться в вузе и быстро стать частью дружного профсоюзного сообщества.<p></p> Это новые знакомства и друзья на всю жизнь, развитие мягких навыков и рост как личности. Это безопасная среда, где помогут с любой проблемой, подскажут про льготы и поддержат на первых шагах. <p></p> Профсоюз — твой старт в большую студенческую жизнь, ведь в Профком ГУАП всё #Сделано_С_Любовью !</p>), 
    importantTo: "Поддержка, новые друзья, навигация по вузу, мероприятия"
  },
  {
    id: "students",
    icon: Users,
    title: "Студенты 2–4 курса",
    shortGoal: "Удержание интереса",
    description: (
  <p>
    Студентам 2–4 курса: профсоюз — это не только материальная поддержка. 
    Мнение профсоюза, например, учитывают при дисциплинарных взысканиях, но это далеко не все.
    <p></p >
    Студент может состоять в нём и не быть активистом — защита прав и льготы доступны каждому члену.
    <p> </p>
    Но если хочешь большего, то есть множество путей развития. Многие из студентов уже думают о карьере в IT, 
    но работодатели ценят гибкие навыки, которые невозможно изучить, но можно прокачать в активе профбюро, 
    а также развить твёрдые: верстать сайты, создавать ботов, автоматизацию.
  </p>
),
    importantTo: "Интересные проекты, карьера, влияние, сообщество"
  },
  {
    id: "administration",
    icon: Building2,
    title: "Администрация",
    shortGoal: "Партнёрство",
    description: (
      <p> Выстраиваем конструктивное сотрудничество для улучшения среды вуза. Профсоюз — это не оппонент, а надёжный партнёр, который помогает снимать напряжение, решать вопросы студентов и преподавателей на ранних стадиях.<p> </p> Вместе мы формируем стабильную, комфортную и предсказуемую среду, где учитываются интересы всех сторон. </p>
    ),
    importantTo: "Диалог со студентами, совместные инициативы, репутация"
  },
  {
    id: "teachers",
    icon: BookOpen,
    title: "Преподаватели",
    shortGoal: "Сотрудничество",
    description: (<p>   Мы понимаем, что ваша главная задача — качественное обучение студентов. Именно ради этого преподаватели и кураторы каждый день решают сложные организационные, дисциплинарные и методические вопросы. Профсоюз не отвлекает от обучения, а способствует дополнительному развитию личности и качественному проведению свободного времени. Вместе мы дополняем обе части образования: вы - обучение, а мы - воспитание (ст. 2 ФЗ-273). ",
</p>),
    importantTo: "Понимание того, что профсоюз - это не способ пропускать пары, а важная часть воспитательного процесса"
  }
];

export function AudiencesSection() {
  const scrollToTimeline = (id: string) => {
    document.getElementById(`timeline-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="audiences" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block glass-card rounded-full px-5 py-2.5 text-sm font-medium text-white mb-6">
            6 целевых аудиторий
          </span>
          <h2 className="text-2xl font-bold text-white mb-5 glow-text text-balance">
            С кем мы работаем?
          </h2>
          <p className="text-base text-white/80 leading-relaxed text-pretty">
              От абитуриентов и студентов до родителей и администрации — мы объединяем всех, кто влияет на жизнь университета.<p></p> Для каждой аудитории разработан свой уникальный подход.
          </p>
        </div>

        {/* Audiences list - vertical cards for mobile */}
        <div className="flex flex-col gap-4">
          {audiences.map((audience) => (
            <button
              key={audience.id}
              onClick={() => scrollToTimeline(audience.id)}
              className="glass-card-strong rounded-3xl p-6 text-left active:scale-[0.98] transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 group-active:bg-white/30 transition-colors">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white leading-snug">{audience.title}</h3>
                    <ChevronRight className="w-5 h-5 text-white/40 shrink-0 mt-0.5 group-active:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm text-white/60 font-medium mb-3">{audience.shortGoal}</p>
                  <p className="text-sm text-white/75 leading-relaxed mb-4">{audience.description}</p>
                  <div className="pt-4 border-t border-white/15">
                    <p className="text-sm text-white/60 leading-relaxed">
                      <span className="font-semibold text-white/80">Важно: </span>
                      {audience.importantTo}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
