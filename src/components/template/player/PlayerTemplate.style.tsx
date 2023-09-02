import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import MinimizationIcon from '@/assets/images/minimization.svg';

export const Slide = styled(SwiperSlide)`
  height: 100%;
`;

export const CloseButton = styled(MinimizationIcon)`
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const SlideWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 390px;
      height: 100%;

      background: linear-gradient(
        180deg,
        ${colors.primary.main} 0%,
        ${colors.grayscale.white} 67.19%
      );
    `;
  }}
`;

export const CustomSwiper = styled(Swiper)`
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
`;
