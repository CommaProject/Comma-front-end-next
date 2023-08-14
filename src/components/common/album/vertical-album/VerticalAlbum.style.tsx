import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SongName = styled.text`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      margin-top: 5px;
      color: ${colors.grayscale.dark};
      text-align: center;
      font-family: ${fonts.family.pre};
      font-size: 13px;
      font-style: normal;
      font-weight: ${fonts.weight.bold};
      line-height: 13px;
    `;
  }}
`;

export const SingerName = styled.text`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.gray500};
      font-family: ${fonts.family.pre};
      font-size: 13px;
      font-style: normal;
      font-weight: ${fonts.weight.medium};
      line-height: 13px;
    `;
  }}
`;
