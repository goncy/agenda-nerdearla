export interface Node {
  id: string;
  beginsAt: string;
  endsAt: string;
  type: Type;
  place: string;
  htmlDescription: string;
  bannerUrl: string;
  format: Format;
  categories: any[];
  maxSeats: null;
  remainingSeats: null;
  onDemand: null;
  preRecorded: null;
  liveStream: null;
  withEvent: WithEvent;
  __typename: NodeTypename;
  userSpeaker: null;
  visibility: Visibility;
  aggregation: Aggregation;
}

enum NodeTypename {
  CorePlanning = "Core_Planning",
}

interface Aggregation {
  aggregationId: string;
  value: Value;
  __typename: AggregationTypename;
}

enum AggregationTypename {
  CoreAggregation = "Core_Aggregation",
}

interface Value {
  text: Type;
  __typename: ValueTypename;
}

enum ValueTypename {
  CoreAggregationTextValue = "Core_AggregationTextValue",
}

enum Type {
  CharlaVirtual = "Charla virtual",
  WorkshopVirtual = "Workshop virtual",
}

enum Format {
  Physical = "PHYSICAL",
}

enum Visibility {
  Public = "PUBLIC",
}

interface WithEvent {
  title: string;
  firstSpeakers: any[];
  exhibitorList: ExhibitorList[];
  __typename: WithEventTypename;
  bookmark: Bookmark;
}

enum WithEventTypename {
  CorePlanningWithEvent = "Core_PlanningWithEvent",
}

interface Bookmark {
  isBookmarked: boolean;
  canBookmark: boolean;
  __typename: BookmarkTypename;
}

enum BookmarkTypename {
  CoreBookmarkComponent = "Core_BookmarkComponent",
}

interface ExhibitorList {
  id: string;
  name: string;
  logoUrl: string;
  __typename: string;
}
