import styled, { css } from 'styled-components';
<<<<<<< HEAD
import MinimizationIcon from '@/assets/images/minimization.svg';
=======
import { Swiper, SwiperSlide } from 'swiper/react';
import MinimizationIcon from '@/assets/images/minimization.svg';
import PencilIcon from '@/assets/images/pencil.svg';

export const Slide = styled(SwiperSlide)`
  height: 100%;
`;

export const CloseButton = styled(MinimizationIcon)`
  cursor: pointer;
`;

export const WriteButton = styled(PencilIcon)`
  cursor: pointer;
`;

export const SlideWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 390px;
      height: 100%;

      background: linear-gradient(
        180deg,
        ${colors.primary.main} 0%,
        ${colors.grayscale.white} 67.19%
      );
    `;
  }}
`;

export const CustomSwiper = styled(Swiper)`
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
`;

>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 390px;
      height: 100%;

      background: linear-gradient(
        180deg,
        ${colors.primary.main} 0%,
        ${colors.grayscale.white} 67.19%
      );
    `;
  }}
`;
<<<<<<< HEAD
export const CloseButton = styled(MinimizationIcon)`
  top: 10px;
  right: 10px;
  cursor: pointer;
=======

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 18px;
  padding-left: 8px;
  padding-right: 14px;
`;

export const TitleBox = styled.div`
  margin-top: 36px;
`;

export const Title = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.white};
      font-family: ${fonts.family.noto};
      font-size: 17px;
      font-style: normal;
      text-align: center;
      font-weight: ${fonts.weight.bold};
      line-height: 18px;

      margin-top: 36px;
    `;
  }}
`;

export const Date = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.noto};
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: ${fonts.weight.medium};
      line-height: 18px;

      align-items: center;
      padding-top: 5px;
    `;
  }}
`;

export const ProgressBar = styled.input`
  width: 317px;
  height: 2px;

  border: none;
  margin: 0 auto;
  ::-webkit-slider-runnable-track {
    color: pink;
  }
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;

>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9
`;
