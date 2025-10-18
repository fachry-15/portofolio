"use client";

import * as React from "react";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-background p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[400px] max-w-5xl items-center justify-between">
        {/* Left side - 4 icons */}
        <div className="flex flex-col items-center justify-center gap-8">
          <Circle ref={div1Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.laravel />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.tailwind />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.javascript />
          </Circle>
        </div>

        {/* Center icon */}
        <Circle ref={div5Ref} className="size-20">
          <Icons.me />
        </Circle>

        {/* Right side - 4 icons */}
        <div className="flex flex-col items-center justify-center gap-8">
          <Circle ref={div6Ref}>
            <Icons.nodejs />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.postgresql />
          </Circle>
          <Circle ref={div8Ref}>
            <Icons.php />
          </Circle>
          <Circle ref={div9Ref}>
            <Icons.python />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div5Ref}
        curvature={80}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div5Ref}
        curvature={40}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div5Ref}
        curvature={40}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        curvature={80}
        endYOffset={15}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div5Ref}
        curvature={80}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div5Ref}
        curvature={40}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div5Ref}
        curvature={40}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div5Ref}
        curvature={80}
        endYOffset={15}
        reverse
      />
    </div>
  );
}

const Icons = {
  react: () => (
    <img
      src="/icons/react.svg"
      alt="React"
      width="24"
      height="24"
      className="w-6 h-6"
    />
  ),
  laravel: () => (
    <img
      src="/icons/laravel.svg"
      alt="Laravel"
      width="24"
      height="24"
      className="w-6 h-6"
    />
  ),
  tailwind: () => (
    <img
      src="/icons/tailwind.svg"
      alt="Tailwind CSS"
      width="24"
      height="24"
      className="w-6 h-6"
    />
  ),
  javascript: () => (
    <img
      src="/icons/javascript.svg"
      alt="JavaScript"
      width="24"
      height="24"
      className="w-6 h-6"
    />
  ),
  nodejs: () => (
    <img
      src="/icons/nodejs.svg"
      alt="Node.js"
      width="24"
      height="24"
      className="w-6 h-6"
    />
  ),
  postgresql: () => (
    <img
      src="/icons/postgresql.svg"
      alt="postgresql"
      width="24"
      height="24"
      className="w-6 h-6"
    />
  ),
  php: () => (
    <img
      src="/icons/php.svg"
      alt="PHP"
      width="24"
      height="24"
      className="w-6 h-6"
    />
  ),
  python: () => (
    <img
      src="/icons/python.svg"
      alt="Python"
      width="24"
      height="24"
      className="w-6 h-6"
    />
  ),
  // Keep the 'me' icon as SVG
  me: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
    </svg>
  ),
};
