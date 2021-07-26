import React, { useEffect } from "react";
import styled from "styled-components";

import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import { PageHeader, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { LOAD_POST_ONE_REQUEST } from "../reducers/post";

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
  const dispatch = useDispatch();
  const { mainPosts } = useSelector((state) => state.post);
  const imgSrc = "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4";

  useEffect(() => {
    dispatch({
      type: LOAD_POST_ONE_REQUEST,
      id,
    });
  }, []);

  console.log(mainPosts);

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
            title={mainPosts.title}
            avatar={{
              src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
            }}
            style={{ borderBottom: "1px solid #f3f3f3", padding: "10px 20px" }}
          />
          <img
            src={imgSrc}
            alt="test"
            style={{ width: "100%", height: "400px" }}
          />
          <Rate
            value={mainPosts.rate}
            style={{ padding: "0 20px", margin: "1rem 0" }}
          />
          <div style={{ padding: "0 20px" }}>{mainPosts.content}</div>
        </DetailContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default DetailComponent;
