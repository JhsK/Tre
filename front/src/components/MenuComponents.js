import React, { useCallback } from "react";
import { Menu } from "antd";
import {
  ScheduleOutlined,
  CalendarOutlined,
  HourglassOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LoginForm from "./style/LoginForm.css";
import { logoutRequestAction } from "../reducers/user";
import { scheduleAction, calendarAction, memoryAction } from "../reducers/menu";

const { SubMenu } = Menu;

const LogoImg = styled.img`
  margin: 1rem 0 4rem 1.3rem;
`;

const MenuComponents = () => {
  const history = useHistory();
  const pathURL = history.location.pathname;
  const imgSrcOneDepth = "image/logo.png";
  const imgSrcTwoDepth = "../image/logo.png";

  const activeStyle = {
    color: "#1890ff",
    // borderRight: "3px solide #1890ff",
    // background: "#1890ff",
  };

  const menuActiveValue = useSelector((state) => state.menu);
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
    dispatch(logoutRequestAction());
    history.push("/");
  }, []);
  return (
    <>
      <Menu
        style={{ width: "15%", height: "100%" }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="light"
        //onClick={onClickMenu}
      >
        <LogoImg
          src={
            pathURL === "/memory/test" || pathURL === "/memory/write"
              ? imgSrcTwoDepth
              : imgSrcOneDepth
          }
          alt="logo"
        />
        <Menu.Item
          key="1"
          icon={<ScheduleOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <NavLink activeStyle={activeStyle} to="/">
            계획
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<CalendarOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <NavLink activeStyle={activeStyle} to="/calendar">
            달력
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<HourglassOutlined style={{ fontSize: "1rem" }} />}
          style={{ fontSize: "1rem", marginBottom: "2rem" }}
        >
          <NavLink activeStyle={activeStyle} to="/memory">
            추억
          </NavLink>
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
          <Menu.Item key="4">
            <Link to="/info">내 정보</Link>
          </Menu.Item>
          <Menu.Item key="5" onClick={onClickedLogout}>
            로그아웃
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default MenuComponents;
