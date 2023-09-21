import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      html,
      body {
        max-width: 390px;
        padding: 0;
        margin: 0 auto;
        -webkit-text-size-adjust: none;
      }

      a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }

      *,
      *:before,
      *:after {
        font-family: ${fonts.family.noto};
        box-sizing: border-box;
      }

      :focus {
        outline: none;
        border: none;
      }

      ::-webkit-scrollbar {
        display: none;
      }

      button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
      }

      title {
        display: inline;
        color: ${colors.grayscale.dark};
        text-align: center;
        font-family: ${fonts.family.noto};
        font-size: 17px;
        font-style: normal;
        font-weight: ${fonts.weight.bold};
        line-height: 17px;
      }
    `;
  }}
`;
