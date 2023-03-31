import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 200px;
      height: 12px;
      margin: 0 auto 44px;

      position: relative;
      text-align: center;

      color: ${colors.grayscale.dark};
      font-size: 12px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.medium};
      line-height: 12px;

      > * {
        padding: 0 5px;

        text-decoration: none;
        :first-child {
          ::before {
            display: none;
          }
        }

        ::before {
          width: 1px;
          height: 10px;

          display: inline-block;

          position: relative;
          top: 0;
          right: 5px;

          content: '';

          background-color: ${colors.grayscale.dark};
        }
      }
    `;
  }};
`;

export const Div = styled.div``;
