type DayNode = {
  type: "open" | "close";
  value: number;
};

type DaysOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
export const DAYS_OF_WEEK: DaysOfWeek[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export type Schedule = Record<(typeof DAYS_OF_WEEK)[number], DayNode[]>;
export type ScheduleResult = Record<
  (typeof DAYS_OF_WEEK)[number],
  string[] | undefined
>;
const MS_IN_SEC = 1000;
const makeAmPmFormat = (time: number) =>
  new Date(time * MS_IN_SEC).toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });

const makeResultObject = (open: number, close: number): string =>
  `${makeAmPmFormat(open)} - ${makeAmPmFormat(close)}`;

const validateNextNode = (
  node: DayNode,
  nextNode: DayNode | undefined,
  dayName: string
) => {
  if (nextNode?.type !== "close") {
    throw new Error(
      `error while parsing schedule, opens at ${dayName} ${makeAmPmFormat(
        node.value
      )} have no valid closing time`
    );
  }
};

export const parseSchedule = (rawData: Schedule) => {
  const result: ScheduleResult = {
    monday: undefined,
    tuesday: undefined,
    wednesday: undefined,
    thursday: undefined,
    friday: undefined,
    saturday: undefined,
    sunday: undefined,
  };
  DAYS_OF_WEEK.forEach((dayName, dayIndex) => {
    rawData[dayName].forEach((scheduleNode, nodeIndex) => {
      if (
        nodeIndex === rawData[dayName].length - 1 &&
        scheduleNode.type === "open"
      ) {
        const nextDay = (
          dayIndex === DAYS_OF_WEEK.length - 1
            ? DAYS_OF_WEEK[0]
            : DAYS_OF_WEEK[dayIndex + 1]
        )!;
        const nextDaySchedule = rawData[nextDay];
        validateNextNode(scheduleNode, nextDaySchedule[0], dayName);
        result[dayName] ??= [];
        result[dayName]!.push(
          makeResultObject(scheduleNode.value, nextDaySchedule[0]!.value)
        );
      } else if (scheduleNode.type === "open") {
        const nextNode = rawData[dayName][nodeIndex + 1];
        validateNextNode(scheduleNode, nextNode, dayName);
        result[dayName] ??= [];
        result[dayName]!.push(
          makeResultObject(scheduleNode.value, nextNode!.value)
        );
      }
    });
  });
  return result;
};
