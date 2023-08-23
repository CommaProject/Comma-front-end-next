import { Dispatch, SetStateAction } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { MusicAlbumFrom } from '@/components/pages/quest/music-album-form';
import { ArtistAvataFrom } from '@/components/pages/quest/artist-avata-form';
import {
  getCommaUserProps,
  getSpotifyArtistProps,
  getTrackProps,
} from '@/apis/search';
import { ArtistDetailForm } from '@/components/pages/quest/artist-detail-from';
import { TopBar } from '@/components/pages/quest/top-bar';

import * as style from './CompletedSearchTemplate.style';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface CompletedSearchTemplateProps {
  isHidden: boolean;
  onSlideChange: (swiper: any) => void;
  completedTextValue: string;
  spotifyArtistForDetailArtist: getSpotifyArtistProps | undefined;
  setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
  onClickRoundInput: () => void;
  onClickEraseButton: () => void;
  onClickCategory: (category: string) => void;
  onClickAlbumLikeButton: (trackId: string) => void;
  onClickArtistAvata: (artistData: getSpotifyArtistProps) => void;
  onClickPrev: () => void;
  switchActiveCategory: number;
  spotifyArtistData: getSpotifyArtistProps[] | undefined;
  spotifyTrackData: getTrackProps[] | undefined;
  commaUserData: getCommaUserProps[] | undefined;
}

export const CompletedSearchTemplate = ({
  isHidden,
  onSlideChange,
  completedTextValue,
  spotifyArtistForDetailArtist,
  setSwiperRef,
  onClickRoundInput,
  onClickEraseButton,
  onClickCategory,
  onClickAlbumLikeButton,
  onClickArtistAvata,
  onClickPrev,
  switchActiveCategory,
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
      switchActiveCategory={switchActiveCategory}
      isHidden={isHidden}
    />

    {switchActiveCategory === 0 && (
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
    {switchActiveCategory === 1 && (
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
            onArtistAvataClick={(value) => {
              onClickArtistAvata(value);
            }}
          />
        </style.Slide>
        <style.Slide>
          <ArtistDetailForm
            soptifyArtistData={spotifyArtistForDetailArtist}
            spotifyTrackData={spotifyTrackData}
            isLike={false}
          />
        </style.Slide>
      </style.CustomSwiper>
    )}
    {switchActiveCategory === 2 && (
      <ArtistAvataFrom
        artistData={[]}
        commaUserData={commaUserData}
        onArtistAvataClick={() => {}}
      />
    )}
  </style.Wrapper>
);
