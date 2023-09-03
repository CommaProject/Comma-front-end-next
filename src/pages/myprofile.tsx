import { ProfileTemplate } from '@/components/template/profile/ProfileTemplate';
import { useState } from 'react';
import { useGetMultiplePlaylists } from '../apis/playlist';
import { useGetFavoriteArtist } from '../apis/favoriteArtists';
import { useGetFavoriteTrack } from '../apis/favoritetrack';
import { useGetFollowInfo } from '../apis/follow';

const Profile = () => {
  const { playlist } = useGetMultiplePlaylists();
  const { favoriteArtist } = useGetFavoriteArtist();
  const { favoriteTrack } = useGetFavoriteTrack();
  const { followingInfo, followersInfo } = useGetFollowInfo();
  const [isProfileMine] = useState(true);
  return (
    <ProfileTemplate
      isProfileMine={isProfileMine}
      playlist={playlist}
      favoriteArtist={favoriteArtist}
      favoriteTrack={favoriteTrack}
      followingInfo={followingInfo}
      followersInfo={followersInfo}
    />
  );
};

export default Profile;
