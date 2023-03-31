import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      margin-bottom: 78px;

      position: relative;
      text-align: center;

      color: ${colors.grayscale.dark};
      font-size: 15px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.regular};
      line-height: 15px;

      > * {
        padding-left: 5px;

        display: inline-block;

        font-weight: ${fonts.weight.bold};
        text-decoration: underline;
      }
    `;
  }}
`;
