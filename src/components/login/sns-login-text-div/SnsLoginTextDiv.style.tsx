import styled, { css } from 'styled-components';

export const SnsLoginTextDivStyle = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      position: relative;
      width: 100%;

      margin: 0 auto;

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
        content: '';
        flex-grow: 1;
        background: ${colors.grayscale.gray300};
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
      }
    `;
  }}
`;
