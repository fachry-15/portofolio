import { type FC } from 'react';
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedBeamDemo } from "../ui/animated-beam-demo";
import Services from './services';
import { useTheme } from "@/components/theme-provider";

const About: FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border mb-6"
          >
            About Me
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Get to know <span className="text-primary">Fachry</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate fullstack web developer with expertise in modern
            web technologies. I love creating efficient, scalable, and
            user-friendly applications that solve real-world problems.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">My Journey</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Started my journey in web development with a curiosity about how
                websites work. What began as a hobby quickly turned into a
                passion for creating digital experiences.
              </p>
              <p>
                Over the years, I've honed my skills in both frontend and
                backend development, allowing me to build complete web
                applications from concept to deployment.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest technologies and best practices in
                the industry.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <InteractiveHoverButton
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </InteractiveHoverButton>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            {/* Larger profile image without card */}
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl mb-4">
              <img
                src={`/images/about-${theme}.png`}
                alt="Fachry Rizky Prasetya"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold">Fachry Rizky Prasetya</h3>
            <p className="text-muted-foreground">Fullstack Web Developer</p>
          </div>
        </div>
        <Services />
        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The technologies I work with, all connected through my passion for
              development
            </p>
          </div>
          <AnimatedBeamDemo />
        </div>
      </div>
    </div>
  );
};

export default About;