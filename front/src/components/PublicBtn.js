import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import {
  ScheduleTwoTone,
  CalendarTwoTone,
  HourglassTwoTone,
  SmileTwoTone,
  UnlockTwoTone,
} from "@ant-design/icons";
import { size, media } from "./style/theme";

const UtilBtn = styled.button`
  position: fixed;
  right: 100px;
  bottom: 100px;
  background-image: url("image/mediaBtn.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  cursor: pointer;
  border: none;
  width: 80px;
  height: 80px;
  z-index: 8000;
  display: none;

  /* @media (max-width: ${size.tabletLarge}) {
    display: inline;
  } */

  ${media.tabletLarge`display: inline;`}
`;

const PublicBtn = () => {
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
      <Menu.Item key="logout">
        <Link to="/logout">
          <UnlockTwoTone style={{ marginRight: "0.3rem" }} />
          로그아웃
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <UtilBtn />
      </Dropdown>
    </>
  );
};

export default PublicBtn;
