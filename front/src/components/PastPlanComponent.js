import React from "react";
import ScheduleList from "./ScheduleList";
import { ListContainer } from "./FuturePlanComponent";

const PastPlanComponent = () => {
  return (
    <>
      <ListContainer>
        <ScheduleList titme={false} />
      </ListContainer>
    </>
  );
};

export default PastPlanComponent;
