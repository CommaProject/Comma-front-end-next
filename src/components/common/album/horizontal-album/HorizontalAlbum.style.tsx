import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const SongName = styled.span`
  color: #0f0f0f;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
`;

export const SingerName = styled.span`
  color: #9c9c9c;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
`;

export const Timer = styled.span`
  color: #666;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  margin-top: 17px;
`;
