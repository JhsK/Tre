import React from "react";
import styled from "styled-components";

import { PageHeader, Button } from "antd";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";

const MemoryWriteComponent = () => {
  return (
    <StyledBackground>
      <FrameStyled>
        <PageHeader
          ghost={false}
          title="작성하기"
          onBack={() => window.history.back()}
          subTitle="직접 가본 장소"
          extra={[<Button key="1">취소</Button>]}
          style={{ borderBottom: "1px solid #f3f3f3" }}
        />
      </FrameStyled>
    </StyledBackground>
  );
};

export default MemoryWriteComponent;
