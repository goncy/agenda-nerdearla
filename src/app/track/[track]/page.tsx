import type {Event} from "@/types";

import Events from "@/components/Events";

import data from "../../../data.json";

export default function TrackPage({
  searchParams,
  params: {track},
}: {
  searchParams: {date: string | string[]; track: string | string[]; stage: string | string[]};
  params: {track: string};
}) {
  const events = data.filter((event) => event.type === decodeURIComponent(track)) as Event[];

  return <Events events={events} searchParams={searchParams} />;
}
