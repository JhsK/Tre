import React, { useCallback } from "react";
import styled from "styled-components";
import LoginForm from "./style/LoginForm.css";
import useInput from "../hooks/useInput";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const KakaoBtn = styled.button`
  width: 100%;
  height: 50px;
  background-image: url("image/kakao_login_medium_wide (1).png");
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const LoginComponents = () => {
  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitLogin = useCallback(() => {
    console.log(username, password);
  }, [username, password]);

  return (
    <>
      <img src="image/logo_middle2.png" alt="logo" style={{ width: "50%" }} />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmitLogin}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "아이디를 입력 하세요!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={username}
            onChange={onChangeUsername}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력 하세요!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
        </Form.Item>
        <Form.Item>
          <Link to="/password" className="login-form-forgot">
            비밀번호 찾기
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            로그인
          </Button>
          <Link to="/join">회원가입</Link>
        </Form.Item>
      </Form>
      <KakaoBtn />
    </>
  );
};

export default LoginComponents;
