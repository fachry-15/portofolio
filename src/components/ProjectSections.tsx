"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface ProjectsProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Projects = ({
  heading = "Projects Showcase",
  items = [
    {
      id: "item-1",
      title: "TempatSampahku.id",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "https://github.com/fachry-15/sampahpintarku",
      image: "/projects/1.png",
    },
    {
      id: "item-2",
      title: "Assyavet Clinic and Pet Care",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "https://www.assyavetclinic.com/",
      image: "/projects/13.png",
    },
    {
      id: "item-3",
      title: "RRI SETITI",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "https://github.com/fachry-15/RRI_monitoring",
      image: "/projects/3.png",
    },
    {
      id: "item-4",
      title: "PUSGO",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "https://capstone-dicoding-react.vercel.app/",
      image: "/projects/2.png",
    },
    {
      id: "item-5",
      title: "Ruang belajar",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "https://revou-fundamental-course.github.io/8-jan-24-fachry-15.github.io/",
      image: "/projects/4.png",
    },
    {
      id: "item-6",
      title: "Si Bea Academic",
      summary:
        "A web application designed to help teams plan, organize, and manage their projects efficiently.",
      url: "https://github.com/fachry-15/Si_Bea",
      image: "/projects/11.png",
    },
    {
      id: "item-7",
      title: "SRIKANDI OC",
      summary:
        "A web application designed to help teams plan, organize, and manage their projects efficiently.",
      url: "#",
      image: "/projects/10.png",
    },
    {
      id: "item-8",
      title: "ECMO Web App",
      summary:
        "A web application designed to help teams plan, organize, and manage their projects efficiently.",
      url: "#",
      image: "/projects/5.png",
    },
    {
      id: "item-9",
      title: "Kita Muda Indonesia Website",
      summary:
        "A web application designed to help teams plan, organize, and manage their projects efficiently.",
      url: "https://hella.kencang.id/",
      image: "/projects/9.png",
    }, 
    {
      id: "item-10",
      title: "Markas Phone Website",
      summary:
        "A web application designed to help teams plan, organize, and manage their projects efficiently.",
      url: "https://markasphone.000webhostapp.com/",
      image: "/projects/12.png",
    }, 
    {
      id: "item-12",
      title: "Desktop App Inventory ",
      summary:
        "A web application designed to help teams plan, organize, and manage their projects efficiently.",
      url: "#",
      image: "/projects/6.png",
    }, 
    {
      id: "item-13",
      title: "STTECH",
      summary:
        "A web application designed to help teams plan, organize, and manage their projects efficiently.",
      url: "#",
      image: "/projects/7.png",
    }, 
    {
      id: "item-14",
      title: "P3M Politeknik Negeri Jember",
      summary:
        "A web application designed to help teams plan, organize, and manage their projects efficiently.",
      url: "https://p3m.polije.ac.id/",
      image: "/projects/8.png",
    }
  ],
}: ProjectsProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg md:text-xl">
              Explore a selection of projects that highlight my skills and
              expertise in web development.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
        
        <div className="w-full max-w-full overflow-hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
            className="relative w-full max-w-full"
          >
            <CarouselContent className="hide-scrollbar w-full max-w-full -ml-4">
              {items.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                  <a
                    href={item.url}
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-3/2 flex overflow-clip rounded-xl">
                        <div className="flex-1">
                          <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                      {item.summary}
                    </div>
                    <div className="flex items-center text-sm">
                      Read more{" "}
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Projects };
