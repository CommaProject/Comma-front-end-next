import React from 'react';
import { RoundInput } from '@/components/common/round-input';
import { SliderFreeMode } from '@/components/common/slider-free-mode';
import { SwiperAlbum } from '@/components/pages/quest/swiper-album';
import { VerticalAlbum } from '@/components/common/album/vertical-album';
import { TrackFavoritesType, TrackPlayCountType } from '@/types/trackTypes';
import { TracksRecommendData } from '@/types/recommendType';
import * as style from './QuestTemplate.style';

interface QuestTemplateProps {
  onClickRoundInput: () => void;
  myMostListenedTracks: TrackPlayCountType[] | null | undefined;
  myFavoriteTracks: TrackFavoritesType[];
  highlyRecommendedTracks: TracksRecommendData[] | null | undefined;
  friendsTrackPlayCountData: TrackPlayCountType[] | null | undefined;
}

export const QuestTemplate = ({
  onClickRoundInput,
  myMostListenedTracks,
  friendsTrackPlayCountData,
  myFavoriteTracks,
  highlyRecommendedTracks,
}: QuestTemplateProps) => (
  <style.Wrapper>
    <RoundInput
      completedTextValue=""
      onClickRoundInput={onClickRoundInput}
      handleEraseIconClick={() => {}}
      isCompletedSearch={false}
      isHidden={false}
    />
    <title style={{ marginTop: 15 }}>친구가 가장 많이 들은 곡</title>
    <SwiperAlbum friendsTrackPlayCountData={friendsTrackPlayCountData} />
    <title style={{ marginTop: 65, marginBottom: 20 }}>
      내가 가장 많이 들은 곡
    </title>
    <SliderFreeMode componentGab={0}>
      {myMostListenedTracks?.map((track) => (
        <VerticalAlbum
          key={track.trackArtist.track.id}
          onClick={() => {}}
          imgUrl={track.trackArtist.track.albumImageUrl}
          songName={track.trackArtist.track.trackTitle}
          singerName={track.trackArtist.artist.artistName}
        />
      ))}
    </SliderFreeMode>
    <title style={{ marginTop: 50, marginBottom: 20 }}>
      내가 좋아요 표시한 곡
    </title>
    <SliderFreeMode componentGab={0}>
      {myFavoriteTracks.map((track) => (
        <VerticalAlbum
          key={track.favoriteTrackId}
          onClick={() => {}}
          imgUrl={track.trackArtistResponses[0].track.albumImageUrl}
          songName={track.trackArtistResponses[0].track.trackTitle}
          singerName={
            track.trackArtistResponses[0]?.artist.artistName || 'undefined'
          }
        />
      ))}
    </SliderFreeMode>
    <title style={{ marginTop: 50, marginBottom: 20 }}>
      추천이 가장 많이 된 곡
    </title>
    <SliderFreeMode componentGab={0}>
      {highlyRecommendedTracks ? (
        highlyRecommendedTracks.map((track) => (
          <VerticalAlbum
            key={track.track.id}
            onClick={() => {}}
            imgUrl={track.track.albumImageUrl}
            songName={track.track.trackTitle}
            singerName={track.artist.artistName || 'undefined'}
          />
        ))
      ) : (
        <div>undefined</div>
      )}
    </SliderFreeMode>
  </style.Wrapper>
);
