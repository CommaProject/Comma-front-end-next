import * as style from '@/components/template/profile/ProfileTemplate.style';
import { useState } from 'react';
import { useAllPlaylists } from '@/hooks/usePlaylist';
import { PlaylistType } from '@/constants/types/playlistTypes';
import { FavoriteArtistType } from '@/constants/types/artistTypes';
import { TrackFavoritesType } from '@/constants/types/trackTypes';
import { VerticalAvata } from '../../common/avata';
import { VerticalAlbum } from '../../common/album/vertical-album';
import { PlaylistRepAlbumWithNum } from '../../common/playlist-rep-album-with-num';
import { useRouter } from 'next/router';
import useModal from '@/hooks/useModal';
import { UserDetailType } from '@/constants/types/userDetailTypes';

interface ProfileTemplateProps {
  isProfileMine: boolean;
  myPlaylist: PlaylistType[];
  favoriteArtist: FavoriteArtistType[];
  favoriteTrack: TrackFavoritesType[];
  followersInfo: number;
  followingInfo: number;
  userNickName: null | string;
}
export const ProfileTemplate = ({
  isProfileMine,
  myPlaylist,
  favoriteArtist,
  favoriteTrack,
  followersInfo,
  followingInfo,
  userNickName
}: ProfileTemplateProps) => {
  // 팔로우,팔로잉 조회 api

  // 유저 정보 api
  // 마이플레이리스트 api
  // favorite 두가지 요청 api
  // 실제로는 팔로우 되어있나에 따라 isFollow 초기상태 결정
  const [isFollow, setIsFollow] = useState(true);
  const HandleFollowButton = () => {
    setIsFollow(!isFollow);
  };
  // 페이지 이동 관련 함수
  const { navigateToAllPlaylists } = useAllPlaylists();
  const onClickMyPlaylist = () => {
    navigateToAllPlaylists();
  };

  const router = useRouter();
  const onClickFavoriteArtists = () => {
    router.push(`../myartist`);
  };
  const onClickFollow = (followingsOrFollower: string) => {
    if (followingsOrFollower === 'followers') {
      router.push(`../followers`);
    } else {
      router.push(`../following`);
    }
  };
  const { openModal, closeModal } = useModal();
  const onClickSettingButton = () => {
    console.log('클릭')
    openModal(
      <style.ModalContainer>
        <style.Modal>
          <style.Button onClick={closeModal}/>
          <style.ModalText>
            <style.Img/>프로필 편집</style.ModalText>
          <style.ModalText>
          <style.Img/>계정</style.ModalText>
        </style.Modal>
      </style.ModalContainer>
    );
    }
  return (
    <style.Wrapper>
      <style.TopBar >
        {isProfileMine ? (
          <style.SettingButton onClick={onClickSettingButton} />
        ) : (
          ''
        )}
      </style.TopBar>

      <style.UserInfo>
        <style.Profile />
        {isProfileMine === false ? (
          <style.FollowButton isFollow={isFollow} onClick={HandleFollowButton}>
            {' '}
            {isFollow ? '팔로우' : '팔로잉'}
          </style.FollowButton>
        ) : (
          ''
        )}
        <style.FollowInfo>
         {userNickName}
          <style.FollowContainer>
            <style.FollowNum onClick={() => onClickFollow('following')}>
              {followingInfo} <br />
              following
            </style.FollowNum>
            <style.FollowNum onClick={() => onClickFollow('followers')}>
              {followersInfo} <br />
              followers
            </style.FollowNum>
          </style.FollowContainer>
        </style.FollowInfo>
      </style.UserInfo>
      <style.MyPlaylist>
        <style.Title onClick={onClickMyPlaylist}>My Playlist</style.Title>
        <style.ListContainer>
          {myPlaylist &&
            myPlaylist.map((playlist: PlaylistType) => (
              <PlaylistRepAlbumWithNum
                key={playlist.playlistId}
                playlistId={playlist.playlistId}
                repAlbumImageUrl={playlist.repAlbumImageUrl}
                trackCount={playlist.trackCount}
              />
            ))}

          <style.AddButton />
        </style.ListContainer>
      </style.MyPlaylist>
      <style.Archive>
        <style.Title>Archive</style.Title>
        <style.FavoriteSong>
          <style.Text> Favorite Tracks </style.Text>
          <style.ListContainer>
            {favoriteTrack &&
              favoriteTrack.map((track: TrackFavoritesType) => (
                <VerticalAlbum
                  key={track.trackId}
                  imgUrl={track.albumImageUrl}
                  songName={track.trackTitle}
                  singerName={track.trackArtistList[0].artistName}
                  onClick={() => {}}
                />
              ))}
          </style.ListContainer>
        </style.FavoriteSong>
        <style.FavoriteSinger>
          <style.Text onClick={onClickFavoriteArtists}>
            {' '}
            Favorite Artists
          </style.Text>
          <style.ListContainer>
            {favoriteArtist &&
              favoriteArtist.map((artist: FavoriteArtistType) => (
                <VerticalAvata
                  key={artist.favoriteArtistId}
                  avatarImage={artist.artistImageUrl}
                  avartarName={artist.artistName}
                  onClick={() => console.log(artist.artistName, '클릭')}
                />
              ))}
          </style.ListContainer>
        </style.FavoriteSinger>
        <style.Calender>
          <style.Text> Calender </style.Text>
        </style.Calender>
      </style.Archive>
    </style.Wrapper>
  );
};
