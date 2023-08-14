import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  width: 89px;
  height: 89px;
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 89px;
`;

export const SingerName = styled.text`
  margin-top: 5px;
  color: #0f0f0f;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
`;

export const SingerSubName = styled.text`
  color: #666;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
