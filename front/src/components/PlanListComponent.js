import React, { useCallback } from "react";
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

  console.log(planData);

  return (
    <PlanListStyled>
      {planData.map((item, i) => {
        if (i !== 0) {
          return (
            <>
              <Badge status="success" key={item.title} />
              <Input
                defaultValue={item.title}
                style={{ width: "80%", paddingLeft: "0px" }}
                //value={planData.title}
                onChange={onChangeTitle}
                key={item.titlei}
              />
              <Button type="text" onClick={onSubmitUpdate} key={item.title}>
                수정
              </Button>
            </>
          );
        }
      })}
      {/* <Input
        defaultValue={planData.title}
        style={{ width: "80%" }}
        //value={planData.title}
        onChange={onChangeTitle}
      />
      <Button type="text" onClick={onSubmitUpdate}>
        수정
      </Button> */}
    </PlanListStyled>
  );
};

export default PlanListComponent;
