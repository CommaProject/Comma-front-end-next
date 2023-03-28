import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
