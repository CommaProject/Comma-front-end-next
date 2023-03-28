import styled, { css } from 'styled-components';

export const SubTextBox = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      text-align: center;
      font-size: 17px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

export const ExplainTextBox = styled.div<{ color: string }>`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      text-align: center;
      padding-top: 6px;
      font-size: 12px;
      font-weight: ${fonts.weight.medium};
    `;
  }}
  color:${({ color }) => color};
`;
