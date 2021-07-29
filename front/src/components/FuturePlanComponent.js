import React from "react";
import styled from "styled-components";
import ScheduleList from "./ScheduleList";
import { media } from "./style/theme";

export const ListContainer = styled.div`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;

  ${media.mobile`padding: 1rem 1.2rem;`}
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
