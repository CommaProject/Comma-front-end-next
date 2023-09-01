import * as style from '@/components/template/profile/ProfileTemplate.style';
import { PlaylistRepAlbumWithNum } from '../../common/playlist-rep-album-with-num';
import { VerticalAlbum } from '../../common/album/vertical-album';
import { VerticalAvata } from '../../common/avata';
import { useState } from 'react';
import { useAllPlaylists } from '@/hooks/usePlaylist';
import { PlaylistType } from '@/constants/types/playlistTypes';

interface ProfileTemplateProps {
    isProfileMine: boolean;
    playlist : PlaylistType[];
}
export const ProfileTemplate = (
    {isProfileMine,
    playlist
   }:ProfileTemplateProps) => {
  // 팔로우,팔로잉 조회 api
  // 유저 정보 api
  const followCount = {
    followings: 1,
    follwers: 2,
  };
  // 유저 정보 api
  // 마이플레이리스트 api
  // favorite 두가지 요청 api
  // 실제로는 팔로우 되어있나에 따라 isFollow 초기상태 결정
  const[isFollow,setIsFollow] = useState(true);
  const HandleFollowButton = () => {
    setIsFollow(!isFollow)
  }
  // 페이지 이동 관련 함수 
  const { navigateToAllPlaylists } = useAllPlaylists();
  const onClickMyPlaylist = () =>{
    navigateToAllPlaylists();
}
  

  return (
    <style.Wrapper>
      <style.TopBar>
        {isProfileMine? <style.SettingButton /> : ""}
      </style.TopBar>

      <style.UserInfo>
        <style.Profile />
        {isProfileMine === false?
         <style.FollowButton 
          isFollow={isFollow}
          onClick={HandleFollowButton}> {isFollow?'팔로우':'팔로잉'}</style.FollowButton>:"" }
        <style.FollowInfo>
           UserName
          <style.FollowContainer>
          <style.FollowNum>
            {followCount.followings} <br />
            followings
          </style.FollowNum>
          <style.FollowNum>
            {followCount.follwers} <br />
            followers
          </style.FollowNum>
          </style.FollowContainer>
        </style.FollowInfo>
      </style.UserInfo>
      <style.MyPlaylist>
        <style.Title onClick={onClickMyPlaylist} >My Playlist</style.Title>
        <style.ListContainer>
        {playlist &&
          playlist.map((playlist: PlaylistType) => (
            <PlaylistRepAlbumWithNum 
            key = {playlist.playlistId}
                playlistId = {playlist.playlistId}
                repAlbumImageUrl = {playlist.repAlbumImageUrl}
                trackCount = {playlist.trackCount}
                />
          ))}
          
          <style.AddButton />
        </style.ListContainer>
      </style.MyPlaylist>
      <style.Archive>
        <style.Title>Archive</style.Title>
        <style.FavoriteSong>
          <style.Text> Favorite </style.Text>
          <style.ListContainer>
            <VerticalAlbum
              imgUrl="w"
              songName="songName"
              singerName="singerName"
              onClick={() => console.log('d')}
            />
          </style.ListContainer>
        </style.FavoriteSong>
        <style.FavoriteSinger>
          <style.Text> Favorite</style.Text>
          <style.ListContainer>
            <VerticalAvata
             avatarImage=""
             avartarName="가수"
             onClick={() => console.log('d')}/>
          </style.ListContainer>
        </style.FavoriteSinger>
        <style.Calender>
          <style.Text> Calender </style.Text>
        </style.Calender>
      </style.Archive>
    </style.Wrapper>
  );
};
