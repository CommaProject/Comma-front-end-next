import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';

interface SlideProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
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

export const CustomSwiper = styled(Swiper)`
  width: 60px;
  height: 65px;
`;

export const Slide = styled.div<Partial<SlideProps>>`
  ${({ theme, isActivate }) => {
    const { colors } = theme;
    return css`
      height: 21px;
      width: 53px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${isActivate ? colors.grayscale.white : colors.grayscale.gray300};

      background: ${isActivate ? colors.primary.main : colors.grayscale.white};
      border-radius: 20px;

      cursor: pointer;
    `;
  }}
`;

export const Text = styled.div`
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
