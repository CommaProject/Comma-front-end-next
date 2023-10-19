import { RoundInput } from '@/components/common/round-input';
import { SwiperAlbum } from '@/components/pages/quest/swiper-album';
import { TrackFavoritesType, TrackPlayCountType } from '@/types/trackTypes';
import { TracksRecommendData } from '@/types/recommendType';
import * as style from './QuestTemplate.style';
import { HighlyRecommendedTracks, MyFavoriteTracks, MyMostListenedTracks } from '@/components/pages/quest/free-sider-album-form';

interface QuestTemplateProps {
  onClickRoundInput: () => void;
  myMostListenedTracks: TrackPlayCountType[];
  myFavoriteTracks: TrackFavoritesType[];
  highlyRecommendedTracks: TracksRecommendData[];
  friendsTrackPlayCountData: TrackPlayCountType[];
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
      handleEraseIconClick={() => { }}
      isSearchResults={false}
      isHidden={false}
    />
    <style.FriendsMostListenedTrackTitle>
      친구가 가장 많이 들은 곡
    </style.FriendsMostListenedTrackTitle>
    <SwiperAlbum friendsTrackPlayCountData={friendsTrackPlayCountData} />
    <MyMostListenedTracks myMostListenedTracks={myMostListenedTracks} />
    <MyFavoriteTracks myFavoriteTracks={myFavoriteTracks} />
    <HighlyRecommendedTracks highlyRecommendedTracks={highlyRecommendedTracks} />
  </style.Wrapper>
);
