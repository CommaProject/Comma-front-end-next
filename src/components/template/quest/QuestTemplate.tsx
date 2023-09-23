import React from 'react';
import { RoundInput } from '@/components/common/round-input';
import { SliderFreeMode } from '@/components/common/slider-free-mode';
import { SwiperAlbum } from '@/components/pages/quest/swiper-album';
import * as style from './QuestTemplate.style';

interface QuestTemplateProps {
  onClickRoundInput: () => void;
  myMostListenedSongNode: React.ReactNode;
  myLikedSongsNode: React.ReactNode;
  highlyRecommendedSongNode: React.ReactNode;
}

export const QuestTemplate = ({
  onClickRoundInput,
  myMostListenedSongNode,
  myLikedSongsNode,
  highlyRecommendedSongNode,
}: QuestTemplateProps) => (
  <style.Wrapper>
    <RoundInput
      completedTextValue=""
      onClickRoundInput={onClickRoundInput}
      handleEraseIconClick={() => {}}
      isCompletedSearch={false}
      isHidden={false}
    />
    <title style={{ marginTop: 15, marginBottom: 10 }}>
      친구가 가장 많이 들은 곡
    </title>
    <SwiperAlbum />
    <title style={{ marginTop: 65 }}>내가 가장 많이 들은 곡</title>
    <SliderFreeMode componentGab={3}>{myMostListenedSongNode}</SliderFreeMode>
    <title style={{ marginTop: 50 }}>내가 좋아요 표시한 곡</title>
    <SliderFreeMode componentGab={3}>{myLikedSongsNode}</SliderFreeMode>
    <title style={{ marginTop: 50 }}>추천이 가장 많이 된 곡</title>
    <SliderFreeMode componentGab={3}>
      {highlyRecommendedSongNode}
    </SliderFreeMode>
  </style.Wrapper>
);
