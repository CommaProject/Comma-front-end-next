import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;
`;

export const AvatarGroupName = styled.text`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.gray500};
      font-family: ${fonts.family.noto}
      font-size: 12px;
      font-style: normal;
      font-weight: ${fonts.weight.medium};
      line-height: 16px;
    `;
  }}
`;
