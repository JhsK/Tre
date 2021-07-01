import React from "react";
import { Radio } from "antd";
import {
  ListContainer,
  RadioContainer,
  DeleteBtn,
  PlanTextContainer,
  PlanText,
  RadioPlanDday,
  RadioPlanDate,
} from "./FuturePlanComponent";

const PastPlanComponent = () => {
  return (
    <>
      <ListContainer>
        <RadioContainer>
          <PlanTextContainer>
            <PlanText>
              <Radio style={{ fontSize: "1.2rem" }}>
                프로젝트 기획 마무리하기
              </Radio>
              <RadioPlanDday>D-2</RadioPlanDday>
            </PlanText>
            <RadioPlanDate>2021.06.21 ~ 2021.06.30</RadioPlanDate>
          </PlanTextContainer>
          <DeleteBtn>삭제</DeleteBtn>
        </RadioContainer>
        <RadioContainer>
          <PlanTextContainer>
            <PlanText>
              <Radio style={{ fontSize: "1.2rem" }}>DB 설계하기</Radio>
              <RadioPlanDday>D-2</RadioPlanDday>
            </PlanText>
            <RadioPlanDate>2021.06.21 ~ 2021.06.30</RadioPlanDate>
          </PlanTextContainer>
          <DeleteBtn>삭제</DeleteBtn>
        </RadioContainer>
      </ListContainer>
    </>
  );
};

export default PastPlanComponent;
