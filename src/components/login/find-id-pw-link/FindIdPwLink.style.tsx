import styled, { css } from 'styled-components';

export const FindIdPwLinkStyle = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      position: relative;
      width: 200px;
      height: 12px;

      margin: 0 auto;
      text-align: center;

      color: ${colors.grayscale.dark};
      font-family: 'Noto Sans KR';
      font-weight: ${fonts.weight.medium};
      font-size: 12px;
      line-height: 12px;

      > * {
        position: relative;
        padding: 0 5px;
        text-decoration: none;
        :first-child {
          ::before {
            display: none;
          }
        }

        ::before {
          content: '';
          display: inline-block;
          width: 1px;
          height: 10px;
          background-color: ${colors.common.black};
          position: relative;
          top: 0;
          right: 5px;
        }
      }
    `;
  }};
`;
