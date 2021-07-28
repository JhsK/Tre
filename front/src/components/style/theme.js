import styled, { css } from "styled-components";

const size = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
