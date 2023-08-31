import type {Event} from "@/types";

import Events from "@/components/Events";

import events from "../../data.json";

export default function AllPage() {
  return <Events events={events as Event[]} />;
}
