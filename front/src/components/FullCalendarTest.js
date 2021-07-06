import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { planAddAction } from "../reducers/plan";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker";

import LoginForm from "./style/LoginForm.css";
import FullCalendarStyle from "./style/FullCalendarStyle.css";
import { Badge, Modal, Input, Radio } from "antd";

const CalendarContainer = styled.div`
  width: 90%;
  height: 100%;
`;

const FullCalendarTest = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false); // modal 생성 여부
  const [dateValue, setDateValue] = useState(""); // 캘린더 달력 클릭 시 값
  const [planText, setPlanText] = useState(""); // 일정 추가 내용
  const [radioValue, setRadioValue] = useState(""); // badge 상태 값
  const [startDate, setStartDate] = useState(""); // DatePicker 기본 default 날짜 값
  const [endDate, setEndDate] = useState(""); // DatePicker 기본 default 날짜 값

  const handleCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleOk = useCallback(() => {
    setModalVisible(false);
    dispatch(
      planAddAction({
        planText,
        radioValue,
        dateValue,
      })
    );
    console.log(planText, radioValue, dateValue);
  }, [planText, radioValue, dateValue]);

  const onClickedDate = useCallback((dateClickInfo) => {
    setDateValue(dateClickInfo.dateStr);
    setStartDate(dateClickInfo.date);
    setEndDate(dateClickInfo.date);
    setModalVisible(true);
  }, []);

  const onChangePlanText = useCallback((e) => {
    e.preventDefault();
    setPlanText(e.target.value);
  }, []);

  const onChangeRadio = useCallback((e) => {
    e.preventDefault();
    setRadioValue(e.target.value);
  }, []);

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height="90%"
        dateClick={onClickedDate}
        events={[
          { title: "event 1", start: "2021-07-01", end: "2021-07-04" },
          { title: "event 2", date: "2021-07-01" },
        ]}
      />
      <Modal
        title="일정 추가"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
        />
        <Input
          placeholder="일정을 입력해주세요"
          style={{ marginBottom: "2.5rem" }}
          value={planText}
          onChange={onChangePlanText}
        />
        <Radio.Group onChange={onChangeRadio}>
          <Radio value={"success"}>
            <Badge status="success" />
          </Radio>
          <Radio value={"error"}>
            <Badge status="error" />
          </Radio>
          <Radio value={"default"}>
            <Badge status="default" />
          </Radio>
          <Radio value={"processing"}>
            <Badge status="processing" />
          </Radio>
          <Radio value={"warning"}>
            <Badge status="warning" />
          </Radio>
        </Radio.Group>
      </Modal>
    </CalendarContainer>
  );
};

export default FullCalendarTest;
