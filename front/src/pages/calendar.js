import React from "react";
import CalendarLayout from "../components/CalendarLayout";
import MenuComponents from "../components/MenuComponents";
import { ScheduleContainer } from "./schedule";

const calendar = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <CalendarLayout />
    </ScheduleContainer>
  );
};

export default calendar;
