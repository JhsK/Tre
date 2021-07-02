import React, { useCallback, useState } from "react";
import styled from "styled-components";
import LoginForm from "./style/LoginForm.css";
import { Calendar, Badge, PageHeader, Modal } from "antd";

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
        title="Basic Modal"
        visible={modalVisible}
        onOk={handleOk}
        // onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </CalendarContainer>
  );
};

export default CalendarLayout;
