import styled, { css } from "styled-components";

export const size = {
  mobile: 320,
  tabletSmall: 600,
  tabletLarge: 900,
  desktop: 1024,
};

export const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
