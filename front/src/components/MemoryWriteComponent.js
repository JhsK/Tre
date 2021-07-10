import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { PageHeader, Button, Form, Input, Rate, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import useInput from "../hooks/useInput";

const { TextArea } = Input;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 3rem;

  .write-submit-btn {
    float: right;
    position: absolute;
    bottom: 130px;
    right: 184px;
  }
`;

const UploadContainer = styled.div`
  width: 75%;
`;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const MemoryWriteComponent = () => {
  const [modalState, setModalState] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [rateValue, SetRateValue] = useState(0);
  const [writeTitle, onChangeWriteTitle] = useInput("");
  const [writeContent, onChangeWriteContent] = useInput("");

  const onSubmitWrite = useCallback(() => {
    console.log(writeTitle, writeContent, rateValue);
  }, [writeTitle, writeContent, rateValue]);

  const onChangeRate = useCallback((value) => {
    SetRateValue(value);
  }, []);

  const handlePreview = useCallback(async (file) => {
    console.log(file);
    // if (!file.url && !file.preview) {
    //   file.preview = await getBase64(file.originFilobj);
    // }
    setModalState((prev) => !prev);
    setPreviewImage(file.url || file.preview);
  }, []);

  const modalCancel = useCallback(() => {
    setModalState((prev) => !prev);
  }, []);

  return (
    <StyledBackground>
      <FrameStyled>
        <PageHeader
          ghost={false}
          title="작성하기"
          onBack={() => window.history.back()}
          subTitle="직접 가본 장소"
          extra={[<Button key="1">취소</Button>]}
          style={{ borderBottom: "1px solid #f3f3f3" }}
        />
        <FormContainer>
          <Form
            name="postWrite"
            style={{ width: "75%" }}
            onFinish={onSubmitWrite}
          >
            <Form.Item name="title">
              <Input
                placeholder="제목"
                size="large"
                value={writeTitle}
                onChange={onChangeWriteTitle}
                name="title"
              />
            </Form.Item>
            <Form.Item name="content">
              <TextArea
                rows={15}
                style={{ margin: "2rem 0 1rem 0" }}
                value={writeContent}
                onChange={onChangeWriteContent}
                name="content"
              />
            </Form.Item>
            <Form.Item name="score">
              <Rate
                style={{ marginBottom: "2rem" }}
                value={rateValue}
                onChange={onChangeRate}
                name="score"
              />
            </Form.Item>
            <Form.Item className="write-submit-btn">
              <Button htmlType="submit">작성하기</Button>
            </Form.Item>
          </Form>
          <UploadContainer>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              //fileList={fileList}
              onPreview={handlePreview}
              // onChange={this.handleChange}
            >
              {false ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
            <Modal
              visible={modalState}
              title="미리보기"
              footer={null}
              onCancel={modalCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </UploadContainer>
        </FormContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default MemoryWriteComponent;
