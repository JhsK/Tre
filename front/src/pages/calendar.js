import React from "react";
import MenuComponents from "../components/MenuComponents";
import FullCalendar from "../components/FullCalendar";
import PublicBtn from "../components/PublicBtn";
import { ScheduleContainer } from "./schedule";

const Calendar = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <FullCalendar />
      <PublicBtn />
    </ScheduleContainer>
  );
};

export default Calendar;
