"use client";

import { useState, useEffect } from "react";
import { Calendar, Users, ChevronLeft, ChevronRight } from "lucide-react";

// Тип для мероприятия
type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time?: string;
  audiences: string[];
  images: string[] | null;
};

// Данные мероприятий
const events: Event[] = [
  {
    id: 0,
    title: "Карточки активистов",
    description:
      "Хочешь узнать всех активистов нашего профбюро и познакомиться с ними поближе? 💜 Мы подготовили для тебя самую крутую коллекцию карточек активистов! Но как же получить их? Чтобы собрать полную коллекцию, надо посещать различные мероприятия нашего профбюро и не только. На обратной стороне карточки ты можешь найти уникальный код, введя который в бота, у тебя есть шанс на уникальные призы!",
    date: "Сентябрь - Декабрь",
    audiences: ["Абитуриенты", "Студенты 1 курса"],
    images: ["/k.png", "/p2.png", "/kart.jpg", "/kart3.jpg", "/kart4.jpg", "/kart5.jpg", "/kart6.jpg", "/kart7.jpg"],
  },
  {
    id: 1,
    title: "Встречи с абитуриентами",
    description:
      "Встречи в неформальной обстановке, где можно узнать о профсоюзе, задать любые вопросы и просто приятно провести время в кругу единомышленников. Формат: пикник на свежем воздухе, настольные игры и пледы, чай с печеньками от профсоюза, живое общение с активистами, возможность узнать всё о студенческой жизни до поступления",
    date: "Конец августа",
    audiences: ["Абитуриенты"],
    images: ["/ab.jpg", "/ab2.jpg", "/ab3.jpg"],
  },
    {
    id: 7,
    title: "День Знаний",
    description: "Первый праздник студентов!",
    date: "Конец августа",
    audiences: ["Абитуриенты", "Родители", "Администрация"],
    images: ["/zna.jpg", "/zna2.jpg", "/zna3.jpg"],
  },
  {
    id: 2,
    title: "Профстарт",
    description:
      "Трёхдневный велком профсоюза, в котором можно участвовать в различных станциях, получить призы и просто круто провести время.",
    date: "1–3 сентября",
    audiences: ["Абитуриенты", "Студенты 1 курса","Студенты 2-4 курса"],
    images: ["/profstart1.jpg", "/profstart2.jpg"],
  },
  {
    id: 3,
    title: "Мансарда",
    description:
      "Посвящение в первокурсники от профбюро нашего института, на котором можно познакомиться с активистами профбюро.",
    date: "Середина сентября",
    audiences: ["Студенты 1 курса"],
    images: ["/mansarda.jpg", "/mansarda2.jpg", "/mansarda3.jpg", "/mansarda4.jpg"],
  },
  {
    id: 4,
    title: "Студент высокого полёта (СВП)",
    description:
      "Программа для первокурсников от профсоюза. Это возможность познакомиться с активными студентами и проявить себя, проходя различные этапы.",
    date: "Октябрь - Ноябрь",
    audiences: ["Студенты 1 курса"],
    images: ["/svp.jpg", "/svp2.jpg"],
  },
  {
    id: 5,
    title: "Академия Профорка",
    description:
      "Школа актива и профоргов от профбюро нашего института, на которой активисты обучают первокурсников различным навыкам.",
    date: "1 октября - 1 ноября",
    audiences: ["Студенты 1 курса", "Студенты 2–4 курса"],
    images: ["/proforka.jpg", "/proforka2.jpg"],
  },

  {
  id: 6,
  title: "IT-квиз «НорБит»",
  description: "Интеллектуальная игра между первокурсниками и преподавателями от IT-компании «НорБит». Проверь свою эрудицию в IT-технологиях, космосе и логике. Сразись с преподавателями, найди новых друзей и получи призы от компании-партнёра. В конце всех ждёт горячая пицца!",
  date: "Март",
  audiences: ["Студенты 1 курса", "Преподаватели"],
  images: ["/kviz0.jpg", "/kviz.jpg", "/kviz2.jpg"],
},

  {
    id: 8,
    title: "Новогодний вечер",
    description:
      "Новогодний движ от профсоюза! 🔥 Устал от подготовки к экзаменам? Самое время оторваться по‑полной! Настолки, битва снежков из ваты и море приятных сюрпризов. Кто сказал, что Новый год можно отмечать только 31 декабря? Мы собираемся раньше, чтобы успеть всё!",
    date: "Перед Новым Годом",
    audiences: ["Студенты 1 курса", "Студенты 2-4 курса"],
    images: ["/cz.jpg", "/cz2.jpg", "/cz3.jpg"],
  },
  {
    id: 9,
    title: "Лучший профорг",
    description: "Конкурс самых крутых профоргов ГУАП!",
    date: "Февраль - Март",
    audiences: ["Студенты 1 курса", "Студенты 2-4 курса"],
    images: ["/elin.jpg","/lp.jpg", "/lp2.jpg"],
  },
  {
    id: 10,
    title: "Лучшее профбюро",
    description: "Самые крутые ПБ ГУАПа ждут свой час, чтобы доказать, что их команда - лучшая!",
    date: "Ноябрь",
    audiences: ["Студенты 1 курса", "Студенты 2-4 курса"],
    images: ["/lpb.jpg", "/lpb2.jpg"],
  },
{
  id: 11,
  title: "Игра «Мировое господство»",
  description: "Стратегическая игра от Профбюро №4. Возьми на себя роль правительства мировой державы и приведи свою страну к статусу сверхдержавы. Развивай экономику, заключай альянсы, используй дипломатию и блеф. Это отличная возможность прокачать навыки командной работы, стратегического мышления и лидерские качества. Присоединяйся и докажи, что твоя страна достойна вершины!",
  date: "Май",
  audiences: ["Студенты 1 курса", "Студенты 2-4 курса"],
  images: ["mg0.jpg", "/mg.jpg", "/mg1.jpg"],
},
];

