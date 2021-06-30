import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";

const { TabPane } = Tabs;

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
`;

const ScheduleLayout = () => {
  return (
    <StyledBackground>
      <FrameStyled>
        <Tabs defaultActiveKey="1" type="card" size="large">
          <TabPane tab="Card Tab 1" key="1">
            Content of card tab 1
          </TabPane>
          <TabPane tab="Card Tab 2" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Card Tab 3" key="3">
            Content of card tab 3
          </TabPane>
        </Tabs>
      </FrameStyled>
    </StyledBackground>
  );
};

export default ScheduleLayout;
