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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 60px;
  height: 65px;
  overflow: hidden;
`;

export const StyledSwiperSlides = styled.div<{
  disable: boolean;
}>`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      color: ${colors.grayscale.gray300};
      height: 21px;
      width: 53px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      cursor: pointer;
    `;
  }}
  background: ${({ disable }) => (disable ? '#5A90FF' : 'fff')};
  color: ${({ disable }) => disable && '#fff'};
`;

export const SwiperBlock = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      font-size: 17px;
      width: 20px;
      text-align: center;
      font-weight: ${fonts.weight.bold};
      color: ${colors.grayscale.gray300};
    `;
  }}
`;
