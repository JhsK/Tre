import React from "react";
import MenuComponents from "../components/MenuComponents";
import InfoLayout from "../components/InfoLayout";
import PublicBtn from "../components/PublicBtn";
import { ScheduleContainer } from "./schedule";

const Info = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <InfoLayout />
      <PublicBtn />
    </ScheduleContainer>
  );
};

export default Info;
