import styled, { css } from 'styled-components';
import CancelIcon from '@/assets/images/cancel.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 113px;
  margin: 0 auto;
  flex-direction: column;

  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TextTypography = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      color: ${colors.grayscale.dark};
      text-align: center;
      font-family: ${fonts.family.noto};
      font-size: 12px;
      font-style: normal;
      font-weight: ${fonts.weight.medium};
      line-height: 12px;
    `;
  }}
`;

export const TextBox = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: #ccc;
`;

export const ButtonBox = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
`;

export const Button = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YesTypography = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      color: ${colors.primary.main};
      text-align: center;
      font-family: ${fonts.family.noto};
      font-size: 15px;
      font-style: normal;
      font-weight: ${fonts.weight.bold};

      line-height: 15px;
    `;
  }}
`;

export const NoTypography = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      color: ${colors.grayscale.dark};
      text-align: center;
      font-family: ${fonts.family.noto};
      font-size: 15px;
      font-style: normal;
      font-weight: ${fonts.weight.bold};

      line-height: 15px;
    `;
  }}
`;
