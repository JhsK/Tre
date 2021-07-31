import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const PlusContainer = styled.div`
  display: inline-block;
  width: 50%;
  text-align: center;
  vertical-align: middle;
`;

const ImagesContainer = styled.div`
  height: 350px;

  & img {
    display: inline-block;
  }
`;

const DetailPostImages = ({ images }) => {
  if (images.length === 1) {
    return (
      <>
        <img
          src={`https://treback.herokuapp.com/${images[0].src}`}
          alt={images[0].src}
          style={{ width: "100%", maxHeight: "350px" }}
        />
      </>
    );
  }
  if (images.length === 2) {
    return (
      <ImagesContainer>
        <img
          src={`https://treback.herokuapp.com/${images[0].src}`}
          style={{ width: "50%" }}
          alt={images[0].src}
        />
        <img
          src={`https://treback.herokuapp.com/${images[1].src}`}
          style={{ width: "50%" }}
          alt={images[1].src}
        />
      </ImagesContainer>
    );
  }
  return (
    <>
      <div style={{ height: "350px" }}>
        <img
          src={`https://treback.herokuapp.com/${images[0].src}`}
          width="50%"
          alt={images[0].src}
          style={{ maxHeight: "400px" }}
        />
        <PlusContainer>
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </PlusContainer>
      </div>
    </>
  );
};

export default DetailPostImages;
