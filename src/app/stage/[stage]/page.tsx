import type {Event} from "@/types";

import Events from "@/components/Events";

import data from "../../../data.json";

export default function StagePage({
  searchParams,
  params: {stage},
}: {
  searchParams: {date: string | string[]; track: string | string[]; stage: string | string[]};
  params: {stage: string};
}) {
  const events = data.filter((event) => event.place === decodeURIComponent(stage)) as Event[];

  return <Events events={events} searchParams={searchParams} />;
}
