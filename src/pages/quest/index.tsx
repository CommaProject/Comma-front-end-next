import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';
import { QuestTemplate } from '@/components/template/quest/QuestTemplate';
import { useRecommend } from '@/hooks/usePlaylist';
import { useTrackPlayCount } from '@/hooks/uesTrack';
import { useFavoriteTrack } from '@/hooks/useFavorite';

const Quest = () => {
  const router = useRouter();
  const { tracksRecommendData } = useRecommend();
  const { trackPlayCountData, friendsTrackPlayCountData } = useTrackPlayCount();
  const { favoriteTrack } = useFavoriteTrack();

  // console.log('tracksRecommendData', tracksRecommendData);
  // console.log('trackPlayCountData', trackPlayCountData);
  // console.log('friendsTrackPlayCountData', friendsTrackPlayCountData);
  // console.log('favoriteTrack', favoriteTrack);

  const handleRoundInput = () => {
    router.push('/quest/search');
  };

  return (
    <QuestTemplate
      onClickRoundInput={handleRoundInput}
      friendsTrackPlayCountData={friendsTrackPlayCountData}
      myMostListenedTracks={trackPlayCountData}
      highlyRecommendedTracks={tracksRecommendData}
      myFavoriteTracks={favoriteTrack}
    />
  );
};

export default Quest;
