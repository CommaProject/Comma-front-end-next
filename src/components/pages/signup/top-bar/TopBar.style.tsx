import styled, { css } from 'styled-components';

interface ButtonProps {
  isNext: boolean;
}

export const Wrapper = styled.div`
  width: 390px;
  height: 93px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
`;

export const Box = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<Partial<ButtonProps>>`
  ${({ theme, isNext }) => {
    const { fonts, colors } = theme;
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
