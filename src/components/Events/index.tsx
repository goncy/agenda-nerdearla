"use client";

import type {Event} from "@/types";

import {useSearchParams} from "next/navigation";

import Filters from "./filters";

function getUniqueValues<T>(array: T[], selector: (item: T) => string) {
  return array.reduce<string[]>((acc, item) => {
    const value = selector(item);

    if (!acc.includes(value)) acc.push(value);

    return acc;
  }, []);
}

export default function Events({events}: {events: Event[]}) {
  const searchParams = useSearchParams();
  const datesOptions = getUniqueValues(events, (talk) => talk.beginsAt.split("T")[0]);
  const tracksOptions = getUniqueValues(events, (talk) => talk.type);
  const stagesOptions = getUniqueValues(events, (talk) => talk.place);

  const selectedDates = searchParams.getAll("date");
  const selectedTracks = searchParams.getAll("track");
  const selectedStages = searchParams.getAll("stage");

  const matches = events.filter((talk) => {
    if (selectedDates.length && !selectedDates.some((date) => talk.beginsAt.includes(date)))
      return false;
    if (selectedTracks.length && !selectedTracks.some((track) => track === (talk.type as string)))
      return false;
    if (selectedStages.length && !selectedStages.some((stage) => stage === talk.place))
      return false;

    return true;
  });

  return (
    <section className="grid gap-8">
      <Filters options={{dates: datesOptions, tracks: tracksOptions, stages: stagesOptions}} />
      {matches.length ? (
        <article className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
          {matches.map((talk) => (
            <div key={talk.id} className="grid content-start gap-2">
              <img
                alt={talk.withEvent.title}
                className="h-[350px] bg-slate-900 object-contain md:h-[240px]"
                height={205}
                src={talk.bannerUrl}
              />
              <h1 className="text-xl font-semibold leading-tight">{talk.withEvent.title}</h1>
              <time className="opacity-70">
                ⌚ {new Date(talk.beginsAt).toLocaleString("es-AR")} - {talk.type}
              </time>
              {talk.withEvent.exhibitorList.map((exhibitor) => (
                <div key={exhibitor.id}>
                  <img
                    alt={exhibitor.name}
                    className="h-12 rounded bg-white"
                    src={exhibitor.logoUrl}
                  />
                </div>
              ))}
            </div>
          ))}
        </article>
      ) : (
        <p className="my-12 text-center opacity-70">No hay resultados</p>
      )}
    </section>
  );
}
