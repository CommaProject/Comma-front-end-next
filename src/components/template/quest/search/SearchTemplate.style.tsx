import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      height: 100%;

      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 15px 15px;
      background-color: ${colors.grayscale.dark};
    `;
  }}
`;
