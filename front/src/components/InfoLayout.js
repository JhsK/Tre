import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import { Avatar, Modal, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { NICK_CHANGE_REQUEST } from "../reducers/user";

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [nickModal, setNickModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [nickInput, onChangeNick] = useInput("");
  const [emailInput, onChangeEmail] = useInput("");

  const onClickNickChange = useCallback(() => {
    setNickModal(true);
  }, []);

  const onClickEmailChange = useCallback(() => {
    setEmailModal(true);
  }, []);

  const nickOk = useCallback(() => {
    dispatch({
      type: NICK_CHANGE_REQUEST,
      data: nickInput,
    });
    setNickModal(false);
  }, [nickInput]);

  const nickCancel = useCallback(() => {
    setNickModal(false);
  }, []);

  const emailOk = useCallback(() => {
    setEmailModal(false);
  }, []);

  const emailCancel = useCallback(() => {
    setEmailModal(false);
  }, []);

  return (
    <StyledBackground>
      <FrameStyled>
        <InfoContainer>
          <h1>내 정보</h1>
          <ProfileContainer>
            <Avatar size="large" icon={<UserOutlined />} />
            <div>{user.nickname}</div>
          </ProfileContainer>
          <InfoItem onClick={onClickNickChange}>닉네임 변경</InfoItem>
          <InfoItem onClick={onClickEmailChange}>이메일 변경</InfoItem>
          <InfoItem>문의하기 및 버그신고</InfoItem>
          <InfoItem>회원탈퇴</InfoItem>
        </InfoContainer>
        <Modal
          title="닉네임 변경"
          visible={nickModal}
          onOk={nickOk}
          onCancel={nickCancel}
          cancelText="취소"
          okText="변경"
        >
          <Input
            placeholder="변경할 닉네임 입력하세요"
            style={{ marginBottom: "2.5rem" }}
            value={nickInput}
            onChange={onChangeNick}
          />
        </Modal>
        <Modal
          title="이메일 변경"
          visible={emailModal}
          onOk={emailOk}
          onCancel={emailCancel}
          cancelText="취소"
          okText="변경"
        >
          <Input
            placeholder="변경할 이메일 입력하세요"
            style={{ marginBottom: "2.5rem" }}
            value={emailInput}
            onChange={onChangeEmail}
          />
        </Modal>
      </FrameStyled>
    </StyledBackground>
  );
};

export default InfoLayout;
