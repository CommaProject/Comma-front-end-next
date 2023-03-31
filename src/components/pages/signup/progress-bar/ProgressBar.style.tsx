import styled, { css } from 'styled-components';

interface ProgressProps {
  percent: number;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 4px;

  position: relative;
`;

export const Background = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      height: 100%;

      position: absolute;
      left: 0;
      top: 0;

      border-radius: 3px;
      background: ${colors.grayscale.dark}1a;
    `;
  }}
`;

export const Progress = styled.div<Partial<ProgressProps>>`
  ${({ theme, percent }) => {
    const { colors } = theme;
    return css`
      width: ${percent}%;
      height: 100%;

      position: absolute;
      left: 0;
      top: 0;

      border-radius: 3px;
      background: ${colors.primary.main};

      transition: width 500ms ease-in-out;
    `;
  }}
`;
