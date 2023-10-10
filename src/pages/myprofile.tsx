import { ProfileTemplate } from '@/components/template/profile/ProfileTemplate';
import { useState } from 'react';
import { useGetMyPlaylists } from '@/apis/playlist';
import { useFavoriteArtist, useFavoriteTrack } from '@/hooks/useFavorite';
import { useGetFollowInfo } from '@/hooks/useFollowInfo';
import { useGetUserDetail } from '@/apis/profile';

const Profile = () => {
  const { myPlaylist } = useGetMyPlaylists();
  const { favoriteArtist } = useFavoriteArtist();
  const { favoriteTrack } = useFavoriteTrack();
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
