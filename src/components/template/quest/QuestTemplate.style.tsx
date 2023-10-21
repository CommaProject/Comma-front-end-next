import PrevSVG from '@/assets/images/prevArrow.svg';

import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';


export const Wrapper = styled.div`
margin-top: 12px;
margin-left: 15px;
margin-right: 15px;
height: 100%;
position:relative;
overflow: scroll;
`;

export const FriendsMostListenedTrackTitle = styled.title`
  margin-top: 33px;
`;

export const PrevIcon = styled(PrevSVG)`
  margin-right: auto; 
`
export const TopBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  `;

export const Title = styled.title`
justify-content: center;
text-align: center;
align-items: center; 
margin-right: auto;
`;

export const SeeMoreBox = styled.div`
  margin-bottom: 15px;
    `;

export const CustomSwiper = styled(Swiper)`
    // height: 100%;
    height: auto;
    `;

export const Slide = styled(SwiperSlide)`
    height: 100 %;

    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    `;
