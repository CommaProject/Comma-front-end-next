import { Dispatch, SetStateAction } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { MusicAlbumFrom } from '@/components/pages/quest/music-album-form';
import { ArtistAvataFrom } from '@/components/pages/quest/artist-avata-form';
import { ArtistDetailForm } from '@/components/pages/quest/artist-detail-from';
import { TopBar } from '@/components/pages/quest/top-bar';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { TrackType } from '@/types/trackTypes';
import { CommaUserType } from '@/types/authTypes';
import * as style from './CompletedSearchTemplate.style';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface CompletedSearchTemplateProps {
  isHidden: boolean;
  onSlideChange: (swiper: any) => void;
  category: string;
  completedTextValue: string;
  spotifyArtistForDetailArtist: SpotifyArtistProps | undefined;
  setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
  onClickRoundInput: () => void;
  onClickEraseButton: () => void;
  onClickCategory: (category: string) => void;
  onClickAlbumLikeButton: (trackId: string) => void;
  onClickArtistAvata: (artistData: SpotifyArtistProps) => void;
  onClickPrev: () => void;
  spotifyArtistData: SpotifyArtistProps[] | undefined;
  spotifyTrackData: TrackType[] | undefined;
  spotifyArtistDetailTrackData: TrackType[] | undefined;
  commaUserData: CommaUserType[] | undefined;
}

export const CompletedSearchTemplate = ({
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
  onClickAlbumLikeButton,
  onClickArtistAvata,
  onClickPrev,
  spotifyArtistData,
  spotifyTrackData,
  commaUserData,
}: CompletedSearchTemplateProps) => (
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
        musicData={spotifyTrackData?.map((value) => ({
          ...value,
          isLike: false,
        }))}
        onClickPlusButton={() => {}}
        onClickLikeButton={(trackId: string) => {
          onClickAlbumLikeButton(trackId);
        }}
        onClick={() => {}}
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
            favoriteArtistData={[]}
            onArtistAvataClick={(value) => {
              onClickArtistAvata(value);
            }}
            onClickFavoriteArtistDetail={() => {}}
          />
        </style.Slide>
        <style.Slide>
          <ArtistDetailForm
            artistImage={
              spotifyArtistForDetailArtist
                ? spotifyArtistForDetailArtist.images[2].url
                : ''
            }
            artistName={
              spotifyArtistForDetailArtist
                ? spotifyArtistForDetailArtist.artistName
                : ''
            }
            spotifyTrackData={spotifyTrackData}
            isLike
          />
        </style.Slide>
      </style.CustomSwiper>
    )}
    {category === 'commaUser' && (
      <ArtistAvataFrom
        artistData={[]}
        commaUserData={commaUserData}
        favoriteArtistData={[]}
        onArtistAvataClick={() => {}}
        onClickFavoriteArtistDetail={() => {}}
      />
    )}
  </style.Wrapper>
);
