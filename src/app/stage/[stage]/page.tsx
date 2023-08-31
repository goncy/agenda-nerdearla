import type {Event} from "@/types";

import Events from "@/components/Events";

import data from "../../../data.json";

export default function StagePage({params: {stage}}: {params: {stage: string}}) {
  const events = data.filter((event) => event.place === decodeURIComponent(stage)) as Event[];

  return <Events events={events} />;
}
