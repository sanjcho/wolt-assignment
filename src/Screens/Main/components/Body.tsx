import { parseSchedule, DAYS_OF_WEEK, capitalize } from "@Lib";
import React from "react";

import { DayRow } from "./DayRow";

export const Body = () => {
  const data = parseSchedule(require("../../../../data.json"));
  const currentDayNumber = new Date().getDay();

  return (
    <>
      {DAYS_OF_WEEK.map((dayName, index) => (
        <DayRow
          dayName={capitalize(dayName)}
          workingHours={data[dayName] ? data[dayName]!.join(", ") : null}
          label={index + 1 === currentDayNumber ? "TODAY" : undefined}
          key={dayName}
        />
      ))}
    </>
  );
};
