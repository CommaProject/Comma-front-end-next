import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isNext: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 92px;

  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: end;

  z-index: 1000;
`;

export const Button = styled.button<ButtonStateProps>`
  ${({ theme, isNext }) => {
    const { colors } = theme;
    return css`
      width: 45px;
      height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 15px;
      color: ${isNext && colors.primary.caption};
    `;
  }}
`;
