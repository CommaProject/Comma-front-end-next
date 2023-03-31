import styled, { css } from 'styled-components';

export const SplashIconWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 390px;
      height: 844px;

      position: relative;

      background-color: ${colors.grayscale.white};
    `;
  }}
`;
