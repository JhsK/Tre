import React, { useState } from "react";
import MemoryLayout from "../components/MemoryLayout";
import MenuComponents from "../components/MenuComponents";
import PublicBtn from "../components/PublicBtn";
import { ScheduleContainer } from "./schedule";
import { size } from "../components/style/theme";

const Memory = () => {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  return (
    <>
      <ScheduleContainer>
        {clientWidth > size.tabletSmall && <MenuComponents />}
        <MemoryLayout />
        <PublicBtn />
      </ScheduleContainer>
    </>
  );
};

export default Memory;
