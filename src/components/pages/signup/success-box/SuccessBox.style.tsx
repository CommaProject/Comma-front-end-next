import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 212px;
  height: 71px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  width: 51px;
  height: 71px;
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      font-size: 17px;
      line-height: 17px;
      color: ${colors.primary.main};
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;
