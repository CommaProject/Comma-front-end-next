import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  // margin: 10px 0px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const SongName = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.pre};
      font-size: 13px;
      font-weight: ${fonts.weight.bold};
      line-height: 16px;
    `;
  }}
`;

export const SingerName = styled.div`
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

export const Timer = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  margin-top: 17px;
`;
