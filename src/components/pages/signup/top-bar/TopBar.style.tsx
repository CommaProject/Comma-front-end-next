import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isNext: boolean;
}

export const Wrapper = styled.div`
  width: 390px;
  height: 93px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;

  position: fixed;
  z-index: 2;
`;

export const Box = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
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
