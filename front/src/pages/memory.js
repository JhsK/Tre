import React from "react";
import MemoryLayout from "../components/MemoryLayout";
import MenuComponents from "../components/MenuComponents";
import { ScheduleContainer } from "./schedule";

const memory = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <MemoryLayout />
    </ScheduleContainer>
  );
};

export default memory;
