import styled, { createGlobalStyle } from "styled-components";

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

export const BadgeContainer = styled.div`
  padding-left: 0.5rem;
  & span {
    font-size: 1.2rem;
  }
`;

export const Global = createGlobalStyle`
  .ant-radio-wrapper {
    font-size: 1.2rem;
  }
`;
