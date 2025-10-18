"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ArrowUpRight, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
          >
            <a href="#" className="inline-flex items-center">
              Fachry Rizky Prasetya <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Badge>
          <h1 className="mt-6 max-w-[30ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            Halo, I&apos;m Fachry,<br />a <span className="font-bold">Fullstack Web Developer</span>
          </h1>

          <p className="mt-6 max-w-[60ch] text-lg">
            I am a fullstack web developer who enjoys building efficient and user-friendly web applications.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <InteractiveHoverButton className="rounded-full text-base h-10 px-6">
              <a href="mailto:fachry150503@gmail.com" className="inline-flex items-center">
                Hire Me
              </a>
            </InteractiveHoverButton>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none flex items-center gap-2"
              asChild
            >
              <a href="https://drive.google.com/file/d/1SCFu74ka_g2BRCDa3lr5jBr_Kg9SPV9R/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Eye className="h-5 w-5" /> View Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img 
            src="/images/hero.png"
            alt="Fachry Rizky Prasetya - Fullstack Developer"
            className="w-full h-auto rounded-xl shadow-lg object-cover lg:max-h-[calc(100vh-6rem)]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;