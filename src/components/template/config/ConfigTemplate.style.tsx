import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  height: 100%;
`;

export const Box = styled.div`
  // 이부분은 header 설정 후에 생각해봐야 할 것 같습니다.
  height: calc(100% - 92px - 79px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimePickerBox = styled.div`
  margin: 80px 0 19px 0;
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      width: 100%;
      padding-left: 15px;
      margin: 53px 0 20px 0;

      font-size: 12px;
      line-height: 17px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

export const Button = styled.button<ButtonStateProps>`
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
      border-color: ${isActivate
        ? colors.primary.main
        : colors.grayscale.gray300};
      background: ${isActivate ? colors.primary.main : colors.grayscale.white};
    `;
  }}
`;
