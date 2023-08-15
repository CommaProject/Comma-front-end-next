import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%;
`;

export const CardSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;
