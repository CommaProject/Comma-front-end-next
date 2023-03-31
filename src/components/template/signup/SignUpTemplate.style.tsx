import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const Box = styled.div`
  height: 550px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slide = styled(SwiperSlide)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomSwiper = styled(Swiper)`
  height: 600px;
`;
