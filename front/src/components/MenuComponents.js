import React, { useCallback, useEffect, useState } from "react";
import { Menu } from "antd";
import {
  ScheduleOutlined,
  CalendarOutlined,
  HourglassOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styled, { createGlobalStyle, css } from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./style/LoginForm.css";
import { size } from "./style/theme";
import { logoutRequestAction } from "../reducers/user";

const { SubMenu } = Menu;

const LogoImg = styled.img`
  margin: 1rem 0 4rem 1.3rem;
`;

const MenuStyled = styled(Menu)`
  width: 15%;
  height: 100%;

  ${(props) =>
    props.menuProps &&
    css`
      width: 10%;
      margin-top: 5rem;
    `}
`;

const MenuBtn = styled.button`
  position: absolute;
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
`;

const Global = createGlobalStyle`
  .ant-menu-item {
    padding: 0 0 0 24px  !important;
  }

  .ant-menu-submenu-title {
    padding: 0 0 0 24px !important;
  }
`;

const MenuComponents = () => {
  const history = useHistory();
  const pathURL = history.location.pathname;
  const dispatch = useDispatch();
  const [menuState, setMenuState] = useState(false);
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  const imgSrcOneDepth = "image/logo.png";
  const imgSrcTwoDepth = "../image/logo.png";

  useEffect(() => {
    setClientWidth(window.innerWidth);
    if (clientWidth <= size.tabletLarge) {
      setMenuState(true);
    }
  }, []);

  const onClickMediaMenu = useCallback(() => {
    setMenuState((prev) => !prev);
  }, []);

  const onClickedLogout = useCallback(() => {
    dispatch(logoutRequestAction());
    history.push("/");
  }, []);

  return (
    <>
      <MenuStyled
        //style={{ width: "15%", height: "100%" }}
        menuProps={menuState}
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={menuState}
      >
        {menuState && <Global />}
        {!menuState && (
          <LogoImg
            src={
              pathURL[pathURL.indexOf("memory") + 2] ||
              pathURL === "/memory/write"
                ? imgSrcTwoDepth
                : imgSrcOneDepth
            }
            alt="logo"
          />
        )}
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
          <Link to="/memory">추억</Link>
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
      </MenuStyled>
      <MenuBtn type="button" onClick={onClickMediaMenu} />
    </>
  );
};

export default MenuComponents;
