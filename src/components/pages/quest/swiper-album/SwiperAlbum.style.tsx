import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CustomSwiper = styled(Swiper)`
  width: 250px;
  height: 248px;
`;

// export const CardSwiperSlide = styled(SwiperSlide)<{
//   backgroundColor?: string;
// }>`
//   background-color: ${(props) => props.backgroundColor || 'white'};
//   border-radius: 18px;
// `;

export const CardSwiperSlide = styled(SwiperSlide)`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: ${fonts.weight.medium};
      color: ${colors.grayscale.white};
    `;
  }}
`;
