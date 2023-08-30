import api from "./api";
import HomePageClient from "./client";

export default async function HomePage() {
  const events = await api.event.list();

  return <HomePageClient events={events} />;
}
