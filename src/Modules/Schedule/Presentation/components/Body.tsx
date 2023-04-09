import { capitalize, DAYS_OF_WEEK, ScheduleResult } from "@Lib";
import React from "react";

import { DayRow } from "./DayRow";

type Props = {
  data: ScheduleResult;
};
const _Body: React.FC<Props> = ({ data }) => {
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

export const Body = React.memo(_Body);
