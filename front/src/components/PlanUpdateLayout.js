import React, { useState, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { PageHeader, Button, Input } from "antd";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { planUpdateAction } from "../reducers/plan";

const Global = createGlobalStyle`
    .ant-page-header {
        padding: 0;
        margin-bottom: 2rem;
    }

    .react-datepicker-wrapper {
        margin: 0;
    }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2rem 0 0 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;

  & label {
    font-size: 1rem;
    margin-right: 1rem;
  }

  & Input {
    width: 75%;
  }
`;

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;

  & label {
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 3rem;

  & Button {
    margin-right: 1rem;
  }
`;

const PlanUpdateLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const planList = location.state.planList;
  console.log(planList);
  const [start, setStart] = useState(planList[0].start);
  const [end, setEnd] = useState(planList[0].end);
  const [title, setTitle] = useState("");
  console.log(start);
  const onChangePlanText = useCallback((e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }, []);

  const onSubmitUpdate = useCallback(() => {
    dispatch(
      planUpdateAction({
        id: 3,
        title,
        start,
        end,
        dateValue: start,
      })
    );
  }, [title, start, end]);

  return (
    <StyledContainer>
      <Global />
      <PageHeader
        ghost={false}
        title="일정 변경"
        onBack={() => window.history.back()}
      />
      <InputContainer>
        <label>일정 :</label>
        <Input size="large" value={title} onChange={onChangePlanText} />
      </InputContainer>
      <DatePickerContainer>
        <label>기간 :</label>
        <DatePicker
          selected={start}
          onChange={(date) => setStart(date)}
          selectsStart
          startDate={start}
        />
        ~
        <DatePicker
          selected={end}
          onChange={(date) => setEnd(date)}
          selectsEnd
          startDate={start}
          endDate={end}
        />
      </DatePickerContainer>
      <BtnContainer>
        <Button type="primary" onClick={onSubmitUpdate}>
          수정
        </Button>
        <Button>취소</Button>
      </BtnContainer>
    </StyledContainer>
  );
};

export default PlanUpdateLayout;
