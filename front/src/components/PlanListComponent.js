import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Badge, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { planUpdateAction } from "../reducers/plan";

const PlanListStyled = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  button {
    float: right;
  }
`;

const PlanListComponent = () => {
  const dispatch = useDispatch();
  const planData = useSelector((state) => state.plan.planData);
  const [updateTitle, onChangeTitle] = useInput("");

  const onSubmitUpdate = useCallback(() => {
    dispatch(planUpdateAction(updateTitle));
  }, [updateTitle]);

  return (
    <PlanListStyled>
      <Badge status="success" />
      {/* <span>{planData.title}</span> */}
      <Input
        defaultValue={planData.title}
        style={{ width: "80%" }}
        //value={planData.title}
        onChange={onChangeTitle}
      />
      <Button type="text" onClick={onSubmitUpdate}>
        수정
      </Button>
    </PlanListStyled>
  );
};

export default PlanListComponent;
