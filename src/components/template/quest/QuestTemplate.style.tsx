import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  // width: auto;
  height: 100%;
  overflow: scroll;
`;

export const FriendsMostListenedTrackTitle = styled.title`
  margin-top: 33px;
`;

export const MoreSee = styled.div`
  width: 90px;
  height: 90px;

  background: #d9d9d9;
  border-radius: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomSwiper = styled(Swiper)`
  // height: 100%;
    height: auto;
`;

export const Slide = styled(SwiperSlide)`
  height: 100%;

  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;
