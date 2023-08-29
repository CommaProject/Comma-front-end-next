import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;
`;

export const AvatarBox = styled.div`
  flex: '0 0 calc(33.33% - 10px)';
  margin: 15px;
  height: 126px;
  width: 89px;
  text-align: center;
`;

export const AvatartName = styled.text`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      font-family: ${fonts.family.noto}
      font-size: 12px;
      font-style: normal;
      font-weight: ${fonts.fontWeight.medium};
      line-height: 16px;
    `;
  }}
`;

export const AvatarGroupName = styled.text`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.gray500};
      font-family: ${fonts.family.noto}
      font-size: 12px;
      font-style: normal;
      font-weight: ${fonts.fontWeight.medium};
      line-height: 16px;
    `;
  }}
`;
