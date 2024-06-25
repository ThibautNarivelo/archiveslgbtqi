"use client";
import React from "react";

import Image from "next/image";

import { EventQueryResult } from "@/sanity.types";

import { motion } from "framer-motion";

import { DateAndHour } from "../ui";

type Event = {
  params: {
    event: string;
  };
  event: EventQueryResult;
};

export default function SingleEvent({ params, event }: Event) {
  return (
    <motion.div>
      <motion.div
        initial={{ translateY: "0loca%" }}
        animate={{ translateY: "-100%" }}
        transition={{
          duration: 1,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
        className="fixed inset-0 z-50 bg-neutral-700"
      />
      <div className="flex flex-col gap-[1rem]">
        <div className="mb-[1rem] flex flex-col justify-between gap-[1rem] border-b-[1px] border-black px-[1rem] pb-[1rem]">
          <h1 className="eventTitle">{event?.eventTitle}</h1>
          <div className="eventDate mb-[2rem] flex h-fit w-full justify-between rounded-full border-[1px] border-black px-[1rem] py-[.5rem] text-[.75rem]">
            <DateAndHour dateString={event?.eventDate?.eventStartDate || ""} />
            {event?.eventDate?.addEndDate && (
              <div className="flex w-1/2 items-center justify-between">
                <span className="mx-[0.5rem]">→</span>
                <DateAndHour dateString={event.eventDate.eventEndDate || ""} />
              </div>
            )}
          </div>
          <span className="eventLocation">{event?.eventLocation}</span>
          <p>{event?.eventDescription}</p>
        </div>
        <Image
          src={
            event?.image?.imageUrl || "https://via.placeholder.com/1000x1000"
          }
          alt={event?.image?.alt || "Event image"}
          width={1000}
          height={1000}
          loading="eager"
          className="h-auto min-w-full px-[1rem]"
        />
      </div>
    </motion.div>
  );
}
