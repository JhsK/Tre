import React from "react";
import { Radio } from "antd";
import {
  ListContainer,
  RadioContainer,
  DeleteBtn,
  PlanTextContainer,
  PlanDate,
  RadioPlanDday,
  RadioPlanDate,
} from "./FuturePlanComponent";

const PastPlanComponent = () => {
  return (
    <>
      <ListContainer>
        <RadioContainer>
          <PlanTextContainer>
            <PlanDate>
              <Radio style={{ fontSize: "1.2rem" }}>깃 허브 1일 1커밋</Radio>
              <RadioPlanDday>D+7</RadioPlanDday>
            </PlanDate>
            <RadioPlanDate>2021.06.21 ~ 2021.06.30</RadioPlanDate>
          </PlanTextContainer>
          <DeleteBtn>삭제</DeleteBtn>
        </RadioContainer>
        <RadioContainer>
          <PlanTextContainer>
            <PlanDate>
              <Radio style={{ fontSize: "1.2rem" }}>
                코딩 테스트 매일 2문제 풀기
              </Radio>
              <RadioPlanDday>D+4</RadioPlanDday>
            </PlanDate>
            <RadioPlanDate>2021.06.21 ~ 2021.06.30</RadioPlanDate>
          </PlanTextContainer>
          <DeleteBtn>삭제</DeleteBtn>
        </RadioContainer>
      </ListContainer>
    </>
  );
};

export default PastPlanComponent;
