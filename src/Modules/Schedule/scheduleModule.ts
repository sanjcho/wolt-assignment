import { initModel } from "./Domain/model";
import { Schedule } from "./Presentation/Schedule";
import { scheduleRepository } from "./Repository/schedule";

export const initScheduleModule = () => {
  const repo = scheduleRepository();
  const model = initModel(repo);

  return {
    Presentation: {
      Schedule,
    },
    Model: {
      Schedule: model,
    },
  };
};
