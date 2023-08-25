import styled, { css } from 'styled-components';

interface ImgBoxProps {
  width: number;
  height: number;
}

interface ImageProps {
  radius: number;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const ImgBox = styled.div<ImgBoxProps>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    flex-shrink: 0;
  `}
`;

export const Image = styled.img<ImageProps>`
  ${({ radius }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${radius}px;
  `}
