import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import FuturePlanComponent from "./FuturePlanComponent";
import PastPlanComponent from "./PastPlanComponent";

const tabTitle = ["일정 계획", "지난 계획"];

const tabContents = {
  0: <FuturePlanComponent />,
  1: <PastPlanComponent />,
};

export const StyledBackground = styled.div`
  background-color: #dfe6ed;
  position: relative;
  width: 90%;
  height: 100%;
`;

export const FrameStyled = styled.div`
  background-color: #fff;
  width: 90%;
  height: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const TabsContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
`;

const CardTab = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  border: 1px solid #f3f3f3;
  border-radius: 15px 0 0 0;
  cursor: pointer;
  background-color: #fffcf1;

  &:hover {
    color: #3fbdff;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #fff;
      &:hover {
        color: #000;
      }
    `};
`;

const TabText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ScheduleLayout = () => {
  const [activeState, setActiveState] = useState(0);
  const onTabClicked = useCallback((key) => {
    setActiveState(key);
  }, []);

  return (
    <StyledBackground>
      <FrameStyled>
        <TabsContainer>
          {tabTitle.map((str, idx) => {
            return (
              <CardTab
                active={activeState === idx}
                key={idx}
                onClick={() => onTabClicked(idx)}
              >
                <TabText>{str}</TabText>
              </CardTab>
            );
          })}
        </TabsContainer>
        {tabContents[activeState]}
      </FrameStyled>
    </StyledBackground>
  );
};

export default ScheduleLayout;
