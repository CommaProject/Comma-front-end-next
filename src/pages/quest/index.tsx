import { useRouter } from 'next/router';
import { QuestTemplate } from '@/components/template/quest/QuestTemplate';
import { useRecommend } from '@/hooks/usePlaylist';
import { useTrackPlayCount } from '@/hooks/uesTrack';
import { useFavoriteTrack } from '@/hooks/useFavorite';
import { useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';

const Quest = () => {
  const router = useRouter();
  const { tracksRecommendData } = useRecommend();
  const { trackPlayCountData, friendsTrackPlayCountData } = useTrackPlayCount();
  const { favoriteTrack } = useFavoriteTrack();
  const [slideStep, setSlideStep] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  // console.log('tracksRecommendData', tracksRecommendData);
  // console.log('trackPlayCountData', trackPlayCountData);
  // console.log('friendsTrackPlayCountData', friendsTrackPlayCountData);
  // console.log('favoriteTrack', favoriteTrack);

  const handleRoundInput = () => {
    router.push('/quest/search');
  };
  const handleNext = useCallback(() => {
    console.log(swiperRef);
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <QuestTemplate
      onClickRoundInput={handleRoundInput}
      friendsTrackPlayCountData={friendsTrackPlayCountData || []}
      myMostListenedTracks={trackPlayCountData || []}
      highlyRecommendedTracks={tracksRecommendData || []}
      myFavoriteTracks={favoriteTrack}
      setSwiperRef={setSwiperRef}
      onSlideChange={() => { }}
      onClickNextSlider={handleNext} />
  );
};

export default Quest;
