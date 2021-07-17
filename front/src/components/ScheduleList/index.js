import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio, Badge } from "antd";
import { DONE_PLAN_REQUEST, REMOVE_PLAN_REQUEST } from "../../reducers/plan";
import {
  RadioContainer,
  Global,
  PlanTextContainer,
  PlanDate,
  RadioPlanDate,
  RadioPlanDday,
  DeleteBtn,
  BadgeContainer,
} from "./styles";

const ScheduleList = ({ time }) => {
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
      {planData &&
        planData.map((item) => {
          if (time) {
            if (item.planDoneCheck) {
              return null;
            }
          } else {
            if (!item.planDoneCheck) {
              return null;
            }
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
                {time ? (
                  <Radio key={item.id} onClick={() => onClickRadio(item.id)}>
                    {item.title}
                  </Radio>
                ) : (
                  <BadgeContainer>
                    <Badge status="processing" />
                    <span>{item.title}</span>
                  </BadgeContainer>
                )}
                <PlanDate key={item.id}>
                  <RadioPlanDate key={item.id}>
                    {start} ~ {end}
                  </RadioPlanDate>
                  {time && <RadioPlanDday>D-{dday}</RadioPlanDday>}
                </PlanDate>
              </PlanTextContainer>
              <DeleteBtn key={item.id} onClick={() => onDeltePlan(item.id)}>
                삭제
              </DeleteBtn>
            </RadioContainer>
          );
        })}
    </>
  );
};

export default ScheduleList;
