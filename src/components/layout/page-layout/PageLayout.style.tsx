import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > .content {
    height: calc(100vh - 79px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
