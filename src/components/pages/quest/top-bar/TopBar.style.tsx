import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isActivate: boolean;
}

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  z-index: 1;
  gap: 15px;
  background-color: white;
  padding: 10px;
  top: 0;
  z-index: 999;
`;

export const StickySections = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const ButtonBox = styled.div`
  padding-left: 35px;
  display: flex;
  gap: 12px;
  top: 0;
  background-color: white;
  z-index: 999;
  height: 33px;
`;

export const Button = styled.button<ButtonStateProps>`
  ${({ theme, isActivate }) => {
    const { fonts, colors } = theme;
    return css`
      width: 52px;
      height: 20px;

      font-size: 12px;
      line-height: 12px;
      font-weight: ${isActivate ? fonts.weight.bold : fonts.weight.medium};
      color: ${isActivate ? colors.primary.main : colors.grayscale.gray300};

      border: ${!isActivate && `1px solid ${colors.grayscale.gray300}`};
      border-radius: 50px;
      background: ${isActivate && colors.grayscale.white};
      box-shadow: ${isActivate && '0px 2px 4px rgba(0, 0, 0, 0.25)'};
    `;
  }}
`;
