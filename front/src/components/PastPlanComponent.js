import React from "react";
import ScheduleList from "./ScheduleList";
import { ListContainer } from "./FuturePlanComponent";

const PastPlanComponent = () => {
  return (
    <>
      <ListContainer>
        <ScheduleList time={false} />
      </ListContainer>
    </>
  );
};

export default PastPlanComponent;
