import React, { useCallback, useState } from "react";
import styled from "styled-components";
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

const { RangePicker } = DatePicker;

const CalendarContainer = styled.div`
  width: 90%;
  height: 100%;
`;

const CalendarLayout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dateValue, setDateValue] = useState("");

  const handleCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleOk = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onClickedDate = useCallback((e) => {
    setModalVisible(true);
    console.log(e._d);
  }, []);

  return (
    <CalendarContainer>
      <PageHeader className="site-page-header" title="Calendar" />
      <Calendar
        value={dateValue}
        onSelect={onClickedDate}
        style={{ width: "95%", marginLeft: "2rem" }}
      />
      <Modal
        title="일정 추가"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <RangePicker bordered={false} style={{ marginBottom: "2rem" }} />
        <Input
          placeholder="일정을 입력해주세요"
          style={{ marginBottom: "2.5rem" }}
        />
        <Radio.Group>
          <Radio value={1}>
            <Badge status="success" />
          </Radio>
          <Radio value={2}>
            <Badge status="error" />
          </Radio>
          <Radio value={3}>
            <Badge status="default" />
          </Radio>
          <Radio value={4}>
            <Badge status="processing" />
          </Radio>
          <Radio value={4}>
            <Badge status="warning" />
          </Radio>
        </Radio.Group>
      </Modal>
    </CalendarContainer>
  );
};

export default CalendarLayout;
