import React, { useCallback, useEffect, useState } from 'react';
import {
  PlusModal,
  SearchResultsTemplate,
} from '@/components/template/quest/search-results';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { Swiper as SwiperClass } from 'swiper/types';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { useAtom } from 'jotai';
import { searchAtom } from '@/stores/atoms';
import { EnhancedTrackProps } from '@/types/trackTypes';
import { useFavoriteArtist, useFavoriteTrack } from '@/hooks/useFavorite';
import useModal from '@/hooks/useModal';
import {
  getPlaylistAllTracksAsync,
  useGetCommaPlaylists,
} from '@/apis/playlist';
import {
  usePlaylistTrack,
  useAllPlaylists,
  usePlaylist,
} from '@/hooks/usePlaylist';

const SearchResults = () => {
  const router = useRouter();
  const [slideStep, setSlideStep] = useState(0);
  const [getSpotifyArtistForDetailArtist, setGetSpotifyArtistForDetailArtist] =
    useState<SpotifyArtistProps>();
  const [isHidden, setIsHidden] = useState(false); // false: Completed Search true: Detail
  const [searchItems, setSearchItems] = useAtom(searchAtom);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [openMusicPlayer, setOpenMusicPlayer] = useState('');
  const [playlistIdList, setPlaylistIdList] = useState<number[]>([]);
  const [
    spotifyArtistDetailTrackDataWithFavorite,
    setSpotifyArtistDetailTrackDataWithFavorite,
  ] = useState<EnhancedTrackProps[]>([]);
  const [spotifyArtistDataWithFavorite, setSpotifyArtistDataWithFavorite] =
    useState<EnhancedTrackProps[]>([]);

  const { openModal, closeModal } = useModal();
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
  const { favoriteTrackIds, deleteTrackMutate, addFavoriteTrackMutate } =
    useFavoriteTrack();
  const { addFavoriteArtistMutate } = useFavoriteArtist();
  const { isPlaylistAvailable, isCommaPlaylistAvailable, commaPlaylist } =
    useGetCommaPlaylists();
  const { myPlaylist } = usePlaylist();
  const {
    mutateAddPlaylistTrack,
    // mutateGetPlaylistAllTracks,
    // PlaylistAllTracksData,
  } = usePlaylistTrack();

  // Get Tracks From Playlist
  // useEffect(() => {
  //   mutateGetPlaylistAllTracks(1);
  // }, []);
  // useEffect(() => {
  //   console.log('PlaylistAllTracksData', PlaylistAllTracksData);
  // }, [PlaylistAllTracksData]);
  useEffect(() => {
    // getPlaylistAllTracksAsync(1);
    console.log('commaPlaylist', commaPlaylist);
  }, []);
  // Track Favorite
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
        isFavorite: Object.keys(favoriteTrackIds)?.includes(track.trackId),
      }));

      setSpotifyArtistDataWithFavorite(spotifyArtistDataWithFavorite1);
    }
  }, [spotifyTrackData, favoriteTrackIds]);

  // Artist Favorite
  useEffect(() => {});

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

  // 기존에 있던 Track 조회해서 존재여부 파악 해야댐

  const EnhancedPlaylist = commaPlaylist.map((playlist) => ({
    ...playlist,
    isPlaylist: playlistIdList.includes(playlist.playlistId),
  }));

  const handlePlusTrack = useCallback(
    (spotifyTrackId: string) => {
      openModal(
        <PlusModal
          myPlayList={EnhancedPlaylist}
          onClickPlaylist={(playlistId) => {
            setPlaylistIdList([playlistId]);
            console.log(playlistId);
          }}
        />,
        () => {
          commaPlaylist.map((playlist) => {
            console.log(playlist);
            // mutateAddPlaylistTrack({ playlistIdList, spotifyTrackId });

            return null;
          });
        },
      );
    },
    [myPlaylist],
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
      onClickAlbumFavoriteButton={(spotifyTrackId: string) => {
        if (Object.keys(favoriteTrackIds).includes(spotifyTrackId))
          deleteTrackMutate(favoriteTrackIds[spotifyTrackId]);
        else addFavoriteTrackMutate(spotifyTrackId);
      }}
      onClickFavoriteArtist={(artistId) => {
        addFavoriteArtistMutate(artistId);
      }}
      onClickPlusButton={handlePlusTrack}
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
