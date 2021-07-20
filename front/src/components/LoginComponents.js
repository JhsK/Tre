import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import LoginForm from "./style/LoginForm.css";
import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/user";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const history = useHistory();
  const { logInLoading, logInError, logInDone } = useSelector(
    (state) => state.user
  );
  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitLogin = useCallback(() => {
    dispatch(
      loginRequestAction({
        username,
        password,
      })
    );
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
            loading={logInLoading}
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
