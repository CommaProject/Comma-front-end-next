import styled, { css } from 'styled-components';
import addPlaylist from '@/assets/images/addPlaylist.svg';
export const Wrapper = styled.div`
  width: 390px;
  height: calc(100vh - 79px);
  display: flex;
  flex-direction: column;

  position: fixed; /* Fix the container to the top */
  top: 0;

  border: 1px solid red;
`;

export const UserInfo = styled.div`
`

export const Profile  = styled.div`
`
export const FollowInfo  = styled.div`
`
export const MyPlaylist  = styled.div`
`
export const Archive  = styled.div`
`
export const FavoriteSong  = styled.div`
`
export const AddButton =styled(addPlaylist)`
  
margin: 10px 20px 10px 10px;


`;

export const FavoriteSinger = styled.div`
`
