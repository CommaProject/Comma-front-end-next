import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 100%;
      height: 149px;
      margin: 0 auto 44px;

      position: absolute;
      top: 191px;
      text-align: center;

      color: ${colors.grayscale.dark};
      font-size: 12px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.medium};
      line-height: 12px;

      > a {
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

export const Box = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      position: relative;
      text-align: center;
      top: 44px;

      color: ${colors.grayscale.dark};
      font-size: 15px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.regular};
      line-height: 15px;
    `;
  }}
`;

export const Text = styled.span`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      padding-left: 5px;

      display: inline-block;

      font-weight: ${fonts.weight.bold};
      text-decoration: underline;
    `;
  }}
`;
