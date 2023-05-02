import styled, { css } from 'styled-components';

interface BoxStateProps {
  isActivate: boolean;
}

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

export const Box = styled.div<BoxStateProps>`
  ${({ theme, isActivate }) => {
    const { colors } = theme;
    return css`
      width: 50%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      color: ${isActivate ? colors.grayscale.white : colors.primary.main};

      border-radius: 50px;
      background-color: ${isActivate
        ? colors.primary.main
        : colors.grayscale.white};
    `;
  }}
`;

export const Head = styled.div`
  padding-bottom: 12px;

  font-size: 14px;
`;

export const Time = styled.div`
  font-size: 24px;
`;
