import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const CustomSwiper = styled(Swiper)`
  height: auto;
`;

export const Slide = styled(SwiperSlide)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
