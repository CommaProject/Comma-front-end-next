import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      text-align: center;
      font-size: 17px;
      line-height: 17px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

export const Box = styled.div`
  width: 140px;
  margin-top: 45px;

  display: flex;
  justify-content: space-between;
`;

export const Desc = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      height: 60px;
      margin-top: 23px;

      text-align: center;
      font-size: 12px;
      line-height: 20px;
      font-weight: ${fonts.weight.medium};
      color: ${colors.grayscale.gray300};
    `;
  }}
`;

export const Emphs = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      margin-top: 10px;

      text-align: center;
      font-size: 12px;
      line-height: 20px;
      font-weight: ${fonts.weight.medium};
      color: ${colors.grayscale.gray300};
    `;
  }}
`;

export const Button = styled.button<ButtonStateProps>`
  ${({ theme, isActivate }) => {
    const { fonts, colors } = theme;
    return css`
      width: 64px;
      height: 24px;

      font-size: 12px;
      line-height: 12px;
      font-weight: ${isActivate ? fonts.weight.bold : fonts.weight.medium};
      color: ${isActivate ? colors.primary.main : colors.grayscale.gray300};

      border: ${!isActivate && '1px solid ' + colors.grayscale.gray300};
      border-radius: 50px;
      background: ${isActivate && colors.grayscale.white};
      box-shadow: ${isActivate && '0px 2px 4px rgba(0, 0, 0, 0.25)'};
    `;
  }}
`;

export const Slide = styled.div`
  width: 390px;

  display: flex;

  overflow: auto;
  white-space: nowrap;
`;

export const FlexBox = styled.div`
  display: flex;
`;
