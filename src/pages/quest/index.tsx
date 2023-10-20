import { useRouter } from 'next/router';
import { useRecommend } from '@/hooks/usePlaylist';
import { useTrackPlayCount } from '@/hooks/uesTrack';
import { useFavoriteTrack } from '@/hooks/useFavorite';
import { useCallback, useEffect, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { AlbumProps } from '@/constants/types/albumTypes';
import { QuestTemplate } from '@/components/template/quest';

export interface SeeMoreSlideProps extends AlbumProps {
  // onClickPlusButton: () => void;
  // onClickFavoriteButton: () => void;
  // isFavorite: boolean;
  timer: number;
  trackId: string;
}

interface SeeMoreSlideWithFavoriteProps extends SeeMoreSlideProps {
  isFavorite: boolean;
}

const Quest = () => {
  const router = useRouter();
  const { tracksRecommendData } = useRecommend();
  const { trackPlayCountData, friendsTrackPlayCountData } = useTrackPlayCount();
  const { favoriteTrack } = useFavoriteTrack();
  const [slideStep, setSlideStep] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [seeMoreTitle, setSeeMoreTitle] = useState('');
  const [seeMoreData, setSeeMoreData] = useState<SeeMoreSlideWithFavoriteProps[]>([]);
  // console.log('tracksRecommendData', tracksRecommendData);
  // console.log('trackPlayCountData', trackPlayCountData);
  // console.log('friendsTrackPlayCountData', friendsTrackPlayCountData);
  // console.log('favoriteTrack', favoriteTrack);

  // isFavorite은 매번 Reload되기 때문에 따로 분리해보기.
  const { favoriteTrackIds, deleteFavoriteTrackMutate, addFavoriteTrackMutate } =
    useFavoriteTrack();

  useEffect(() => {
    if (seeMoreData && favoriteTrackIds) {
      const spotifyArtistDataWithFavorite1 = seeMoreData?.map((track) => ({
        ...track,
        isFavorite: Object.keys(favoriteTrackIds)?.includes(track.trackId),
      }));

      setSeeMoreData(spotifyArtistDataWithFavorite1);
    }
  }, [favoriteTrackIds]);


  const handleRoundInput = () => {
    router.push('/quest/search');
  };

  const handleSeeMorePageData = (data: SeeMoreSlideProps[]) => {
    setSeeMoreData(data);
  };

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(
    (title: string, data: SeeMoreSlideProps[]) => {
      handleSeeMorePageData(data)
      setSeeMoreTitle(title);
      swiperRef?.slideNext();
    },
    [swiperRef],
  );

  const handleSwiper = (swiper: SwiperClass) => {
    console.log(swiper.realIndex);
    setSlideStep(swiper.realIndex);
  };

  return (
    <QuestTemplate
      seeMoreTitle={seeMoreTitle}
      seeMoreData={seeMoreData}
      onClickRoundInput={handleRoundInput}
      friendsTrackPlayCountData={friendsTrackPlayCountData || []}
      myMostListenedTracks={trackPlayCountData || []}
      highlyRecommendedTracks={tracksRecommendData || []}
      myFavoriteTracks={favoriteTrack}
      setSwiperRef={setSwiperRef}
      onSlideChange={handleSwiper}
      onClickNextSlider={handleNext}
      onClickPrevButton={handlePrev}
      onClickFavorite={(trackId: string) => {
        if (favoriteTrackIds) {
          if (Object.keys(favoriteTrackIds).includes(trackId))
            deleteFavoriteTrackMutate(favoriteTrackIds[trackId]);
          else addFavoriteTrackMutate(trackId);
        }
      }}
      slideStep={slideStep}

    />
  );
};

export default Quest;
