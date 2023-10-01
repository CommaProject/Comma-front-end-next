import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
// `;

export const CustomSwiper = styled(Swiper)`
  // width: auto;
  display: flex;
  align-items: center;
  position: relative;
`;

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
      color: ${colors.grayscale.dark};
    `;
  }}
`;
