import React from "react";
import MenuComponents from "../components/MenuComponents";
import FullCalendar from "../components/FullCalendar";
import { ScheduleContainer } from "./schedule";

const calendar = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <FullCalendar />
    </ScheduleContainer>
  );
};

export default calendar;
