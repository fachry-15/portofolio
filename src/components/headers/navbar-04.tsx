import { Logo } from "./logo";
import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./navigation-sheet";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const Headers = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-6">
      <nav className="h-16 bg-background/95 backdrop-blur-sm border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <AnimatedThemeToggler />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
