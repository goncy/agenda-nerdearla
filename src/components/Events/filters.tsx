"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useMemo} from "react";

const DATES = {
  "2023-09-26": "Martes 26",
  "2023-09-27": "Miércoles 27",
  "2023-09-28": "Jueves 28",
  "2023-09-29": "Viernes 29",
  "2023-09-30": "Sábado 30",
};

export default function Filters({
  options,
}: {
  options: {dates: string[]; tracks: string[]; stages: string[]};
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const dates = useMemo(() => searchParams.getAll("date"), [searchParams]);
  const tracks = useMemo(() => searchParams.getAll("track"), [searchParams]);
  const stages = useMemo(() => searchParams.getAll("stage"), [searchParams]);

  function handleChange(key: "date" | "track" | "stage", value: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    const values = newSearchParams.getAll(key);

    if (!values.includes(value)) {
      values.push(value);
    } else {
      values.splice(values.indexOf(value), 1);
    }

    newSearchParams.delete(key);

    for (const value of values) {
      newSearchParams.append(key, value);
    }

    router.push(`${pathname}/?${newSearchParams.toString()}`);
  }

  return (
    <header className="grid gap-2">
      {options.dates.length > 1 && (
        <div>
          <h1 className="text-2xl font-semibold">Fecha</h1>
          <fieldset className="flex flex-wrap gap-x-4">
            {options.dates.map((date) => (
              <label key={date} className="mr-2 space-x-2">
                <input
                  checked={dates.includes(date)}
                  name="date"
                  type="checkbox"
                  value={date}
                  onChange={() => handleChange("date", date)}
                />
                <span>{DATES[date as keyof typeof DATES] || date}</span>
              </label>
            ))}
          </fieldset>
        </div>
      )}
      {options.tracks.length > 1 && (
        <div>
          <h1 className="text-2xl font-semibold">Track</h1>
          <fieldset className="flex flex-wrap gap-x-4">
            {options.tracks.map((track) => (
              <label key={track} className="mr-2 space-x-2">
                <input
                  checked={tracks.includes(track)}
                  name="track"
                  type="checkbox"
                  value={track}
                  onChange={() => handleChange("track", track)}
                />
                <span>{track}</span>
              </label>
            ))}
          </fieldset>
        </div>
      )}
      {options.stages.length > 1 && (
        <div>
          <h1 className="text-2xl font-semibold">Escenario</h1>
          <fieldset className="flex flex-wrap gap-x-4">
            {options.stages.map((stage) => (
              <label key={stage} className="mr-2 space-x-2">
                <input
                  checked={stages.includes(stage)}
                  name="stage"
                  type="checkbox"
                  value={stage}
                  onChange={() => handleChange("stage", stage)}
                />
                <span>{stage}</span>
              </label>
            ))}
          </fieldset>
        </div>
      )}
    </header>
  );
}
