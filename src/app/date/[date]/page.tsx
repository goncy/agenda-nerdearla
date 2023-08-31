import type {Event} from "@/types";

import Events from "@/components/Events";

import data from "../../../data.json";

export default function DatePage({
  searchParams,
  params: {date},
}: {
  searchParams: {date: string | string[]; track: string | string[]; stage: string | string[]};
  params: {date: string};
}) {
  const events = data.filter((event) => event.beginsAt.split("T")[0] === date) as Event[];

  return <Events events={events} searchParams={searchParams} />;
}
