import styled, { css } from 'styled-components';

import { Swiper } from 'swiper/react';

export const Container = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      width: 90px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      font-size: 15px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;
export const SwiperContainer = styled.div`
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSwiper = styled(Swiper)`
  width: 60px;
  height: 65px;
`;

interface StyledWrapperProps {
  disable: boolean;
}
export const StyledSwiperSlides = styled.div<StyledWrapperProps>`
  ${({ theme, disable }) => {
    const { colors } = theme;
    return css`
      height: 21px;
      width: 53px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${disable && '#fff'};

      background: ${disable ? '#5A90FF' : 'fff'};
      border-radius: 20px;

      cursor: pointer;
    `;
  }}
`;

export const SwiperBlock = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 20px;

      text-align: center;

      font-size: 17px;
      font-weight: ${fonts.weight.bold};
      color: ${colors.grayscale.gray300};
    `;
  }}
`;
