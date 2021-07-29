import React from "react";
import MenuComponents from "../components/MenuComponents";
import DetailComponent from "../components/DetailComponent";
import PublicBtn from "../components/PublicBtn";
import { ScheduleContainer } from "./schedule";

const detail = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <DetailComponent />
      <PublicBtn />
    </ScheduleContainer>
  );
};

export default detail;
