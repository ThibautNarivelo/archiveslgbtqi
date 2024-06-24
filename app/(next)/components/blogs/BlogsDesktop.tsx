"use client";

import { BlogsQueryResult, EventsQueryResult } from "@/sanity.types";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DateFormat from "../DateFormat";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Marquee from "../ui/Marquee";

type BlogProps = {
  blog: BlogsQueryResult;
};

export default function BlogsDesktop({ blog }: BlogProps) {
  const router = useRouter();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence>
      <>
        {isClicked && (
          <motion.div
            initial={{ translateY: "100%" }}
            animate={{ translateY: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="fixed inset-0 z-50 bg-neutral-700"
          />
        )}
        <motion.div className="hidden min-h-[85dvh] flex-col justify-end lg:flex">
          {blog?.map((blogItem, index) => (
            <motion.button
              key={`event-${index}`}
              initial={{ height: "3.5rem" }}
              whileHover={
                hoveredIndex === index
                  ? { height: "7rem" }
                  : {
                      height: "3.5rem",
                      transition: {
                        duration: 1,
                        ease: [0.6, 0.01, 0.05, 0.95],
                      },
                    }
              }
              animate={
                isClicked
                  ? { height: 0, borderBottom: 0, opacity: 0 }
                  : { height: "3.5rem", borderBottom: 1, opacity: 1 }
              }
              transition={{
                height: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] },
                borderBottomWidth: {
                  duration: 1,
                  delay: 0.5, // Delay for the borderBottomWidth animation
                  ease: [0.6, 0.01, 0.05, 0.95],
                },
                opacity: {
                  duration: 1,
                  delay: 0.5, // Delay for the opacity animation
                  ease: [0.6, 0.01, 0.05, 0.95],
                },
              }}
              className="group relative flex items-start overflow-hidden border-b-[1px] border-black bg-white"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(true);
                setTimeout(() => {
                  router.push(`/blog/${blogItem.slug?.current}`);
                }, 1000);
              }}
            >
              {/* {hoveredIndex === index && (
                <motion.div
                  style={{
                    top: mousePosition.y,
                    left: mousePosition.x,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: "10rem" }}
                  exit={{ height: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.6, 0.01, 0.05, 0.95],
                  }}
                  className="pointer-events-none fixed z-50"
                >
                  <Image
                    src={
                      blogItem.image?.imageUrl ||
                      "https://via.placeholder.com/1000x1000"
                    }
                    alt={blogItem.image?.alt || "Event image"}
                    width={250}
                    height={250}
                    loading="eager"
                    className="h-full w-full origin-bottom object-cover"
                  />
                </motion.div>
              )} */}

              <div className="relative flex h-auto w-full flex-col px-[1rem]">
                <div className="flex items-center justify-between">
                  {blogItem.blogTitle?.length! > 15 ? (
                    <div className="flex h-[5.5rem] flex-col overflow-hidden rounded-r-full">
                      <Marquee
                        text={blogItem.blogTitle!}
                        className="eventTitle whitespace-nowrap transition-transform delay-200 duration-500 ease-tamisitée group-hover:animate-marquee"
                      />
                    </div>
                  ) : (
                    <div className="flex h-[5.5rem] flex-col overflow-hidden">
                      <h2 className="eventTitle transition-transform delay-200 duration-500 ease-tamisitée group-hover:translate-y-[-100%]">
                        {blogItem.blogTitle!}
                      </h2>
                      <h2 className="eventTitle transition-transform delay-200 duration-500 ease-tamisitée group-hover:translate-y-[-100%]">
                        {blogItem.blogTitle!}
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </>
    </AnimatePresence>
  );
}