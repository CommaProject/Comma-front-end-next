import React, { useCallback, useEffect, useState } from 'react';
import { SearchResultsTemplate } from '~/src/components/template/quest/search-results';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { useUserInformation } from '@/hooks/useUserInformation';
import { Swiper as SwiperClass } from 'swiper/types';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { useAtom } from 'jotai';
import { searchAtom } from '@/stores/atoms';

const SearchResults = () => {
  const router = useRouter();
  const [slideStep, setSlideStep] = useState(0);
  const [getSpotifyArtistForDetailArtist, setGetSpotifyArtistForDetailArtist] =
    useState<SpotifyArtistProps>();
  const [isHidden, setIsHidden] = useState(false); // false: Completed Search true: Detail
  const [searchItems, setSearchItems] = useAtom(searchAtom);
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
    setSearchItems((prevState) => ({
      ...prevState,
      category,
    }));
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
    if (searchItems.category === 'music') {
      mutateTrack(searchItems.searchText);
    } else if (searchItems.category === 'artist') {
      mutateArtist(searchItems.searchText);
    } else if (searchItems.category === 'commaUser') {
      mutateCommaUser(searchItems.searchText);
    }
  }, [searchItems.searchText, searchItems.category]);

  return (
    <SearchResultsTemplate
      onClickPrev={handlePrev}
      onSlideChange={handleSwiper}
      completedTextValue={searchItems.searchText}
      onClickRoundInput={() => {
        router.push('/quest/search');
      }}
      onClickEraseButton={() => {
        router.push('/quest/search');
      }}
      onClickCategory={handleSwitchActiveCategory}
      category={searchItems.category}
      onClickAlbumLikeButton={(trackId: string) => {
        mutateSetTrackLike(trackId);
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

export default SearchResults;
