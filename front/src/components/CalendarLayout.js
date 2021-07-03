import React, { useCallback, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import LoginForm from "./style/LoginForm.css";
import {
  Calendar,
  Badge,
  PageHeader,
  Modal,
  DatePicker,
  Input,
  Radio,
} from "antd";
import Item from "antd/lib/list/Item";

const { RangePicker } = DatePicker;

const CalendarContainer = styled.div`
  width: 90%;
  height: 100%;
`;

const CalendarLayout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dateValue, setDateValue] = useState(0);
  const [planText, setPlanText] = useState("");
  // moment("2021-07-02")
  const [radioValue, setRadioValue] = useState("");
  const [datePickerValue, setDatePickerValue] = useState("");
  const [momentDate, setMomentDate] = useState(0);

  const handleCancel = useCallback(() => {
    setModalVisible(false);
    console.log(dateValue);
  }, [dateValue]);

  const handleOk = useCallback(() => {
    setModalVisible(false);
    console.log(datePickerValue, planText, radioValue, dateValue);
  }, [datePickerValue, planText, radioValue, dateValue]);

  const onClickedDate = useCallback((e) => {
    setModalVisible(true);
    setMomentDate(e.date());
    setDateValue(moment(e._d));
  }, []);

  const onChangePlanText = useCallback((e) => {
    e.preventDefault();
    setPlanText(e.target.value);
  }, []);

  const onChangeRadio = useCallback((e) => {
    e.preventDefault();
    setRadioValue(e.target.value);
  }, []);

  const onChangeDatePicker = useCallback((e) => {
    console.log(e[0].format("YYYY-MM-DD"));
    setDatePickerValue({
      firstDay: e[0].format("YYYY-MM-DD"),
      lastDay: e[1].format("YYYY-MM-DD"),
    });
  }, []);

  const getListData = useCallback(
    (value) => {
      let listData;
      //console.log(value);
      //console.log(radioValue, planText);
      switch (value.date()) {
        case momentDate:
          listData = [{ type: radioValue, content: planText }];
          break;
        default:
      }
      return listData || [];
    },
    [momentDate, radioValue, planText]
  );

  const dateCellRender = useCallback(
    (value) => {
      const listData = getListData(value);
      console.log(listData);
      return (
        <ul className="events">
          {listData.map((item) => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))}
        </ul>
      );
    },
    [getListData]
  );

  return (
    <CalendarContainer>
      <PageHeader className="site-page-header" title="Calendar" />
      <Calendar
        value={dateValue}
        onSelect={onClickedDate}
        dateCellRender={dateCellRender}
        style={{ width: "95%", marginLeft: "2rem" }}
      />
      <Modal
        title="일정 추가"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <RangePicker
          bordered={false}
          format={"YYYY/MM/DD"}
          value={[dateValue, dateValue]}
          style={{ marginBottom: "2rem" }}
          // value={datePickerValue}
          onChange={onChangeDatePicker}
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

export default CalendarLayout;
