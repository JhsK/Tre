import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { planUpdateAction } from "../reducers/plan";
import { Badge, Button, Input } from "antd";
import PlanWriteList from "./PlanWriteList";

const PlanListStyled = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  button {
    float: right;
  }
`;

const PlanListContainer = styled.div`
  width: 100%;
`;

const PlanListComponent = ({ dateValue }) => {
  const dispatch = useDispatch();
  const [updateTitle, onChangeTitle] = useInput("");
  const { planData } = useSelector((state) => state.plan);
  const [planList, setPlanList] = useState("");
  //const writedPlan = planData.filter((a, i) => a.dateValue === dateValue);

  const onSubmitUpdate = useCallback(() => {
    dispatch(planUpdateAction(updateTitle));
  }, [updateTitle]);

  useEffect(() => {
    console.log(planData);
    setPlanList(planData.filter((a, i) => a.dateValue === dateValue));
  }, [planList]);

  return (
    <>
      {planList.length > 0 &&
        planList.map((item, i) => (
          <PlanListStyled>
            <Badge status="success" key={i} />
            <Input
              //defaultValue={item.title}
              style={{ width: "80%", paddingLeft: "0px" }}
              value={item.title}
              onChange={onChangeTitle}
              key={i}
            />
            <Button type="text" onClick={onSubmitUpdate} key={i}>
              수정
            </Button>
          </PlanListStyled>
        ))}
      {/* <PlanWriteList dateValue={dateValue} /> */}
    </>
  );
};

export default PlanListComponent;
