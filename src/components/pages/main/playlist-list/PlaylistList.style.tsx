import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const Album = styled.div`
  width: 109px;
  height: 83px;

  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  // 이건 아직 데이터를 못받아와서 확인용으로 해놓은 겁니다!
  background-color: #e5e5e5;
  border: 1px solid #000;
`;
