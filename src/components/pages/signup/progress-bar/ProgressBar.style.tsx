import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 4px;

  position: relative;
`;

export const Progress = styled.progress`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      height: 100%;

      position: absolute;
      left: 0;
      top: 0;

      border-radius: 3px;

      ::-webkit-progress-value {
        background: ${colors.primary.main};
        transition: width 500ms ease-in-out;
      }
      ::-webkit-progress-bar {
        background-color: ${colors.grayscale.gray100};
        width: 100%;
      }
    `;
  }}
`;
