import { Dispatch, SetStateAction } from 'react';
import { RoundInput } from '@/components/common/round-input';
import { Swiper as SwiperClass } from 'swiper/types';
// eslint-disable-next-line import/no-unresolved
import PrevIcon from '@/assets/images/PrevArrow.svg';
import { MusicAlbumFrom } from '@/components/pages/quest/music-album-form';
import { ArtistAvataFrom } from '@/components/pages/quest/artist-avata-form';
import {
  getCommaUserProps,
  getSpotifyArtistProps,
  getTrackProps,
} from '@/apis/search';
import { ArtistDetailForm } from '@/components/pages/quest/artist-detail-from';
import * as style from './CompletedSearchTemplate.style';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface CompletedSearchTemplateProps {
  slideStep: number;
  onSlideChange: (swiper: any) => void;
  completedTextValue: string;
  spotifyArtistForDetailArtist: getSpotifyArtistProps | undefined;
  setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
  onClickRoundInput: () => void;
  onClickEraseButton: () => void;
  onClickCategory: (category: string) => void;
  onClickAlbumLikeButton: (trackId: string) => void;
  onClickArtistAvata: (artistData: getSpotifyArtistProps) => void;
  switchActiveCategory: number;
  spotifyArtistData: getSpotifyArtistProps[] | undefined;
  spotifyTrackData: getTrackProps[] | undefined;
  commaUserData: getCommaUserProps[] | undefined;
}

export const CompletedSearchTemplate = ({
  slideStep,
  onSlideChange,
  completedTextValue,
  spotifyArtistForDetailArtist,
  setSwiperRef,
  onClickRoundInput,
  onClickEraseButton,
  onClickCategory,
  onClickAlbumLikeButton,
  onClickArtistAvata,
  switchActiveCategory,
  spotifyArtistData,
  spotifyTrackData,
  commaUserData,
}: CompletedSearchTemplateProps) => (
  <style.Wrapper>
    <style.StickySections>
      <style.TopBox>
        <PrevIcon />
        <RoundInput
          completedTextValue={completedTextValue}
          onClickRoundInput={onClickRoundInput}
          handleEraseIconClick={onClickEraseButton}
          isCompletedSearch
        />
      </style.TopBox>
      <style.ButtonBox>
        <style.Button
          isActivate={switchActiveCategory === 0}
          onClick={() => onClickCategory('music')}
        >
          음악
        </style.Button>
        <style.Button
          isActivate={switchActiveCategory === 1}
          onClick={() => onClickCategory('artist')}
        >
          가수
        </style.Button>
        <style.Button
          isActivate={switchActiveCategory === 2}
          onClick={() => onClickCategory('commaUser')}
        >
          사용자
        </style.Button>
      </style.ButtonBox>
    </style.StickySections>
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
