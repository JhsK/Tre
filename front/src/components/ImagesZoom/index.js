import React, { useState } from "react";
import Slick from "react-slick";
import {
  Overlay,
  Global,
  Header,
  SlickWrapper,
  Indicator,
  CloseBtn,
  ImageWrapper,
} from "./styles";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(images);
  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <Slick
          initialSlide={0}
          beforeChange={(slide) => setCurrentSlide(slide)}
          infinite
          fade
          slidesToShow={1}
          slidesToScroll={1}
        >
          {images.map((v) => (
            <ImageWrapper key={v.src}>
              <img src={`https://treback.herokuapp.com/${v.src}`} alt={v.src} />
            </ImageWrapper>
          ))}
        </Slick>
        <Indicator>
          <div>
            {currentSlide + 1} /{images.length}
          </div>
        </Indicator>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;
