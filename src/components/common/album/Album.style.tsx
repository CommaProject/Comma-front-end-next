import styled, { css } from 'styled-components';

interface ImageProps {
  borderRadius: number;
}

interface ImgBoxProps {
  width: number;
  height: number;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ImgBox = styled.div<ImgBoxProps>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    flex-shrink: 0;
  `}
`;

export const Image = styled.img<ImageProps>`
  ${({ borderRadius }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${borderRadius}px;
    object-fit: cover;
  `}
`;
