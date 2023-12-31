import type {Event} from "@/types";

import Events from "@/components/Events";

import data from "../../../data.json";

export default function DatePage({params: {date}}: {params: {date: string}}) {
  const events = data.filter((event) => event.beginsAt.split("T")[0] === date) as Event[];

  return <Events events={events} />;
}
