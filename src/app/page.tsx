import data from "./data.json";
import Filters from "./filters";

function getUniqueValues<T>(array: T[], selector: (item: T) => string) {
  return array.reduce<string[]>((acc, item) => {
    const value = selector(item);

    if (!acc.includes(value)) acc.push(value);

    return acc;
  }, []);
}

function getValueAsArray(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value;
  else if (value) return [value];

  return [];
}

const datesOptions = getUniqueValues(data, (talk) => talk.beginsAt.split("T")[0]);
const tracksOptions = getUniqueValues(data, (talk) => talk.type);
const stagesOptions = getUniqueValues(data, (talk) => talk.place);

export default async function HomePage({
  searchParams,
}: {
  searchParams: {date: string | string[]; track: string | string[]; stage: string | string[]};
}) {
  const selectedDates = getValueAsArray(searchParams.date);
  const selectedTracks = getValueAsArray(searchParams.track);
  const selectedStages = getValueAsArray(searchParams.stage);

  const events = data.filter((talk) => {
    if (selectedDates.length && !selectedDates.some((date) => talk.beginsAt.includes(date)))
      return false;
    if (selectedTracks.length && !selectedTracks.some((track) => track === talk.type)) return false;
    if (selectedStages.length && !selectedStages.some((stage) => stage === talk.place))
      return false;

    return true;
  });

  return (
    <section className="grid gap-8">
      <Filters options={{dates: datesOptions, tracks: tracksOptions, stages: stagesOptions}} />
      <article className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
        {events.map((talk) => (
          <div key={talk.id} className="grid content-start gap-2">
            <img
              alt={talk.withEvent.title}
              className="h-[350px] bg-slate-900 object-contain md:h-[240px]"
              height={205}
              src={talk.bannerUrl}
            />
            <h1 className="text-xl font-semibold leading-tight">{talk.withEvent.title}</h1>
            <time className="opacity-70">
              ⌚ {new Date(talk.beginsAt).toLocaleString("es-AR")} - {talk.type}
            </time>
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
