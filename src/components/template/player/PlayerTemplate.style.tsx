import styled, { css } from 'styled-components';

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
export const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 2;
`;
