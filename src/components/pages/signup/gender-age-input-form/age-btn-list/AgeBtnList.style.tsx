import styled, { css } from 'styled-components';

interface StyleProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  width: 170px;
  height: 190px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const List = styled.div`
  width: 170px;
  height: 150px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Box = styled.div`
  width: 49px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      text-align: center;
      font-size: 17px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

export const Desc = styled.div<Partial<StyleProps>>`
  ${({ theme, isActivate }) => {
    const { fonts } = theme;
    return css`
      padding-top: 6px;

      text-align: center;
      font-size: 12px;
      font-weight: ${fonts.weight.medium};
      color: ${isActivate
        ? theme.colors.grayscale.dark
        : theme.colors.grayscale.gray300};
    `;
  }}
`;

export const Button = styled.button<Partial<StyleProps>>`
  ${({ theme, isActivate }) => {
    const { fonts, colors } = theme;
    return css`
      width: 44px;
      height: 44px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 12px;
      font-weight: ${fonts.weight.bold};
      color: ${isActivate ? colors.grayscale.white : colors.grayscale.gray300};

      border-radius: 50%;
      border: 1px solid;
      border-color: ${isActivate ? '#5A90FF' : '#9C9C9C'};
      background: ${isActivate ? '#5A90FF' : 'fff'};
    `;
  }}
`;
