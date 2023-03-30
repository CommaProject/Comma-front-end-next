import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CommonContainer = styled.div`
  height: 61px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommonBtnContainer = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const CommonTextWrapper = styled.div`
  width: 158px;
  display: flex;
  justify-content: space-around;
`;

export const SignUpContainer = styled.div`
  position: relative;
  height: 844px;
  width: 390px;
`;

export const SignUpWrapper = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSlide = styled(SwiperSlide)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSwiper = styled(Swiper)`
  height: 600px;
`;
