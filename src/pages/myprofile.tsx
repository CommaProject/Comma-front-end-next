import { ProfileTemplate } from '@/components/template/profile/ProfileTemplate';
import { useState } from 'react';
import { useGetMyPlaylists } from '@/apis/playlist';
import { useGetFavoriteArtist } from '@/apis/favoriteArtists';
import { useGetFavoriteTrack } from '@/apis/favoritetrack';
import { useGetFollowInfo } from '@/apis/followInfo';
import { useGetUserDetail } from '@/apis/profile';

const Profile = () => {
  const { myPlaylist } = useGetMyPlaylists();
  const { favoriteArtist } = useGetFavoriteArtist();
  const { favoriteTrack } = useGetFavoriteTrack();
  const { followingInfo, followersInfo } = useGetFollowInfo();
  const [isProfileMine] = useState(true);
  const { nickName } = useGetUserDetail();
  return (
    <ProfileTemplate
      isProfileMine={isProfileMine}
      myPlaylist={myPlaylist}
      favoriteArtist={favoriteArtist}
      favoriteTrack={favoriteTrack}
      followingInfo={followingInfo}
      followersInfo={followersInfo}
      userNickName={nickName}
    />
  );
};

export default Profile;
