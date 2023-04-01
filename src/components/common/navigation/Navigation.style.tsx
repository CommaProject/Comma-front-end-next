import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      height: 79px;

      padding: 16px 36px 39px 36px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      position: sticky;
      bottom: 0;

      background-color: ${colors.grayscale.white};
      box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.18);
      border-radius: 20px 20px 0px 0px;

      z-index: 1000;
    `;
  }}
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
`;
