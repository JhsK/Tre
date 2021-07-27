import React from "react";
import MemoryLayout from "../components/MemoryLayout";
import MenuComponents from "../components/MenuComponents";
import { ScheduleContainer } from "./schedule";

const Memory = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <MemoryLayout />
    </ScheduleContainer>
  );
};

export default Memory;
