import { parseSchedule, Schedule } from "../parseSchedule";

const simple: Schedule = {
  monday: [{ type: "close", value: 3600 }],
  tuesday: [],
  wednesday: [],
  thursday: [
    { type: "open", value: 36000 },
    { type: "close", value: 64800 },
    { type: "open", value: 70000 },
    { type: "close", value: 75600 },
  ],
  friday: [{ type: "open", value: 36000 }],
  saturday: [
    { type: "close", value: 3600 },
    { type: "open", value: 36000 },
  ],
  sunday: [
    { type: "close", value: 3600 },
    { type: "open", value: 43200 },
  ],
};
const simpleResults = {
  monday: undefined,
  tuesday: undefined,
  wednesday: undefined,
  thursday: ["12 PM - 8 PM", "9 PM - 11 PM"],
  friday: ["12 PM - 3 AM"],
  saturday: ["12 PM - 3 AM"],
  sunday: ["2 PM - 3 AM"],
};

const noClosing: Schedule = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [{ type: "open", value: 43200 }],
};

describe("utils/parseSchedule", () => {
  it("simple run calculates right", () => {
    expect(parseSchedule(simple)).toEqual(simpleResults);
  });
  it("no closing time should throw error", () => {
    expect(() => parseSchedule(noClosing)).toThrowError();
  });
});
