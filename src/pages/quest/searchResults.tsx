import React, { useCallback, useEffect, useState } from 'react';
import { SearchResultsTemplate } from '~/src/components/template/quest/search-results';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { useUserInformation } from '@/hooks/useUserInformation';
import { Swiper as SwiperClass } from 'swiper/types';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { useAtom } from 'jotai';
import { searchAtom } from '@/stores/atoms';
import { EnhancedTrackProps } from '@/types/trackTypes';
import { useGetFavoriteTrack } from '@/hooks/useFavorite';

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
    spotifyArtistDetailTrackData,
    setSpotifyArtistDetailTrackData,
    commaUserData,
    mutateArtist,
    mutateTrack,
    mutateCommaUser,
    mutateArtistDetailTrack,
  } = useSearch();
  const { useMutationUserTrackFavorite, useMutationUserArtistFavorite } =
    useUserInformation();
  const { favoriteTrackIds } = useGetFavoriteTrack();

  const [
    spotifyArtistDetailTrackDataWithFavorite,
    setSpotifyArtistDetailTrackDataWithFavorite,
  ] = useState<EnhancedTrackProps[]>([]);

  const [spotifyArtistDataWithFavorite, setSpotifyArtistDataWithFavorite] =
    useState<EnhancedTrackProps[]>([]);

  useEffect(() => {
    if (spotifyArtistDetailTrackData && favoriteTrackIds) {
      const spotifyArtistDetailTrackDataWithFavorite1 =
        spotifyArtistDetailTrackData.map((track) => ({
          ...track,
          isFavorite: favoriteTrackIds?.includes(track.trackId),
        }));

      setSpotifyArtistDetailTrackDataWithFavorite(
        spotifyArtistDetailTrackDataWithFavorite1,
      );
    }
  }, [spotifyArtistDetailTrackData]);

  useEffect(() => {
    if (spotifyTrackData && favoriteTrackIds) {
      const spotifyArtistDataWithFavorite1 = spotifyTrackData?.map((track) => ({
        ...track,
        isFavorite: favoriteTrackIds?.includes(track.trackId),
      }));

      setSpotifyArtistDataWithFavorite(spotifyArtistDataWithFavorite1);
    }
  }, [spotifyTrackData]);

  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [openMusicPlayer, setOpenMusicPlayer] = useState('');
  const handleSwiper = (swiper: SwiperClass) => {
    setSlideStep(swiper.realIndex);
  };

  const handleSwitchActiveCategory = (category: string) => {
    setSearchItems((prevState) => ({
      ...prevState,
      category,
    }));
  };

  const handleArtistDetailTrack = useCallback(
    // Detail Artist
    (artistData: SpotifyArtistProps) => {
      mutateArtistDetailTrack(artistData.artistName);
      setGetSpotifyArtistForDetailArtist(artistData);
      setIsHidden(true);
      swiperRef?.slideNext();
    },
    [swiperRef],
  );

  const handlePrev = useCallback(() => {
    setIsHidden(false);
    if (swiperRef?.activeIndex === 0 || swiperRef?.activeIndex === undefined) {
      window.history.back();
    } else {
      swiperRef?.slidePrev();
      setSpotifyArtistDetailTrackData([]);
    }
  }, [swiperRef]);

  const handleOpenPreviewMusicPlayer = useCallback(
    (previewUrl: string, trackId: string) => {
      console.log(previewUrl);
      setOpenMusicPlayer(trackId);
    },
    [],
  );

  useEffect(() => {
    if (searchItems.category === 'music' && spotifyTrackData === undefined) {
      mutateTrack(searchItems.searchText);
    } else if (
      searchItems.category === 'artist' &&
      spotifyArtistData === undefined
    ) {
      mutateArtist(searchItems.searchText);
    } else if (
      searchItems.category === 'commaUser' &&
      commaUserData === undefined
    ) {
      mutateCommaUser(searchItems.searchText);
    }
  }, [searchItems.searchText, searchItems.category]);

  return (
    <SearchResultsTemplate
      openMusicPlayer={openMusicPlayer}
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
      onClickAlbumBox={handleOpenPreviewMusicPlayer}
      category={searchItems.category}
      onClickAlbumLikeButton={(trackId: string) => {
        useMutationUserTrackFavorite.mutate(trackId);
      }}
      onClickFavoriteArtist={(artistId) => {
        useMutationUserArtistFavorite.mutate(artistId);
      }}
      spotifyArtistData={spotifyArtistData}
      spotifyTrackData={spotifyArtistDataWithFavorite}
      spotifyArtistDetailTrackData={spotifyArtistDetailTrackDataWithFavorite}
      commaUserData={commaUserData}
      setSwiperRef={setSwiperRef}
      onClickArtistAvata={handleArtistDetailTrack}
      spotifyArtistForDetailArtist={getSpotifyArtistForDetailArtist}
      isHidden={isHidden}
    />
  );
};

export default SearchResults;
