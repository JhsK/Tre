import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: #dfe6ed;
  position: relative;
  width: 100%;
  height: 100%;
`;

const FrameStyled = styled.div`
  background-color: #fff;
  width: 90%;
  height: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const ScheduleLayout = () => {
  return (
    <StyledBackground>
      <FrameStyled></FrameStyled>
    </StyledBackground>
  );
};

export default ScheduleLayout;
