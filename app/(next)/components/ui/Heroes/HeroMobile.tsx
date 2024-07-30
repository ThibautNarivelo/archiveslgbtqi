"use client";
import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { HomepageQueryResult } from "@/sanity.types";
import clsx from "clsx";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

type Props = {
  heroes: HomepageQueryResult;
};

export default function HeroDesktop({ heroes }: Props) {
  const [currentHero, setCurrentHero] = React.useState(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const paragraphRef = React.useRef<HTMLParagraphElement>(null);

  gsap.registerPlugin(Observer);

  useGSAP(() => {
    gsap.from(paragraphRef.current, {
      translateY: "100%",
      duration: 1,
      ease: "power4.inOut",
    });
  }, [currentHero]);

  // 👇🏽 create a function that auto slide horizontally

  return (
    <div className="relative flex max-h-[calc(100dvh-5rem)] min-h-[calc(100dvh-5rem)] w-full snap-x snap-mandatory overflow-y-hidden overflow-x-visible lg:hidden">
      {heroes?.hero?.map((hero) => (
        <div
          key={heroes?.hero?.indexOf(hero)}
          ref={containerRef}
          className="relative h-[100vh] min-w-[100vw] snap-center snap-always overflow-hidden mix-blend-normal"
        >
          <div className="relative w-full">
            <div className="group absolute inset-x-0 top-[1rem] flex flex-col items-end px-[1rem] text-white opacity-100 transition-all duration-500 ease-tamisitée">
              <div className="min-h-[10rem] space-y-[.5rem] bg-black p-[2rem]">
                <h1 ref={titleRef} className="heroTitle">
                  {hero.title}
                </h1>

                <p ref={paragraphRef} className="heroParagraph">
                  {hero.paragraph}
                </p>
              </div>

              <div className="relative w-fit translate-y-[-25%] overflow-hidden bg-black pb-[.5rem] transition-all duration-200 ease-tamisitée">
                <Link
                  href={
                    hero?.cta?.ctaLink?._type === "pages"
                      ? `/${hero.cta?.ctaLink?.slug || ""}`
                      : hero?.cta?.ctaLink?._type === "events"
                        ? `/agenda/${hero.cta?.ctaLink?.slug || ""}`
                        : hero?.cta?.ctaLink?._type === "blogs"
                          ? `/blog/${hero.cta?.ctaLink?.slug || ""}`
                          : "#"
                  }
                  className="heroCta relative z-10 h-full w-full px-[2rem]"
                >
                  {hero.cta?.ctaLabel} [+]
                </Link>
              </div>
            </div>

            {hero.image && (
              <>
                <Image
                  ref={imageRef}
                  src={
                    hero.image.imageUrl ||
                    "https://via.placeholder.com/1920x1080"
                  }
                  alt={hero.image.alt || ""}
                  width={
                    currentHero === heroes?.hero?.indexOf(hero) ? 400 : 200
                  }
                  height={
                    currentHero === heroes?.hero?.indexOf(hero) ? 400 : 200
                  }
                  className="h-full min-h-[calc(100dvh-5rem)] w-full object-cover"
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
