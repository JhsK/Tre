import React from "react";
import CalendarLayout from "../components/CalendarLayout";
import MenuComponents from "../components/MenuComponents";
import FullCalendarTest from "../components/FullCalendarTest";
import { ScheduleContainer } from "./schedule";

const calendar = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <FullCalendarTest />
    </ScheduleContainer>
  );
};

export default calendar;
