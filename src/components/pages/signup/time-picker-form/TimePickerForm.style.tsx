import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 197px;
`;

export const Box = styled.div`
  height: 60px;
  margin-bottom: 52px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      padding-bottom: 23px;

      text-align: center;
      font-size: 17px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

export const Desc = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      padding-top: 6px;

      text-align: center;
      font-size: 12px;
      font-weight: ${fonts.weight.medium};
      color: ${colors.grayscale.gray300};
    `;
  }}
`;
