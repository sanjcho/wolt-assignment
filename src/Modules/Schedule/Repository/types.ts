import { DAYS_OF_WEEK } from "@Lib";

export type DayNode = {
  type: "open" | "close";
  value: number;
};

export type ScheduleDTO = Record<(typeof DAYS_OF_WEEK)[number], DayNode[]>;

export type ScheduleRepo = {
  getFile: (url: string) => Promise<ScheduleDTO>;
};
