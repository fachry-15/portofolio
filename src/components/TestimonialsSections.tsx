import * as React from "react";

// 1. Impor plugin Autoplay untuk slider otomatis
import Autoplay from "embla-carousel-autoplay";

// 2. Impor komponen Avatar
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// 3. Impor komponen Carousel dari shadcn/ui
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 4. Definisikan tipe untuk satu testimoni
interface TestimonialEntry {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

// 5. Definisikan props untuk komponen utama, termasuk 'title'
interface TestimonialsSectionsProps {
  title?: string;
  testimonials?: TestimonialEntry[];
}

// 6. Buat data default sebagai array untuk contoh
const defaultTestimonials: TestimonialEntry[] = [
  {
    quote:
      "The work is fast and the results are satisfying. The team is very professional and communicative throughout the internship process at LPP RRI Surabaya.",
    author: {
      name: "Nurhadi, A.Md",
      role: "Leader of Technical at LPP RRI Surabaya",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Nurhadi, A.Md",
      },
    },
  },
  {
    quote:
      "The work is satisfying and meets the project needs. The team is very professional and communicative during the project execution.",
    author: {
      name: "Lukman, S.Tr. Kom",
      role: "PIC Web Development at Assyavet Clinic and Pet Care",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        alt: "Lukman, S.Tr. Kom",
      },
    },
  },
  {
    quote:
      "The work meets the project needs exceptionally well and the quality of implementation is very satisfying. The attention to detail and timely delivery made our collaboration a great success.",
    author: {
      name: "Ahmad Fahriyannur Rosyady, S.Kom., M.MT",
      role: "Lecturer and PIC Web Development Maintenance batch 2 at P3M Politeknik Negeri Jember",
      avatar: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        alt: "Ahmad Fahriyannur Rosyady, S.Kom., M.MT",
      },
    },
  },
];

// 7. Komponen TestimonialsSections
const TestimonialsSections = ({
  title = "What People Say", // Default title
  testimonials = defaultTestimonials,
}: TestimonialsSectionsProps) => {

  // 8. Siapkan plugin Autoplay
  const plugin = React.useRef(
    Autoplay({ 
      delay: 5000, // Pindah slide setiap 5 detik
      stopOnInteraction: true // Berhenti otomatis jika pengguna berinteraksi (klik)
    })
  );

  return (
    <section className="py-32">
      <div className="container">

        {/* 9. HEADING / JUDUL UTAMA */}
        <h2 className="text-foreground mb-4 text-center text-3xl font-bold tracking-tighter sm:text-6xl">
          {title}
        </h2>
        <p className="text-muted-foreground mb-10 text-center text-lg">
          Discover what our satisfied customers have to say about their experiences.
        </p>
        
        {/* 10. Implementasi Carousel shadcn/ui */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto" // Samakan lebarnya (max-w-4xl)
          onMouseEnter={plugin.current.stop} // Berhenti saat mouse di atas slider
          onMouseLeave={plugin.current.reset} // Mulai lagi saat mouse pergi
          opts={{
            loop: true, // Kembali ke awal setelah slide terakhir
          }}
        >
          <CarouselContent>
            {/* 11. Map data testimoni Anda */}
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                {/* Ini adalah layout 1 item testimoni Anda */}
                <div className="flex flex-col items-center text-center p-4">
                  <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 md:gap-4">
                    <Avatar className="size-12 md:size-16">
                      <AvatarImage
                        src={testimonial.author.avatar.src}
                        alt={testimonial.author.avatar.alt}
                      />
                      {/* Fallback inisial nama, cth: "Sarah Johnson" -> "SJ" */}
                      <AvatarFallback>
                        {testimonial.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium md:text-base">
                        {testimonial.author.name}
                      </p>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {testimonial.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* 12. Tombol Navigasi (Bawaan shadcn/ui carousel) */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
      </div>
    </section>
  );
};

export { TestimonialsSections };