import { Dispatch, SetStateAction } from 'react';
import { RoundInput } from '@/components/common/round-input';
import { Swiper as SwiperClass } from 'swiper/types';
import { SwiperAlbum } from '@/components/pages/quest/swiper-album';
import { TrackFavoritesType, TrackPlayCountType } from '@/types/trackTypes';
import { TracksRecommendData } from '@/types/recommendType';
import {
  HighlyRecommendedTracks,
  MyFavoriteTracks,
  MyMostListenedTracks,
} from '@/components/pages/quest/free-sider-album-form';

import { SeeMoreSlideProps, SeeMoreSlideWithFavoriteProps } from '@/pages/quest';
import { convertTimerToMinSec } from '@/utils/formatTime';
import { HorizontalAlbumWithIcon } from '@/components/pages/quest/horizontal-album-with-icon';
import * as style from './QuestTemplate.style';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface QuestTemplateProps {
  seeMoreTitle: string;
  seeMoreData: SeeMoreSlideWithFavoriteProps[];
  slideStep: number;
  onClickRoundInput: () => void;
  setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
  onSlideChange: (swiper: any) => void;
  onClickNextSlider: (title: string, data: SeeMoreSlideProps[]) => void;
  onClickPrevButton: () => void;
  onClickFavorite: (trackId: string) => void;
  myMostListenedTracks: TrackPlayCountType[];
  myFavoriteTracks: TrackFavoritesType[];
  highlyRecommendedTracks: TracksRecommendData[];
  friendsTrackPlayCountData: TrackPlayCountType[];
}

export const QuestTemplate = ({
  seeMoreTitle,
  seeMoreData,
  slideStep,
  onClickRoundInput,
  setSwiperRef,
  onSlideChange,
  onClickNextSlider,
  onClickPrevButton,
  onClickFavorite,
  myMostListenedTracks,
  friendsTrackPlayCountData,
  myFavoriteTracks,
  highlyRecommendedTracks,
}: QuestTemplateProps) => (
  <style.Wrapper>
    {slideStep === 1 ? (
      <style.TopBar>
        <style.PrevIcon onClick={onClickPrevButton} />
        <style.Title>{seeMoreTitle}</style.Title>
      </style.TopBar>
    ) : (
      <RoundInput
        completedTextValue=""
        onClickRoundInput={onClickRoundInput}
        handleEraseIconClick={() => { }}
        isSearchResults={false}
        isHidden={false}
      />
    )}
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
        <style.FriendsMostListenedTrackTitle>
          친구가 가장 많이 들은 곡
        </style.FriendsMostListenedTrackTitle>
        <SwiperAlbum friendsTrackPlayCountData={friendsTrackPlayCountData} />
        <MyMostListenedTracks
          myMostListenedTracks={myMostListenedTracks}
          onClickNextSlider={onClickNextSlider}
        />
        <MyFavoriteTracks
          myFavoriteTracks={myFavoriteTracks}
          onClickNextSlider={onClickNextSlider}
        />
        <HighlyRecommendedTracks
          highlyRecommendedTracks={highlyRecommendedTracks}
          onClickNextSlider={onClickNextSlider}
        />
      </style.Slide>
      <style.Slide>
        <style.Wrapper>
          {
            seeMoreData.map((album) => {
              const { minutes, seconds } = convertTimerToMinSec(album.timer);

              return (
                <HorizontalAlbumWithIcon
                  key={album.trackId}
                  onClickPlusButton={() => { }}
                  onClickFavoriteButton={() => { onClickFavorite(album.trackId) }}
                  isFavorite={album.isFavorite ? album.isFavorite : false}
                  timer={`${String(minutes)}m ${String(seconds)}s`}
                  onClick={() => { }}
                  imgUrl={album.imgUrl}
                  songName={album.songName}
                  singerName={album.singerName}

                />
              );
            })
          }
        </style.Wrapper>
      </style.Slide>
    </style.CustomSwiper>
  </style.Wrapper>
);
