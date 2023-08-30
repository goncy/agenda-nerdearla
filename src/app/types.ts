export interface Data {
  view: View;
}

export interface View {
  id: string;
  plannings: Plannings;
  __typename: string;
}

export interface Plannings {
  nodes: Node[];
  pageInfo: PageInfo;
  totalCount: number;
  __typename: string;
}

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

export enum NodeTypename {
  CorePlanning = "Core_Planning",
}

export interface Aggregation {
  aggregationId: string;
  value: Value;
  __typename: AggregationTypename;
}

export enum AggregationTypename {
  CoreAggregation = "Core_Aggregation",
}

export interface Value {
  text: Type;
  __typename: ValueTypename;
}

export enum ValueTypename {
  CoreAggregationTextValue = "Core_AggregationTextValue",
}

export enum Type {
  CharlaVirtual = "Charla virtual",
  WorkshopVirtual = "Workshop virtual",
}

export enum Format {
  Physical = "PHYSICAL",
}

export enum Visibility {
  Public = "PUBLIC",
}

export interface WithEvent {
  title: string;
  firstSpeakers: any[];
  exhibitorList: ExhibitorList[];
  __typename: WithEventTypename;
  bookmark: Bookmark;
}

export enum WithEventTypename {
  CorePlanningWithEvent = "Core_PlanningWithEvent",
}

export interface Bookmark {
  isBookmarked: boolean;
  canBookmark: boolean;
  __typename: BookmarkTypename;
}

export enum BookmarkTypename {
  CoreBookmarkComponent = "Core_BookmarkComponent",
}

export interface ExhibitorList {
  id: string;
  name: string;
  logoUrl: string;
  __typename: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
  hasPreviousPage: boolean;
  startCursor: string;
  __typename: string;
}
