import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 285px;
      height: 71px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      color: ${colors.primary.main};
      font-weight: ${fonts.weight.bold};
      line-height: 18px;

      border-radius: 50px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `;
  }}
`;

export const Box = styled.div`
  width: 79px;
  height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Head = styled.div`
  font-size: 14px;
`;

export const Time = styled.div`
  font-size: 24px;
`;
