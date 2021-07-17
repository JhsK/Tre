import React from "react";
import styled from "styled-components";
import ScheduleList from "./ScheduleList";

export const ListContainer = styled.div`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
`;

const FuturePlanComponent = () => {
  return (
    <>
      <ListContainer>
        <ScheduleList time />
      </ListContainer>
    </>
  );
};

export default FuturePlanComponent;
