import styled, { css } from 'styled-components';


export const Badge = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 57px;
      height: 21px;
      margin-bottom:10px;
      

      display:  flex ;
      align-items: center;
      justify-content: center;

      // position: absolute;
      // top: -35px;
      // left: 0;

      color: ${colors.primary.main};
      font-family: ${fonts.family.pre};
      font-style: normal;
      font-weight: ${fonts.weight.bold};
      font-size: 12px;
      line-height: 15px;
      text-align: center;

      background: ${colors.grayscale.white};
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    `;
  }};
`;
