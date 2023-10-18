import { Dispatch, SetStateAction } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { MusicAlbumFrom } from '@/components/pages/quest/music-album-form';
import { ArtistAvataFrom } from '@/components/pages/quest/artist-avata-form';
import { ArtistDetailForm } from '@/components/pages/quest/artist-detail-from';
import { TopBar } from '@/components/pages/quest/top-bar';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { EnhancedTrackProps, TrackType } from '@/types/trackTypes';
import { CommaUserType } from '@/types/authTypes';
import { FavoriteArtistType } from '@/types/artistTypes';
import * as style from './SearchResultsTemplate.style';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface SearchResultsTemplateProps {
  isHidden: boolean;
  onSlideChange: (swiper: any) => void;
  category: string;
  completedTextValue: string;
  spotifyArtistForDetailArtist: SpotifyArtistProps | undefined;
  setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
  onClickRoundInput: () => void;
  onClickEraseButton: () => void;
  onClickCategory: (category: string) => void;
  onClickAlbumFavoriteButton: (trackId: string) => void;
  onClickArtistAvata: (artistData: SpotifyArtistProps) => void;
  onClickPrev: () => void;
  onClickAlbumBox: (previewUrl: string, trackId: string) => void;
  onClickFavoriteArtist: (artistId: string) => void;
  onClickPlusButton: (trackId: string) => void;
  spotifyArtistData: SpotifyArtistProps[] | undefined;
  spotifyTrackData: EnhancedTrackProps[];
  spotifyArtistDetailTrackData: EnhancedTrackProps[];
  commaUserData: CommaUserType[] | undefined;
  openMusicPlayer: string;
}

export const SearchResultsTemplate = ({
  isHidden,
  onSlideChange,
  category,
  completedTextValue,
  spotifyArtistForDetailArtist,
  spotifyArtistDetailTrackData,
  setSwiperRef,
  onClickRoundInput,
  onClickEraseButton,
  onClickCategory,
  onClickAlbumFavoriteButton,
  onClickArtistAvata,
  onClickPrev,
  onClickAlbumBox,
  onClickFavoriteArtist,
  onClickPlusButton,
  spotifyArtistData,
  spotifyTrackData,
  commaUserData,
  openMusicPlayer,
}: SearchResultsTemplateProps) => (
  <style.Wrapper>
    <TopBar
      onClickPrev={onClickPrev}
      completedTextValue={completedTextValue}
      onClickRoundInput={onClickRoundInput}
      onClickEraseButton={onClickEraseButton}
      onClickCategory={onClickCategory}
      category={category}
      isHidden={isHidden}
    />

    {category === 'music' && (
      <MusicAlbumFrom
        openMusicPlayer={openMusicPlayer}
        musicData={spotifyTrackData}
        onClickPlusButton={onClickPlusButton}
        onClickFavoriteButton={onClickAlbumFavoriteButton}
        onClickAlbumBox={onClickAlbumBox}
        isPreviewMusicPlayerHidden={false}
      />
    )}
    {category === 'artist' && (
      <style.CustomSwiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides
        noSwiping
        mousewheel={false}
        centerInsufficientSlides
        allowTouchMove={false}
        onSlideChange={onSlideChange}
      >
        <style.Slide>
          <ArtistAvataFrom
            artistData={spotifyArtistData}
            commaUserData={[]}
            onArtistAvataClick={onClickArtistAvata}
            onClickFavoriteArtistDetail={() => {}}
            favoriteArtistData={undefined}
          />
        </style.Slide>
        <style.Slide>
          <ArtistDetailForm
            onClickAlbumBox={onClickAlbumBox}
            openMusicPlayer={openMusicPlayer}
            soptifyArtistData={spotifyArtistForDetailArtist}
            spotifyTrackData={spotifyArtistDetailTrackData}
            onClickFavorite={onClickAlbumFavoriteButton}
            onClickFavoriteArtist={onClickFavoriteArtist}
            onClickPlusButton={onClickPlusButton}
          />
        </style.Slide>
      </style.CustomSwiper>
    )}
    {category === 'commaUser' && (
      <ArtistAvataFrom
        artistData={[]}
        commaUserData={commaUserData}
        onArtistAvataClick={() => {}}
        onClickFavoriteArtistDetail={() => {}}
        favoriteArtistData={undefined}
      />
    )}
  </style.Wrapper>
);
