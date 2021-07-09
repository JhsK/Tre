import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { PageHeader, Button, Form, Input, Rate, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";

const { TextArea } = Input;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 3rem;
`;

const MemoryWriteComponent = () => {
  const [modalState, setModalState] = useState(true);
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
            //onFinish={onFinish}
            encType="multipart/form-data"
          >
            <Input placeholder="제목" size="large" />
            <TextArea rows={15} style={{ margin: "2rem 0 1rem 0" }} />
            <Rate style={{ marginBottom: "2rem" }} />
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              //fileList={fileList}
              // onPreview={this.handlePreview}
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
              <img alt="example" style={{ width: "100%" }} />
            </Modal>
            <Button style={{ float: "right" }}>작성하기</Button>
          </Form>
        </FormContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default MemoryWriteComponent;
