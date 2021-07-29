import React from "react";
import MemoryWriteComponent from "../components/MemoryWriteComponent";
import MenuComponents from "../components/MenuComponents";
import PublicBtn from "../components/PublicBtn";
import { ScheduleContainer } from "./schedule";

const write = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <MemoryWriteComponent />
      <PublicBtn />
    </ScheduleContainer>
  );
};

export default write;
