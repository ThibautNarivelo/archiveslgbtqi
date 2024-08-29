"use client";
import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { HomepageQueryResult } from "@/sanity.types";
import clsx from "clsx";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import HeaderTransitionLink from "../../header/HeaderTransitionLink";

type Props = {
  heroes: HomepageQueryResult;
};

export default function HeroDesktop({ heroes }: Props) {
  const [currentHero, setCurrentHero] = React.useState(1);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const paragraphRef = React.useRef<HTMLParagraphElement>(null);

  gsap.registerPlugin(Observer);

  useGSAP(() => {
    gsap.from(paragraphRef.current, {
      translateY: "100%",
      duration: 2,
      ease: "power4.inOut",
    });
  }, [currentHero]);

  // 👇🏽 auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prevHero) => (prevHero + 1) % heroes?.hero?.length!);
    }, 20000);

    return () => clearInterval(interval);
  }, [heroes?.hero?.length]);

  return (
    <div className="relative hidden max-h-[calc(100vh-6rem)] min-h-[calc(100vh-6rem)] min-w-[100vw] lg:flex">
      {heroes?.hero?.map((hero) => (
        <div
          key={heroes?.hero?.indexOf(hero)}
          ref={containerRef}
          className={clsx(
            "relative h-full overflow-hidden bg-pink-arch transition-all duration-[.75s] ease-in-out",
            currentHero === heroes?.hero?.indexOf(hero)
              ? "w-[100vw] !cursor-auto mix-blend-normal"
              : "w-[3rem] mix-blend-luminosity hover:mix-blend-normal",
            currentHero === 0 &&
              heroes?.hero?.indexOf(hero) === 1 &&
              "cursor-w-resize",
            currentHero === 0 &&
              heroes?.hero?.indexOf(hero) === 2 &&
              "cursor-w-resize",
            currentHero === 1 &&
              heroes?.hero?.indexOf(hero) === 0 &&
              "cursor-e-resize",
            currentHero === 1 &&
              heroes?.hero?.indexOf(hero) === 2 &&
              "cursor-w-resize",
            currentHero === 2 &&
              heroes?.hero?.indexOf(hero) === 0 &&
              "cursor-e-resize",
            currentHero === 2 &&
              heroes?.hero?.indexOf(hero) === 1 &&
              "cursor-e-resize",
          )}
          onClick={() => setCurrentHero(heroes?.hero?.indexOf(hero)!)}
        >
          <div className="relative max-h-[calc(100dvh-5rem)] w-full lg:max-h-[calc(100vh-6rem)]">
            <HeaderTransitionLink
              href={
                hero?.cta?.ctaLink?._type === "pages"
                  ? `/${hero.cta?.ctaLink?.slug || ""}`
                  : hero?.cta?.ctaLink?._type === "events"
                    ? `/agenda/${hero.cta?.ctaLink?.slug || ""}`
                    : hero?.cta?.ctaLink?._type === "blogs"
                      ? `/blog/${hero.cta?.ctaLink?.slug || ""}`
                      : "#"
              }
              className={clsx(
                "group absolute bottom-[3rem] left-[2rem] flex max-h-[15rem] min-h-[15rem] w-[80%] min-w-[80%] max-w-[80%] flex-col items-start transition-[opacity] duration-300 ease-tamisitée",
                currentHero === heroes?.hero?.indexOf(hero)
                  ? "block opacity-100"
                  : "hidden opacity-0",
              )}
            >
              <div className="relative max-h-[15rem] min-h-[15rem] space-y-[.5rem] bg-black p-[2rem] text-white-primary transition-colors duration-300 ease-tamisitée group-hover:text-pink-arch">
                <h1
                  ref={titleRef}
                  className="heroTitle transition-none will-change-transform"
                >
                  {hero.title}
                </h1>

                <p
                  ref={paragraphRef}
                  className="heroParagraph transition-none will-change-transform"
                >
                  {hero.paragraph}
                </p>
                <div className="heroCta absolute bottom-0 right-0 translate-y-[99%] bg-black px-[1.25rem] pb-[.75rem]">
                  {hero.cta?.ctaLabel} [+]
                </div>
              </div>
            </HeaderTransitionLink>

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
                    currentHero === heroes?.hero?.indexOf(hero) ? 960 : 480
                  }
                  height={
                    currentHero === heroes?.hero?.indexOf(hero) ? 540 : 270
                  }
                  priority
                  className={clsx(
                    "h-full min-h-[calc(100vh-6rem)] w-full object-cover object-center transition-opacity duration-200 ease-in-out",
                    currentHero === heroes?.hero?.indexOf(hero)
                      ? ""
                      : "hover:opacity-50",
                  )}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
