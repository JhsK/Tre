import React from "react";
import styled from "styled-components";

import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import { PageHeader, Rate } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const DetailContainer = styled.div`
  width: 600px;
  height: 650px;
  border: 2px solid #dbdbdb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DetailComponent = ({ text }) => {
  const { id } = useParams();
  const { mainPosts } = useSelector((state) => state.post);
  const post = mainPosts.filter((a, i) => a.id === 1);

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
            title={post[0].title}
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
          <Rate
            value={post[0].rate}
            style={{ padding: "0 20px", margin: "1rem 0" }}
          />
          <div style={{ padding: "0 20px" }}>{post[0].content}</div>
        </DetailContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default DetailComponent;
