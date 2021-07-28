import React, { useState } from "react";
import MenuComponents from "../components/MenuComponents";
import InfoLayout from "../components/InfoLayout";
import { ScheduleContainer } from "./schedule";
import { size } from "../components/style/theme";

const Info = () => {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  return (
    <ScheduleContainer>
      {clientWidth > size.tabletSmall && <MenuComponents />}
      <InfoLayout />
    </ScheduleContainer>
  );
};

export default Info;
