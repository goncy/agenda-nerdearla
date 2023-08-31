import type {Event} from "@/types";

import Events from "@/components/Events";

import events from "../../data.json";

export default function AllPage({
  searchParams,
}: {
  searchParams: {date: string | string[]; track: string | string[]; stage: string | string[]};
}) {
  return <Events events={events as Event[]} searchParams={searchParams} />;
}
