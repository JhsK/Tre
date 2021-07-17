import React, { useCallback } from "react";
import { Radio } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { DONE_PLAN_REQUEST, REMOVE_PLAN_REQUEST } from "../reducers/plan";

export const ListContainer = styled.div`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const DeleteBtn = styled.span`
  color: red;
  cursor: pointer;
`;

export const PlanTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlanDate = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioPlanDday = styled.span`
  color: red;
`;

export const RadioPlanDate = styled.span`
  padding-left: 1.5rem;
  font-size: 0.8rem;
  margin-right: 1rem;
`;

export const Global = createGlobalStyle`
  .ant-radio-wrapper {
    font-size: 1.2rem;
  }
`;

const FuturePlanComponent = () => {
  const dispatch = useDispatch();
  const planData = useSelector((state) => state.plan.planData);

  const onClickRadio = useCallback((id) => {
    dispatch({
      type: DONE_PLAN_REQUEST,
      id,
    });
  }, []);

  const onDeltePlan = useCallback((id) => {
    console.log("test!!");
    dispatch({
      type: REMOVE_PLAN_REQUEST,
      id,
    });
  }, []);

  return (
    <>
      <ListContainer>
        {planData &&
          planData.map((item) => {
            if (item.planDoneCheck) {
              return null;
            }
            let start = item.start;
            let end = item.end;
            const nowDay = new Date();
            const dday = Math.ceil((end - nowDay) / (1000 * 60 * 60 * 24));
            start =
              start.getFullYear().toString() +
              ". " +
              (start.getMonth() + 1).toString() +
              ". " +
              start.getDate().toString();
            end =
              end.getFullYear().toString() +
              ". " +
              (end.getMonth() + 1).toString() +
              ". " +
              end.getDate().toString();

            return (
              <RadioContainer>
                <Global />
                <PlanTextContainer key={item.id}>
                  <Radio key={item.id} onClick={() => onClickRadio(item.id)}>
                    {item.title}
                  </Radio>
                  <PlanDate key={item.id}>
                    <RadioPlanDate key={item.id}>
                      {start} ~ {end}
                    </RadioPlanDate>
                    <RadioPlanDday>D-{dday}</RadioPlanDday>
                  </PlanDate>
                </PlanTextContainer>
                <DeleteBtn key={item.id} onClick={() => onDeltePlan(item.id)}>
                  삭제
                </DeleteBtn>
              </RadioContainer>
            );
          })}
        <RadioContainer>
          <PlanTextContainer>
            <Radio style={{ fontSize: "1.2rem" }}>DB 설계하기</Radio>
            <PlanDate>
              <RadioPlanDate>2021.06.21 ~ 2021.06.30</RadioPlanDate>
              <RadioPlanDday>D-2</RadioPlanDday>
            </PlanDate>
          </PlanTextContainer>
          <DeleteBtn>삭제</DeleteBtn>
        </RadioContainer>
      </ListContainer>
    </>
  );
};

export default FuturePlanComponent;
