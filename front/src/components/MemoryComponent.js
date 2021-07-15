import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageHeader, Button, Card } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_POST_REQUEST } from "../reducers/post";
import PostImages from "./PostImages";

const { Meta } = Card;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  gap: 2rem;

  .card-item {
    width: 23%;
    margin: 0 0rem 0rem 0rem;
  }
`;

const MemoryLayout = () => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector((state) => state.post);

  const onClickDelete = useCallback((postId) => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: postId,
    });
  }, []);
  return (
    <StyledBackground>
      <FrameStyled>
        <PageHeader
          ghost={false}
          title="추억"
          backIcon={false}
          subTitle="직접 가본 장소"
          extra={[
            <Button key="1">
              <Link to="/memory/write">작성하기</Link>
            </Button>,
          ]}
          style={{ borderBottom: "1px solid #f3f3f3" }}
        />
        <CardContainer>
          {mainPosts.map((post, index) => (
            <Card
              key={post.id}
              className="card-item"
              cover={
                post.Images[0] ? (
                  <PostImages images={post.Images} />
                ) : (
                  <img
                    src="https://images.unsplash.com/photo-1608745644869-8a57e8461906?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    alt="cover"
                    style={{ maxHeight: "200px" }}
                  />
                )
              }
              actions={[
                <EditOutlined key="edit" />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => onClickDelete(post.id)}
                />,
              ]}
            >
              <Link to={`/memory/${post.id}`} text="test">
                <Meta title={post.title} description={post.content} />
              </Link>
            </Card>
          ))}
        </CardContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default MemoryLayout;
