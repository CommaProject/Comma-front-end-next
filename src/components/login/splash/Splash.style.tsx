import styled, { css } from 'styled-components';

export const SplashIconWrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      position: relative;
      width: 390px;
      height: 844px;
      background-color: ${colors.grayscale.white};
    `;
  }}
`;
