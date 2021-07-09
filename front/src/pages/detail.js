import React from "react";
import MenuComponents from "../components/MenuComponents";
import DetailComponent from "../components/DetailComponent";
import { ScheduleContainer } from "./schedule";

const detail = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <DetailComponent />
    </ScheduleContainer>
  );
};

export default detail;
