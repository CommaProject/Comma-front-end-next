import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 75%;
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Box = styled.div`
  height: 61px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.div`
  width: 158px;

  display: flex;
  justify-content: space-around;
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

export const Desc = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      text-align: center;
      font-size: 17px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;
