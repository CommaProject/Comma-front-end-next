import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const SongName = styled.text`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.pre};
      font-size: 13px;
      font-weight: ${fonts.weight.regular};
      line-height: 16px;
    `;
  }}
`;

export const SingerName = styled.text`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.gray300};
      font-family: ${fonts.family.pre};
      font-size: 13px;
      font-weight: ${fonts.weight.medium};
      line-height: 16px;
    `;
  }}
`;

export const Timer = styled.text`
  color: #666;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  margin-top: 17px;
`;
