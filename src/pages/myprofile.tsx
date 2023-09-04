import { ProfileTemplate } from '@/components/template/profile/ProfileTemplate';
import { useState } from 'react';
import { useGetMyPlaylists } from '../apis/playlist';
import { useGetFavoriteArtist } from '../apis/favoriteArtists';
import { useGetFavoriteTrack } from '../apis/favoritetrack';
import { useGetFollowInfo } from '../apis/follow';

const Profile = () => {
  const { myPlaylist } = useGetMyPlaylists();
  const { favoriteArtist } = useGetFavoriteArtist();
  const { favoriteTrack } = useGetFavoriteTrack();
  const { followingInfo, followersInfo } = useGetFollowInfo();
  const [isProfileMine] = useState(true);
  return (
    <ProfileTemplate
      isProfileMine={isProfileMine}
      myPlaylist={myPlaylist}
      favoriteArtist={favoriteArtist}
      favoriteTrack={favoriteTrack}
      followingInfo={followingInfo}
      followersInfo={followersInfo}
    />
  );
};

export default Profile;
