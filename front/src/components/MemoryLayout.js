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
  return (
    <>
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
            <Card
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
              <Meta title="Card title" description="This is the description" />
            </Card>
          </CardContainer>
        </FrameStyled>
      </StyledBackground>
    </>
  );
};

export default MemoryLayout;
