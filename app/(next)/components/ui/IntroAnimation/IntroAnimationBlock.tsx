"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SettingsQueryResult } from "@/sanity.types";

import customEase from "@/app/(next)/utils/CustomCurves";
import ArchLogo from "../Svg/ArchLogo";

type IntroAnimationProps = {
  settings: SettingsQueryResult;
};

export default function IntroAnimationBlock({ settings }: IntroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("#archives", {
        xPercent: -100,
        duration: 1.5,
        delay: 0.5,
        ease: customEase,
      });
      gsap.from("#lgbtqi", {
        xPercent: 100,
        duration: 1.5,
        delay: 0.5,
        ease: customEase,
      });
      gsap.from("#centre", {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: customEase,
      });
      // gsap.to(containerRef.current, {
      //   yPercent: -100,
      //   duration: 1.5,
      //   delay: 3,
      //   ease: customEase,
      // });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex min-h-screen w-screen items-center justify-center bg-white"
    >
      <ArchLogo className="h-[12.5rem] lg:h-[20rem]" />
    </div>
  );
}