import React, { useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import { HomepageQueryResult } from "@/sanity.types";

type Props = {
  multiBlocks: HomepageQueryResult;
};

export default function SecondBlock({ multiBlocks }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="mx-auto grid min-h-full max-w-[1440px] grid-cols-1 place-content-center place-items-center gap-[1rem] px-[1rem] py-[4rem] lg:grid-cols-2 lg:gap-[5rem] lg:px-[3rem]"
    >
      {multiBlocks?.secondPart?.map((block, index) => {
        return (
          <div
            key={block._key}
            className="group relative flex aspect-square h-max max-h-[80rem] w-full flex-col lg:max-h-[50rem] lg:max-w-[50rem]"
          >
            <div className="relative min-h-[75%] min-w-full">
              <Image
                src={block.image?.imageUrl || ""}
                alt={block.image?.alt || ""}
                width={300}
                height={300}
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-0 h-full w-full bg-black bg-opacity-40 transition-opacity duration-300 ease-tamisitée group-hover:opacity-0" />
              <div className="] absolute bottom-[1rem] left-[1rem]">
                <h2 className="heroTitle group-hover:mix-blend-difference">
                  {block.title}
                </h2>
              </div>
            </div>
            <div className="flex min-h-[25%] flex-col items-end justify-start text-white">
              <div className="flex-1 bg-black p-[1rem]">
                <p className="heroParagraph">{block.paragraph}</p>
              </div>
              <Link
                href={block.cta?.ctaLink?.slug || ""}
                className="heroCta h-[1.5rem] bg-black px-[1.25rem] pb-[1rem]"
              >
                {block.cta?.ctaLabel} [+]
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
