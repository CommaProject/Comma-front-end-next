import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  flex-direction: column;
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

      border: ${!isActivate && `1px solid ${colors.grayscale.gray300}`};
      border-radius: 50px;
      background: ${isActivate && colors.grayscale.white};
      box-shadow: ${isActivate && '0px 2px 4px rgba(0, 0, 0, 0.25)'};
    `;
  }}
`;

export const TopBox = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between; /* Added this to align the children */
  top: 0;
  z-index: 1;
  gap: 15px;
  background-color: white; /* Added this to ensure the sticky behavior */
  padding: 10px; /* Added this to provide space around the content */
`;