// Компонент слайдера внутри карточки
function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Автопереключение каждые 3 секунды
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  // При ручном переключении останавливаем автоплей на 3 секунды
  const handleManualChange = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const next = () => handleManualChange((currentIndex + 1) % images.length);
  const prev = () =>
    handleManualChange((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[currentIndex]}
        alt={`slide ${currentIndex}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Кнопки навигации (появляются при наведении) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Индикаторы (точки) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManualChange(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/80 w-1.5"
                }`}
                aria-label={`Перейти к фото ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Компонент карточки мероприятия
function EventCard({ event }: { event: Event }) {
  const hasImages = event.images && event.images.length > 0;

  return (
    <div
      className={`glass-card-strong rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
    >
      {/* Блок изображения - соотношение 885:1236 */}
      <div className="relative aspect-[885/1236] bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
        {hasImages ? (
          <ImageSlider images={event.images!} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 flex items-center justify-center">
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-white/40" />
            </div>
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
          {event.title}
        </h3>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-5">
          {event.description}
        </p>

        {/* Дата */}
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          <Calendar className="w-4 h-4 text-white/50 shrink-0" />
          <span className="text-sm font-medium text-white/80">
            {event.date}
            {event.time && `, ${event.time}`}
          </span>
        </div>

        {/* Аудитории */}
        <div className="flex flex-wrap gap-2">
          {event.audiences.map((audience, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium bg-white/15 text-white/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
            >
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {audience}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EventsSection() {
  return (
    <section id="events" className="py-20 px-6">
      <div className="max-w-md mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block glass-card rounded-full px-5 py-2.5 text-sm font-medium text-white mb-6">
            Календарь
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 glow-text text-balance">
            Мероприятия
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed text-pretty">
            Ключевые события учебного года для целевых аудиторий профсоюза
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="space-y-5 sm:space-y-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}