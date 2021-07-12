import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PageHeader, Button, Card } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import { useSelector } from "react-redux";
import post from "../reducers/post";
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
  const { mainPosts } = useSelector((state) => state.post);
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
              cover={post.Images[0] && <PostImages images={post.Images} />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <DeleteOutlined key="delete" />,
              ]}
            >
              <Link to="/memory/test">
                <Meta title={post.title} description={post.content} />
              </Link>
            </Card>
          ))}
          {/* <Card
            className="card-item"
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <DeleteOutlined key="delete" />,
            ]}
          >
            <Link to="/memory/test">
              <Meta title="Card title" description={post.content} />
            </Link>
          </Card> */}
        </CardContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default MemoryLayout;
