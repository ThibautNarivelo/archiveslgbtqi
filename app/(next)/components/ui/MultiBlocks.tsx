import { HomepageQueryResult } from "@/sanity.types";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  multiBlocks: HomepageQueryResult;
};

export default function MultiBlocks({ multiBlocks }: Props) {
  return (
    <div className="flex min-h-[25rem] flex-col divide-y-[1px] divide-black px-[1rem] py-[1rem] lg:flex-row lg:divide-x-[1px] lg:divide-y-0">
      {/* Agenda */}
      <div className="py-[1rem] lg:w-1/3 lg:py-0">
        <Link href="/agenda" className="text-[1.5rem] font-bold uppercase">
          L&apos;agenda
        </Link>
        <div className="flex flex-col gap-[1rem] lg:pt-[2rem]">
          {multiBlocks?.multiBlock?.eventsBlock?.events?.map((event, index) => (
            <Link
              key={`event-${index}`}
              href={`/agenda/${event.slug?.current || ""}`}
              className="flex w-fit flex-col gap-[.5rem]"
            >
              <span>{event.eventTitle}</span>
              <Image
                src={event.image?.imageUrl || ""}
                alt={event.image?.alt || ""}
                width="100"
                height="100"
                className="h-auto max-h-[5rem] w-auto"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Les Archives Vivantes */}
      <div className="py-[1rem] lg:w-1/3 lg:py-0 lg:pl-[1rem]">
        <h1 className="whitespace-nowrap text-[1.5rem] font-bold uppercase">
          Les Archives Vivantes
        </h1>
        <div className="flex flex-col lg:pt-[2rem]">
          <Link
            href={
              multiBlocks?.multiBlock?.lesArchivesVivantesBlock?.vimeo
                ?.linkToVimeo || ""
            }
          >
            {
              multiBlocks?.multiBlock?.lesArchivesVivantesBlock?.vimeo
                ?.vimeoTitle
            }
          </Link>
          <Link
            href={
              multiBlocks?.multiBlock?.lesArchivesVivantesBlock?.podcast
                ?.linkToPodcast || ""
            }
          >
            {
              multiBlocks?.multiBlock?.lesArchivesVivantesBlock?.podcast
                ?.podcastTitle
            }
          </Link>
        </div>
      </div>

      {/* Le Blog */}
      <div className="py-[1rem] lg:w-1/3 lg:py-0 lg:pl-[1rem]">
        <Link
          href="/blog"
          className="whitespace-nowrap text-[1.5rem] font-bold uppercase"
        >
          {multiBlocks?.multiBlock?.leBlogBlock?.blogLabel}
        </Link>
      </div>
    </div>
  );
}