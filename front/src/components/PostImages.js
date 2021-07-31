import { PlusOutlined } from "@ant-design/icons";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import ImagesZoom from "./ImagesZoom";

const ImagesContainer = styled.div`
  display: inline-block;
  width: 50%;
  text-align: center;
  vertical-align: middle;
`;

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  console.log(images);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          src={`https://treback.herokuapp.com/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
          style={{ maxHeight: "200px" }}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          src={`https://treback.herokuapp.com/${images[0].src}`}
          style={{ width: "50%", display: "inline-block", height: "200px" }}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          src={`https://treback.herokuapp.com/${images[1].src}`}
          style={{ width: "50%", display: "inline-block", height: "200px" }}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          src={`https://treback.herokuapp.com/${images[0].src}`}
          width="50%"
          alt={images[0].src}
          onClick={onZoom}
          style={{ height: "200px" }}
        />
        <ImagesContainer onClick={onZoom}>
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </ImagesContainer>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

export default PostImages;
