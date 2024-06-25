"use client";

// eslint-disable-next-line react-hooks/rules-of-hooks
import { HomepageQueryResult, PagesContentQueryResult } from "@/sanity.types";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { SplitText } from "./SplitText";

type Props = {
  heroes: HomepageQueryResult;
};

const AnimatedText = {
  hidden: { y: "100%" },
  visible: { y: 0 },
};

const HeroList = ({ heroes }: Props) => {
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
      className="no-scrollbar relative h-auto max-h-[100vh] overflow-y-scroll"
    >
      {heroes?.hero?.map((hero, index) => (
        <Link
          key={`hero-${index}`}
          href={
            hero.cta?.ctaLink?._type === "pages"
              ? `/${hero.cta?.ctaLink?.slug || ""}`
              : hero.cta?.ctaLink?._type === "events"
                ? `/agenda/${hero.cta?.ctaLink?.slug || ""}`
                : hero.cta?.ctaLink?._type === "blogs"
                  ? `/blog/${hero.cta?.ctaLink?.slug || ""}`
                  : "#"
          }
          passHref
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
                      <SplitText variants={AnimatedText} className="heroTitle">
                        {hero.title}
                      </SplitText>
                    </motion.h1>
                  </div>
                  <div>
                    <p className="sr-only">{hero.paragraph}</p>
                    <SplitText
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
                    </SplitText>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default HeroList;
