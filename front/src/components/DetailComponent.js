import React from "react";
import styled from "styled-components";

import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import { PageHeader, Rate } from "antd";

const DetailContainer = styled.div`
  width: 600px;
  height: 650px;
  border: 2px solid #dbdbdb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DetailComponent = () => {
  return (
    <StyledBackground>
      <FrameStyled>
        <PageHeader
          ghost={false}
          title="작성하기"
          onBack={() => window.history.back()}
          subTitle="직접 가본 장소"
          style={{ borderBottom: "1px solid #f3f3f3" }}
        />
        <DetailContainer>
          <PageHeader
            title="테스트 게시글 입니다."
            avatar={{
              src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
            }}
            style={{ borderBottom: "1px solid #f3f3f3", padding: "10px 20px" }}
          />
          <img
            src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
            alt="test"
            style={{ width: "100%", height: "400px" }}
          />
          <Rate style={{ padding: "0 20px", margin: "1rem 0" }} />
          <div style={{ padding: "0 20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptates earum totam, sed unde, expedita aliquam minima at quos
            similique architecto nesciunt adipisci delectus possimus cumque,
            accusamus laudantium facilis temporibus.
          </div>
        </DetailContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default DetailComponent;
