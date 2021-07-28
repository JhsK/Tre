import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
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
    dispatch({
      type: REMOVE_PLAN_REQUEST,
      id,
    });
  }, []);

  return (
    <>
      {planData &&
        planData.map((item, i) => {
          if (time) {
            if (item.planDoneCheck) {
              return null;
            }
          } else {
            if (!item.planDoneCheck) {
              return null;
            }
          }
          let start = moment(item.start)._d;
          let end = moment(item.end)._d;
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
              <PlanTextContainer key={i}>
                {time ? (
                  <Radio key={i} onClick={() => onClickRadio(item.id)}>
                    {item.title}
                  </Radio>
                ) : (
                  <BadgeContainer>
                    <Badge status="processing" />
                    <span>{item.title}</span>
                  </BadgeContainer>
                )}
                <PlanDate key={i}>
                  <RadioPlanDate key={i}>
                    {start} ~ {end}
                  </RadioPlanDate>
                  {time && <RadioPlanDday>D-{dday}</RadioPlanDday>}
                </PlanDate>
              </PlanTextContainer>
              <DeleteBtn key={i} onClick={() => onDeltePlan(item.id)}>
                삭제
              </DeleteBtn>
            </RadioContainer>
          );
        })}
    </>
  );
};

export default ScheduleList;
