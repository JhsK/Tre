import React from "react";
import styled from "styled-components";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0 2rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0 0.7rem 0;

  & div {
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
`;

const InfoItem = styled.div`
  font-size: 1rem;
  margin-top: 2rem;
  cursor: pointer;
`;

const InfoLayout = () => {
  return (
    <StyledBackground>
      <FrameStyled>
        <InfoContainer>
          <h1>내 정보</h1>
          <ProfileContainer>
            <Avatar size="large" icon={<UserOutlined />} />
            <div>홍길동</div>
          </ProfileContainer>
          <InfoItem>닉네임 변경</InfoItem>
          <InfoItem>이메일 변경</InfoItem>
          <InfoItem>문의하기 및 버그신고</InfoItem>
          <InfoItem>회원탈퇴</InfoItem>
        </InfoContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default InfoLayout;
