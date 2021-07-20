import React, { useEffect } from "react";
import MenuComponents from "../components/MenuComponents";
import ScheduleLayout from "../components/ScheduleLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ScheduleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Schedule = () => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace("/login");
    }
  }, [user]);

  return (
    <ScheduleContainer>
      <MenuComponents />
      <ScheduleLayout />
    </ScheduleContainer>
  );
};

export default Schedule;
