import { ScheduleDTO } from "@Modules/Schedule/Repository/types";

export const scheduleRepository = () => {
  return {
    getFile: (url: string) => {
      return fetch(url).then((resp) => resp.json() as Promise<ScheduleDTO>);
    },
  };
};
