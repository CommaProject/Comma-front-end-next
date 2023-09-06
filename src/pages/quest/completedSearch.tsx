import React, { useCallback, useEffect, useState } from 'react';
import { CompletedSearchTemplate } from '@/components/template/quest/completed-search';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { useUserInformation } from '~/src/hooks/useUserInformation';
import { Swiper as SwiperClass } from 'swiper/types';
import { SpotifyArtistProps } from '@/types/searchTypes';

const CompletedSearch = () => {
  const router = useRouter();
  const [slideStep, setSlideStep] = useState(0);
  const [switchActiveCategory, setSwitchActiveCategory] = useState(0);
  const [getSpotifyArtistForDetailArtist, setGetSpotifyArtistForDetailArtist] =
    useState<SpotifyArtistProps>();
  const [isHidden, setIsHidden] = useState(false); // false: Completed Search true: Detail
  const { searchText } = router.query;
  const {
    spotifyArtistData,
    spotifyTrackData,
    commaUserData,
    mutateArtist,
    mutateTrack,
    mutateCommaUser,
  } = useSearch();
  const { mutateSetTrackFavorite, getUserFavoritesData } = useUserInformation();
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handleSwiper = (swiper: SwiperClass) => {
    setSlideStep(swiper.realIndex);
  };

  const handleSwitchActiveCategory = (category: string) => {
    if (category === 'music') setSwitchActiveCategory(0);
    else if (category === 'artist') setSwitchActiveCategory(1);
    else if (category === 'commaUser') setSwitchActiveCategory(2);
  };

  const handleArtistAvata = useCallback(
    // Detail Artist
    (artistData: SpotifyArtistProps) => {
      mutateTrack(artistData.artistName);
      setGetSpotifyArtistForDetailArtist(artistData);
      setIsHidden(true);
      swiperRef?.slideNext();
    },
    [swiperRef],
  );

  const handlePrev = useCallback(() => {
    setIsHidden(false);
    if (swiperRef?.activeIndex === 0) {
      window.history.back();
    } else {
      swiperRef?.slidePrev();
    }
  }, [swiperRef]);

  useEffect(() => {
    if (typeof searchText === 'string') {
      if (switchActiveCategory === 0) {
        // Music
        mutateTrack(searchText);
      } else if (switchActiveCategory === 1) {
        // Artist
        mutateArtist(searchText);
      } else if (switchActiveCategory === 2) {
        // CommaUser
        mutateCommaUser(searchText);
      }
    }
  }, [searchText, switchActiveCategory]);

  return (
    <CompletedSearchTemplate
      onClickPrev={handlePrev}
      onSlideChange={handleSwiper}
      completedTextValue={
        typeof searchText === 'string' ? searchText : 'undefined'
      }
      onClickRoundInput={() => {
        router.push('/quest/search');
      }}
      onClickEraseButton={() => {
        router.push('/quest/search');
      }}
      onClickCategory={handleSwitchActiveCategory}
      switchActiveCategory={switchActiveCategory}
      onClickAlbumLikeButton={(trackId: string) => {
        mutateSetTrackFavorite(trackId);
      }}
      spotifyArtistData={spotifyArtistData}
      spotifyTrackData={spotifyTrackData}
      commaUserData={commaUserData}
      setSwiperRef={setSwiperRef}
      onClickArtistAvata={handleArtistAvata}
      spotifyArtistForDetailArtist={getSpotifyArtistForDetailArtist}
      isHidden={isHidden}
    />
  );
};

export default CompletedSearch;
