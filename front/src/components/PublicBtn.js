import React, { useCallback } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Menu, Dropdown } from "antd";
import {
  ScheduleTwoTone,
  CalendarTwoTone,
  HourglassTwoTone,
  SmileTwoTone,
  UnlockTwoTone,
} from "@ant-design/icons";
import { media } from "./style/theme";
import { logoutRequestAction } from "../reducers/user";

const UtilBtn = styled.button`
  position: fixed;
  right: 60px;
  bottom: 100px;
  background-image: url("image/mediaBtn.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  cursor: pointer;
  border: none;
  width: 70px;
  height: 70px;
  z-index: 8000;
  display: none;
  border-radius: 60px;

  ${media.tabletLarge`display: inline;`}
  ${media.mobile`bottom: 30px; right:30px;`}
`;

const PublicBtn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickedLogout = useCallback(() => {
    dispatch(logoutRequestAction());
    history.push("/");
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="plan">
        <Link to="/">
          <ScheduleTwoTone style={{ marginRight: "0.3rem" }} />
          계획
        </Link>
      </Menu.Item>
      <Menu.Item key="calendar">
        <Link to="/calendar">
          <CalendarTwoTone style={{ marginRight: "0.3rem" }} />
          달력
        </Link>
      </Menu.Item>
      <Menu.Item key="memory">
        <Link to="/memory">
          <HourglassTwoTone style={{ marginRight: "0.3rem" }} />
          추억
        </Link>
      </Menu.Item>
      <Menu.Item key="info">
        <Link to="/info">
          <SmileTwoTone style={{ marginRight: "0.3rem" }} />내 정보
        </Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={onClickedLogout}>
        <UnlockTwoTone style={{ marginRight: "0.3rem" }} />
        로그아웃
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <UtilBtn />
      </Dropdown>
    </>
  );
};

export default PublicBtn;
