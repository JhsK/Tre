import React from "react";
import styled from "styled-components";
import { Badge, Button } from "antd";
import { useSelector } from "react-redux";

const PlanListStyled = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  button {
    float: right;
  }
`;

const PlanListComponent = () => {
  const planData = useSelector((state) => state.plan.planData);
  return (
    <PlanListStyled>
      <Badge status="success" />
      <span>{planData.title}</span>
      <Button type="text">수정</Button>
    </PlanListStyled>
  );
};

export default PlanListComponent;
