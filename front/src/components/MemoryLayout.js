import React, { useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { PageHeader, Button, Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POST_REQUEST, REMOVE_POST_REQUEST } from "../reducers/post";
import { useInView } from "react-intersection-observer";
import PostImages from "./PostImages";
import { size, media } from "./style/theme";

const { Meta } = Card;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  gap: 2rem;
  overflow-y: scroll;

  .card-item {
    width: 23%;
    margin: 0 0rem 0rem 0rem;
    //height: 370px;
    height: 100%;

    ${media.tabletLarge`width: 45%;`}
    ${media.desktop`width: 30%;`}
  }

  ${(props) =>
    props.postLength &&
    css`
      //height: calc(100% - 85px);
    `}
`;

const MemoryLayout = () => {
  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const { mainPosts, hasMorePost, loadPostLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    const lastId = mainPosts[mainPosts.length - 1]?.id;
    if (hasMorePost) {
      dispatch({
        type: LOAD_POST_REQUEST,
        lastId,
      });
    }
  }, [hasMorePost]);

  useEffect(() => {
    if (inView && hasMorePost && !loadPostLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POST_REQUEST,
        lastId,
      });
    }
  }, [inView, hasMorePost, loadPostLoading, mainPosts]);

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
        <CardContainer postLength={mainPosts.length > 4 && true}>
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
              <Link to={`/memory/${post.id}`}>
                <Meta
                  title={post.title}
                  description={
                    post.content.length > 70
                      ? post.content.substring(0, 70).concat("...")
                      : post.content
                  }
                />
              </Link>
            </Card>
          ))}
          <div ref={hasMorePost && !loadPostLoading ? ref : undefined} />
        </CardContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default MemoryLayout;
