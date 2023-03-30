import styled from 'styled-components';

export const Container = styled.div`
  height: 4px;
  width: 100%;
  position: relative;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 500ms ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: #0f0f0f1a;
  width: 100%;
`;

export const Progress = styled(BaseBox)<{ percent: number }>`
  background: #5a90ff;
  width: ${({ percent }) => percent}%;
`;
