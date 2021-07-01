import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const JoinComponents = () => {
  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [email, onChangeEmail] = useInput("");

  const onSubmitJoin = useCallback(() => {
    console.log(username, password, nickname, email);
  }, [username, password, nickname, email]);

  return (
    <>
      <img src="image/logo_middle2.png" alt="logo" style={{ width: "50%" }} />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmitJoin}
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
          name="nickname"
          rules={[
            {
              required: true,
              message: "닉네임을 입력 하세요!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Nickname"
            value={nickname}
            onChange={onChangeNickname}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "이메일을 입력 하세요!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
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
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("비밀번호가 일치하지 않습니다.")
                );
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            회원가입
          </Button>
        </Form.Item>
        <Link to="/join">로그인</Link>
      </Form>
    </>
  );
};

export default JoinComponents;
