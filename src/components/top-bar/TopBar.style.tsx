import styled from 'styled-components';

export const TopBarContainer = styled.div`
  width: 390px;
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  border-bottom: 1px solid #0f0f0f1a;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PrevBtn = styled.button`
  width: 45px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NextBtn = styled.button`
  width: 45px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #ff6442;
`;
