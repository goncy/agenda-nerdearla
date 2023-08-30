"use client";

import type {Node} from "./types";

import {useMemo, useState} from "react";

export default function HomePageClient({events}: {events: Node[]}) {
  const [date, setDate] = useState<string>(() => {
    const date = new Date().toISOString().split("T")[0];

    return date < "2023-09-26" || date > "2023-09-30" ? "2023-09-26" : date;
  });
  const matches = useMemo(
    () =>
      events.filter((event) => {
        const eventDate = new Date(event.beginsAt);

        return eventDate.toISOString().split("T")[0] === date;
      }),
    [date, events],
  );

  return (
    <section className="grid gap-8">
      <header className="grid gap-4">
        <h1 className="text-4xl font-semibold leading-tight">📅 Agenda</h1>
        <input
          className="rounded bg-gray-100 p-2 text-xl font-semibold leading-tight text-gray-900"
          max="2023-09-30"
          min="2023-09-26"
          type="date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
      </header>
      <article className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
        {matches.map((talk) => (
          <div key={talk.id} className="grid content-start gap-2">
            <img
              alt={talk.withEvent.title}
              className="h-[205px] object-cover"
              height={205}
              src={talk.bannerUrl}
            />
            <h1 className="text-xl font-semibold leading-tight">{talk.withEvent.title}</h1>
            <time className="opacity-70">⌚ {new Date(talk.beginsAt).toLocaleString("es-AR")}</time>
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
    </section>
  );
}
