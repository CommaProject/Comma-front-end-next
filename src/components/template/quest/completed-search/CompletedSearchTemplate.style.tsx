import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

export const TopBox = styled.div`
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 1;
  gap: 15px;
  background-color: white;
  padding: 10px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
  position: sticky;
  top: 0; /* Add this line */
  background-color: white; /* Optional background color */
  z-index: 2; /* Increase z-index to make sure it's above the content */
`;
