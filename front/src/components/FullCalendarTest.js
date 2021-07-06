import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { planAddAction } from "../reducers/plan";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker";

import "./style/LoginForm.css";
import "./style/DatePickerStyle.css";
import "./style/FullCalendarStyle.css";

import { Modal, Input } from "antd";

const CalendarContainer = styled.div`
  width: 90%;
  height: 100%;
`;

const FullCalendarTest = () => {
  const planData = useSelector((state) => state.plan.planData);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false); // modal 생성 여부
  const [dateValue, setDateValue] = useState(""); // 캘린더 달력 클릭 시 값
  const [title, setTitle] = useState(""); // 일정 추가 내용
  const [start, setStart] = useState(""); // DatePicker 기본 default 날짜 객체
  const [end, setEnd] = useState(""); // DatePicker 기본 default 날짜 객체
  const handleCancel = useCallback(() => {
    setModalVisible(false);
  }, []);
  console.log(start);

  const handleOk = useCallback(() => {
    setModalVisible(false);
    dispatch(
      planAddAction({
        start,
        end,
        title,
        dateValue,
      })
    );
    console.log(title, dateValue);
  }, [title, dateValue]);

  const onClickedDate = useCallback((dateClickInfo) => {
    setDateValue(dateClickInfo.dateStr);
    setStart(dateClickInfo.date);
    setEnd(dateClickInfo.date);
    setModalVisible(true);
  }, []);

  const onChangePlanText = useCallback((e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }, []);

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="90%"
        dateClick={onClickedDate}
        events={[planData]}
      />
      <Modal
        title="일정 추가"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
        <Input
          placeholder="일정을 입력해주세요"
          style={{ marginBottom: "2.5rem" }}
          value={title}
          onChange={onChangePlanText}
        />
      </Modal>
    </CalendarContainer>
  );
};

export default FullCalendarTest;
