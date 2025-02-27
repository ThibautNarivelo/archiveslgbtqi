import React from "react";
import Image from "next/image";

import { PortableTextBlock } from "next-sanity";

import clsx from "clsx";

import { LastEventQueryResult, PastEventQueryResult } from "@/sanity.types";

import { DateHourFormat, MyCustomPortableText } from "../ui";
import ButtonImage from "./ButtonImage";

type FutureEventProps = {
  id: string;
  eventsMap: LastEventQueryResult | PastEventQueryResult;
  status?: string;
  entry?: string;
};

export default function EventsMap({
  id,
  eventsMap,
  status,
  entry,
}: FutureEventProps) {
  if(status === "future") {
    eventsMap.reverse()
  }
  return (
    <div id={id} className="flex flex-col gap-[1rem]">
      <h1 className="pageTitle">{id === "future" ? "À venir" : "Passés"}</h1>
      <div className="">
        {eventsMap.map((event) => (
          <div
            key={event._id}
            className={clsx(
              "flex flex-col justify-between gap-[1rem] border-t-[3px] border-black lg:flex-row lg:gap-[5rem]",
              event !== eventsMap[eventsMap.length - 1] && "pb-[3rem]",
            )}
          >
            <div className="flex flex-col lg:justify-between">
              <div>
                <h2 className="eventType">{event.eventType}</h2>
                <h2 className="eventTitle">{event.eventTitle}</h2>
                <div className="eventDate flex flex-row pt-[1rem] lg:gap-[.5rem]">
                  {(event.eventDate?.eventDateType as String) ===
                  "dateRange" ? (
                    <>
                      <DateHourFormat
                        formatType="fullDate"
                        dateString={event.eventDate?.eventStartDate || ""}
                      />
                      {event.eventDate?.eventEndDate && (
                        <>
                          {" - "}
                          <DateHourFormat
                            formatType="fullDateWithYear"
                            dateString={event.eventDate?.eventEndDate || ""}
                          />
                        </>
                      )}
                      {" - "}
                      <DateHourFormat
                        formatType="shortHour"
                        dateString={event.eventDate?.eventStartDate || ""}
                      />
                    </>
                  ) : (
                    <>
                      <DateHourFormat
                        formatType="fullDateWithYear"
                        dateString={event.eventDate?.eventStartDate || ""}
                      />
                      &nbsp;
                      {event.eventDate?.eventEndDate ? (
                        <>
                          {"- Entre"}
                          &nbsp;
                          <DateHourFormat
                            formatType="shortHour"
                            dateString={event.eventDate?.eventStartDate || ""}
                          />
                          {"- "}
                          <DateHourFormat
                            formatType="shortHour"
                            dateString={event.eventDate?.eventEndDate || ""}
                          />
                        </>
                      ) : (
                        <>
                          {"-"}
                          &nbsp;
                          <DateHourFormat
                            formatType="shortHour"
                            dateString={event.eventDate?.eventStartDate || ""}
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-[.25rem] pt-[1rem]">
                  <span className="eventLocation">{event.eventLocation}</span>
                  <span
                    className={clsx(
                      "eventEntrance text-black",
                      entry === "future" && "text-pink-arch",
                    )}
                  >
                    {event.eventEntrance}
                  </span>
                </div>
              </div>
              <div className="pt-[3rem] lg:pt-0">
                <p className="eventParagraph min-w-full pb-[.12.5rem]">
                  {event.eventDescription2}
                </p>
              </div>
            </div>

            <Image
              src={event.image?.imageUrl || ""}
              alt={event.image?.alt || ""}
              width={450}
              height={400}
              className={clsx(
                "w-full object-cover object-left-top transition-[filter] duration-300 lg:h-[400px] lg:max-h-[400px] lg:w-[400px] lg:max-w-[400px]",
                status === "past" && "grayscale",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
