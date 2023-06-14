import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Box = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Slide = styled(SwiperSlide)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomSwiper = styled(Swiper)`
  height: 100%;
`;
