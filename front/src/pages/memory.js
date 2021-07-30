import React from "react";
import MemoryLayout from "../components/MemoryLayout";
import MenuComponents from "../components/MenuComponents";
import PublicBtn from "../components/PublicBtn";
import { ScheduleContainer } from "./schedule";

const Memory = () => {
  return (
    <>
      <ScheduleContainer>
        <MenuComponents />
        <MemoryLayout />
        <PublicBtn />
      </ScheduleContainer>
    </>
  );
};

export default Memory;
