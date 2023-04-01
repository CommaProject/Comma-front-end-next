import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 71px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 158px;

  display: flex;
  justify-content: space-around;
`;

export const Length = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 100%;
      padding-top: 6px;
      padding-left: 5px;

      text-align: left;
      font-size: 12px;
      font-weight: ${fonts.weight.medium};
      color: ${colors.grayscale.gray300};
    `;
  }}
`;

export const Input = styled.input`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 126px;
      height: 20px;

      font-size: 17px;

      border: 0px;
      border-bottom: 2px solid ${colors.grayscale.dark};

      &:focus {
        outline: none;
        border-bottom: 2px solid ${colors.grayscale.dark};
      }
    `;
  }}
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      text-align: center;
      font-size: 17px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;
