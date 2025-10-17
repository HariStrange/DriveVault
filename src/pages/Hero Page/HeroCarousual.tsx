import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Wrench,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CarouselSlide {
  id: number;
  icon: React.ReactNode;
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  gradient: string;
  backgroundImage: string;
}

// interface Card {
//   id: number;
//   icon: React.ReactNode;
//   title: string;
//   image: string;
// }



const slides: CarouselSlide[] = [
  {
    id: 1,
    icon: <Truck className="w-24 h-24" />,
    heading: "Drive Your Career Forward",
    subheading:
      "Connect with top European trucking companies. Premium opportunities for professional drivers ready to take the next step.",
    buttonText: "Hire Drivers",
    buttonLink: "/candidate/auth",
    gradient: "from-blue-600 to-cyan-500",
    backgroundImage:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1759744692/transport-logistics-concept-min_oeg7xx.jpg",
  },
  {
    id: 2,
    icon: <Wrench className="w-24 h-24" />,
    heading: "Skilled Welders Wanted",
    subheading:
      "Join leading industrial projects across Europe. Your expertise in welding opens doors to exceptional career opportunities.",
    buttonText: "Hire Welders",
    buttonLink: "/welder/auth",
    gradient: "from-orange-600 to-red-500",
    backgroundImage:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1759744702/welder-1-min_gytota.jpg",
  },
  {
    id: 3,
    icon: <GraduationCap className="w-24 h-24" />,
    heading: "Study in Europe",
    subheading:
      "Take our aptitude exam and unlock your potential. Shortlist for premier European universities and shape your future.",
    buttonText: "Start Exam",
    buttonLink: "/admin/login",
    gradient: "from-green-600 to-emerald-500",
    backgroundImage:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1759744702/student-1-min_pbdppk.jpg",
  },
];

export const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 h-full relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} bg-cover bg-center `}
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="relative h-full container mx-auto px-4 flex items-center">
                <div className="grid  gap-12 items-center w-full p-4 ml-8">
                  <div className="text-white space-y-4 animate-fade-in">
                    <div className="inline-block p-6 bg-white/10 rounded-2xl backdrop-blur-sm text-[10px]">
                      {slide.icon}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                      {slide.heading}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                      {slide.subheading}
                    </p>
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 font-semibold cursor-pointer"
                      onClick={() => (window.location.href = slide.buttonLink)}
                    >
                      {slide.buttonText}
                    </Button>
                  </div>

                  {/* <div className="hidden md:block">
                    <div className="relative h-[500px] w-full">
                      {cards.map((card) => {
                        const isProminent = card.id === slide.id;
                        const isLeftUnder =
                          card.id !== slide.id && card.id < slide.id;
                        const isRightUnder =
                          card.id !== slide.id && !isLeftUnder;

                        if (isProminent) {
                          return (
                            <div
                              key={card.id}
                              className="absolute inset-0 flex items-center justify-center z-20 rounded-3xl overflow-hidden"
                              style={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                              <div className="relative z-10 text-center p-8 w-full max-w-md">
                                <div className="mb-4 opacity-0">
                                  {card.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                  {card.title}
                                </h3>
                                <p className="text-white/80">Ready to Begin?</p>
                              </div>
                            </div>
                          );
                        }

                        if (isLeftUnder || isRightUnder) {
                          const side = isLeftUnder ? "left-8" : "right-8";
                          const rotation = isLeftUnder
                            ? "rotate-6"
                            : "-rotate-6";
                          const animationDelay = isLeftUnder
                            ? ""
                            : " animate-float-delay";

                          return (
                            <div
                              key={card.id}
                              className={`absolute bottom-16 ${side} w-64 h-48 rounded-2xl overflow-hidden shadow-2xl z-10 transition-all duration-1000 ${rotation} animate-float${animationDelay}`}
                              style={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="absolute inset-0 bg-black/40" />
                              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold truncate">
                                {card.title}
                              </div>
                            </div>
                          );
                        }

                        return null;
                      })}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
