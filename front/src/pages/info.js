import React from "react";
import MenuComponents from "../components/MenuComponents";
import InfoLayout from "../components/InfoLayout";
import { ScheduleContainer } from "./schedule";

const info = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <InfoLayout />
    </ScheduleContainer>
  );
};

export default info;
