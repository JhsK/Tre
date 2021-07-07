export const initialState = {
  scheduleValue: true,
  calendarValue: false,
  memoryValue: false,
};

const SCHEDULE_CLICK = "SCHEDULE_CLICK";
const CALENDAR_CLICK = "CALENDAR_CLICK";
const MEMORY_CLICK = "MEMORY_CLICK";

export const scheduleAction = {
  type: SCHEDULE_CLICK,
};

export const calendarAction = {
  type: CALENDAR_CLICK,
};

export const memoryAction = {
  type: MEMORY_CLICK,
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case SCHEDULE_CLICK:
      return {
        ...state,
        scheduleValue: true,
        calendarValue: false,
        memoryValue: false,
      };
    case CALENDAR_CLICK:
      return {
        ...state,
        scheduleValue: false,
        calendarValue: true,
        memoryValue: false,
      };
    case MEMORY_CLICK:
      return {
        ...state,
        scheduleValue: false,
        calendarValue: true,
        memoryValue: false,
      };
    default:
      return state;
  }
};

export default menu;
