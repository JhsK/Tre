import React from "react";
import { Radio } from "antd";
import styled from "styled-components";

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

export const PlanText = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioPlanDday = styled.span`
  color: red;
`;

export const RadioPlanDate = styled.span`
  padding-left: 1.5rem;
  font-size: 0.8rem;
`;

const FuturePlanComponent = () => {
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

export default FuturePlanComponent;