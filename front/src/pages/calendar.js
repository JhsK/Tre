import React, { useState } from "react";
import MenuComponents from "../components/MenuComponents";
import FullCalendar from "../components/FullCalendar";
import PublicBtn from "../components/PublicBtn";
import { ScheduleContainer } from "./schedule";
import { size } from "../components/style/theme";

const Calendar = () => {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  return (
    <ScheduleContainer>
      {clientWidth > size.tabletSmall && <MenuComponents />}
      <FullCalendar />
      <PublicBtn />
    </ScheduleContainer>
  );
};

export default Calendar;
