import React, { useCallback, useEffect, useState } from 'react';
import { CompletedSearchTemplate } from '@/components/template/quest/completed-search';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { useUserInformation } from '~/src/hooks/useUserInformation';
import { Swiper as SwiperClass } from 'swiper/types';
import { getSpotifyArtistProps } from '~/src/apis/search';

const CompletedSearch = () => {
  const router = useRouter();
  const [slideStep, setSlideStep] = useState(0);
  const [switchActiveCategory, setSwitchActiveCategory] = useState(0);
  const [getSpotifyArtistForDetailArtist, setGetSpotifyArtistForDetailArtist] =
    useState<getSpotifyArtistProps>();
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
    (value: getSpotifyArtistProps) => {
      setGetSpotifyArtistForDetailArtist(value);
      swiperRef?.slideNext();
    },
    [swiperRef],
  );
  // const handleArtistAvata = (value: getSpotifyArtistProps) => {
  //   setGetSpotifyArtistForDetailArtist(value);
  //   swiperRef?.slideNext();
  // };

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
      slideStep={slideStep}
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
        mutateSetTrackLike(trackId);
      }}
      spotifyArtistData={spotifyArtistData}
      spotifyTrackData={spotifyTrackData}
      commaUserData={commaUserData}
      setSwiperRef={setSwiperRef}
      onClickArtistAvata={handleArtistAvata}
      spotifyArtistForDetailArtist={getSpotifyArtistForDetailArtist}
    />
  );
};

export default CompletedSearch;
