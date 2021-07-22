import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

import { PageHeader, Button, Form, Input, Rate } from "antd";
import { StyledBackground, FrameStyled } from "./ScheduleLayout";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import {
  UPLOAD_IMAGES_REQUEST,
  ADD_POST_REQUEST,
  REMOVE_IMAGE,
} from "../reducers/post";
import { useHistory } from "react-router";

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

const PreviewContainer = styled.div`
  text-align: left;
`;

const PreviewImage = styled.div`
  display: inline-block;

  & img {
    width: 100px;
  }

  & Button {
    margin-top: 1rem;
  }
`;

const MemoryWriteComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { imagePaths } = useSelector((state) => state.post);
  const [rateValue, SetRateValue] = useState(0);
  const [writeTitle, onChangeWriteTitle] = useInput("");
  const [writeContent, onChangeWriteContent] = useInput("");
  const imageInput = useRef();

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    },
    []
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmitWrite = useCallback(() => {
    if (
      (!writeTitle || !writeTitle.trim()) &&
      (!writeContent || !writeContent.trim())
    ) {
      return alert("제목 또는 게시물을 작성하세요");
    }
    const formData = new FormData();
    imagePaths.forEach((i) => {
      formData.append("image", i);
    });
    formData.append("title", writeTitle);
    formData.append("content", writeContent);
    formData.append("rate", rateValue);

    history.push("/memory");

    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [writeTitle, writeContent, rateValue, imagePaths]);

  const onChangeRate = useCallback((value) => {
    SetRateValue(value);
  }, []);

  return (
    <StyledBackground>
      <FrameStyled>
        <PageHeader
          ghost={false}
          title="작성하기"
          onBack={() => window.history.back()}
          subTitle="직접 가본 장소"
          extra={[
            <Button key="1" onClick={() => history.push("/memory")}>
              취소
            </Button>,
          ]}
          style={{ borderBottom: "1px solid #f3f3f3" }}
        />
        <FormContainer>
          <Form
            name="postWrite"
            style={{ width: "75%" }}
            onFinish={onSubmitWrite}
            encType="multipart/form-data"
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
            <Form.Item>
              <input
                type="file"
                hidden
                name="image"
                ref={imageInput}
                multiple
                onChange={onChangeImages}
              />
              <Button onClick={onClickImageUpload}>이미지 업로드</Button>
            </Form.Item>
            <Form.Item className="write-submit-btn">
              <Button htmlType="submit">작성하기</Button>
            </Form.Item>
            <PreviewContainer>
              {imagePaths.map((v, i) => (
                <PreviewImage key={v}>
                  <img src={`http://localhost:3065/${v}`} alt={v} />
                  <div>
                    <Button onClick={onRemoveImage(i)}>제거</Button>
                  </div>
                </PreviewImage>
              ))}
            </PreviewContainer>
          </Form>
        </FormContainer>
      </FrameStyled>
    </StyledBackground>
  );
};

export default MemoryWriteComponent;
