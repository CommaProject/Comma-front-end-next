import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
`;

export const Box = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 100%;
      margin: 0 auto;

      position: relative;

      display: flex;
      align-items: center;
      text-align: center;
      overflow: hidden;

      color: ${colors.grayscale.dark};
      font-size: 12px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.medium};
      line-height: 12px;

      ::before,
      ::after {
        height: 1px;
        margin: 0px 16px;

        flex-grow: 1;

        content: '';
        font-size: 0px;
        line-height: 0px;

        background: ${colors.grayscale.gray300};
      }
    `;
  }}
`;
