"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import Lenis from "lenis";

import { HomepageQueryResult } from "@/sanity.types";
import TextSplitting from "./TextSplitting";

type Props = {
  heroes: HomepageQueryResult;
};

const AnimatedText = {
  hidden: { y: "100%" },
  visible: { y: 0 },
};

export default function HeroSection({ heroes }: Props) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  if (!heroes) {
    return <h1>No Heroes Found</h1>;
  }

  return (
    <div
      data-lenis-prevent
      className="no-scrollbar relative h-[calc(100rem-5rem)] max-h-[100vh] overflow-y-scroll"
    >
      {heroes?.hero?.map((hero) => (
        <Link
          key={hero.title!}
          href={
            hero.cta?.ctaLink?._type === "pages"
              ? `/${hero.cta?.ctaLink?.slug || ""}`
              : hero.cta?.ctaLink?._type === "events"
                ? `/agenda/${hero.cta?.ctaLink?.slug || ""}`
                : hero.cta?.ctaLink?._type === "blogs"
                  ? `/blog/${hero.cta?.ctaLink?.slug || ""}`
                  : "#"
          }
          className="sticky top-0 max-h-[100vh] bg-white"
        >
          {hero.image && (
            <div className="relative max-h-full">
              <Image
                src={
                  hero.image.imageUrl || "https://via.placeholder.com/1920x1080"
                }
                alt={hero.image.alt || ""}
                className="h-full max-h-[100dvh] min-h-[100dvh] w-full min-w-full object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 flex items-center justify-center px-[2.5rem] lg:px-[10rem]">
                <div className="mb-[10vh] space-y-[2rem] text-center text-white mix-blend-difference">
                  <div>
                    <h1 className="sr-only">{hero.title}</h1>
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      transition={{
                        ease: [0.6, 0.01, 0.05, 0.95],
                        delay: 0.15,
                        staggerChildren: 0.1,
                        duration: 0.1,
                      }}
                      aria-hidden
                    >
                      <TextSplitting
                        variants={AnimatedText}
                        className="heroTitle"
                      >
                        {hero.title}
                      </TextSplitting>
                    </motion.h1>
                  </div>
                  <div>
                    <p className="sr-only">{hero.paragraph}</p>
                    <TextSplitting
                      initial={{ y: "102%" }}
                      whileInView="visible"
                      variants={{
                        visible: (i: number) => ({
                          y: 0,
                          transition: {
                            delay: i * 0.01,
                            ease: [0.6, 0.01, -0.05, 0.9],
                          },
                        }),
                      }}
                      aria-hidden
                      className="text-[1.5rem] font-medium uppercase leading-[1.5rem] tracking-tighter"
                    >
                      {hero.paragraph}
                    </TextSplitting>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}