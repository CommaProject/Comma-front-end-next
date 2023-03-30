import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const CommonStyle = styled.button<{
  disable: boolean;
}>`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      font-size: 12px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.grayscale.gray300};
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

export const SelectBtn = styled(CommonStyle)`
  width: 44px;
  height: 44px;
  border: 1px solid;
  background: ${({ disable }) => (disable ? '#5A90FF' : 'fff')};
  border-color: ${({ disable }) => (disable ? '#5A90FF' : '#9C9C9C')};
  color: ${({ disable }) => disable && '#fff'};
`;
