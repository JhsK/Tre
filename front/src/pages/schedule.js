import React, { useEffect, useState } from "react";
import MenuComponents from "../components/MenuComponents";
import ScheduleLayout from "../components/ScheduleLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { size } from "../components/style/theme";

export const ScheduleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Schedule = () => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory();
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!user) {
      history.replace("/login");
    }
  }, [user]);

  return (
    <ScheduleContainer>
      {clientWidth > size.tabletSmall && <MenuComponents />}
      <ScheduleLayout />
    </ScheduleContainer>
  );
};

export default Schedule;
