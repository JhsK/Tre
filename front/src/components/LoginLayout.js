import React from "react";
import styled from "styled-components";
import LoginComponents from "./LoginComponents";

export const TaggedPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
`;

const LoginLayout = () => {
  return (
    <TaggedPosition>
      <LoginComponents />
    </TaggedPosition>
  );
};

export default LoginLayout;
