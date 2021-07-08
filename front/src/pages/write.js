import React from "react";
import MemoryWriteComponent from "../components/MemoryWriteComponent";
import MenuComponents from "../components/MenuComponents";
import { ScheduleContainer } from "./schedule";

const write = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <MemoryWriteComponent />
    </ScheduleContainer>
  );
};

export default write;
