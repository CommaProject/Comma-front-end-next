import React, { useEffect, useState } from 'react';
import { CompletedSearchTemplate } from '@/components/template/quest/completed-search';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { useUserInformation } from '~/src/hooks/useUserInformation';

const CompletedSearch = () => {
  const router = useRouter();
  const [switchActiveCategory, setSwitchActiveCategory] = useState(0);
  const { searchText } = router.query;
  const {
    spotifyArtistData,
    spotifyTrackData,
    commaUserData,
    mutateArtist,
    mutateTrack,
    mutateCommaUser,
  } = useSearch();
  const { mutateSetTrackLike, getUserFavoritesData } = useUserInformation();

  const handleSwitchActiveCategory = (category: string) => {
    if (category === 'music') setSwitchActiveCategory(0);
    else if (category === 'artist') setSwitchActiveCategory(1);
    else if (category === 'commaUser') setSwitchActiveCategory(2);
  };

  useEffect(() => {
    if (typeof searchText === 'string') {
      if (switchActiveCategory === 0) {
        mutateTrack(searchText);
      } else if (switchActiveCategory === 1) {
        mutateArtist(searchText);
      } else if (switchActiveCategory === 2) {
        mutateCommaUser(searchText);
      }
    }
  }, [searchText, switchActiveCategory]);

  return (
    <CompletedSearchTemplate
      completedTextValue={typeof searchText === 'string' ? searchText : 'undefined'}
      onClickRoundInput={() => {
        router.push('/quest/search');
      } }
      onClickEraseButton={() => {
        router.push('/quest/search');
      } }
      onClickCategory={handleSwitchActiveCategory}
      switchActiveCategory={switchActiveCategory} 
      onClickAlbumLikeButton={(trackId: string) => {
        mutateSetTrackLike(trackId)
      }} 
      spotifyArtistData={spotifyArtistData} 
      spotifyTrackData={spotifyTrackData} 
      commaUserData={commaUserData}    />
  );
};

export default CompletedSearch;
