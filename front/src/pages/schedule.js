import React from "react";
import MenuComponents from "../components/MenuComponents";
import ScheduleLayout from "../components/ScheduleLayout";
import styled from "styled-components";

export const ScheduleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const schedule = () => {
  return (
    <ScheduleContainer>
      <MenuComponents />
      <ScheduleLayout />
    </ScheduleContainer>
  );
};

export default schedule;
