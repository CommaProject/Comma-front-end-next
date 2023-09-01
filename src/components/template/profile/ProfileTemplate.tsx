import * as style from '@/components/template/profile/ProfileTemplate.style';
import { PlaylistRepAlbumWithNum } from '../../common/playlist-rep-album-with-num';
import { VerticalAlbum } from '../../common/album/vertical-album';
export const ProfileTemplate = () => {
  // 팔로우,팔로잉 조회 api
  // 유저 정보 api
  const followCount = {
    followings: 1,
    follwers: 2,
  };
  // 유저 정보 api
  // 마이플레이리스트 api
  // favorite 두가지 요청 api
  return (
    <style.Wrapper>
      <style.TopBar>
        <style.SettingButton />
      </style.TopBar>

      <style.UserInfo>
        <style.Profile />

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
        <style.Title>My Playlist</style.Title>
        <style.ListContainer>
          <PlaylistRepAlbumWithNum />
          <PlaylistRepAlbumWithNum />
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
          <style.ListContainer></style.ListContainer>
        </style.FavoriteSinger>
        <style.Calender>
          <style.Text> Calender </style.Text>
        </style.Calender>
      </style.Archive>
    </style.Wrapper>
  );
};
