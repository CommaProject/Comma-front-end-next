import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const CustomSwiper = styled(Swiper)`
  // height: 100%;
`;

export const Slide = styled(SwiperSlide)`
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
`;
