import React, { memo, useCallback } from "react";
import { Menu } from "antd";
import {
  ScheduleOutlined,
  CalendarOutlined,
  HourglassOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./style/LoginForm.css";
import { logoutAction } from "../reducers/user";
import { scheduleAction, calendarAction, memoryAction } from "../reducers/menu";

const { SubMenu } = Menu;

const LogoImg = styled.img`
  margin: 1rem 0 4rem 1.3rem;
`;

const MenuComponents = () => {
  const dispatch = useDispatch();

  const onClickMenu = useCallback((key) => {
    switch (key.key) {
      case "1":
        dispatch(scheduleAction);
        break;
      case "2":
        dispatch(calendarAction);
        break;
      case "3":
        dispatch(memoryAction);
        break;
      default:
        console.log("swith");
    }
  }, []);

  const onClickedLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <>
      <Menu
        style={{ width: "15%", height: "100%" }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="light"
        onClick={onClickMenu}
      >
        <LogoImg src="image/logo.png" alt="logo" />
        <Menu.Item
          key="1"
          icon={<ScheduleOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <Link to="/">계획</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<CalendarOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <Link to="/calendar">달력</Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<HourglassOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <Link to="memory">추억</Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<SettingOutlined style={{ fontSize: "1rem" }} />}
          title="더 보기"
          style={{
            fontSize: "1rem",
            marginBottom: "2rem",
            position: "absolute",
            bottom: "5%",
            width: "250px",
            height: "80px",
          }}
        >
          <Menu.Item key="4">내 정보</Menu.Item>
          <Menu.Item key="5" onClick={() => onClickedLogout()}>
            로그아웃
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default MenuComponents;
