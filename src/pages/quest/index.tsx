import { useRouter } from 'next/router';
import { QuestTemplate } from '@/components/template/quest/QuestTemplate';
import { useRecommend } from '@/hooks/usePlaylist';
import { useTrackPlayCount } from '@/hooks/uesTrack';
import { useFavoriteTrack } from '@/hooks/useFavorite';
import { useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { AlbumProps } from '@/constants/types/albumTypes';

export interface SeeMoreSlideProps extends AlbumProps {
  // onClickPlusButton: () => void;
  // onClickFavoriteButton: () => void;
  // isFavorite: boolean;
}

const Quest = () => {
  const router = useRouter();
  const { tracksRecommendData } = useRecommend();
  const { trackPlayCountData, friendsTrackPlayCountData } = useTrackPlayCount();
  const { favoriteTrack } = useFavoriteTrack();
  const [slideStep, setSlideStep] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [seeMoreTitle, setSeeMoreTitle] = useState('');
  const [seeMoreData, setSeeMoreData] = useState<SeeMoreSlideProps[]>([]);
  // console.log('tracksRecommendData', tracksRecommendData);
  // console.log('trackPlayCountData', trackPlayCountData);
  // console.log('friendsTrackPlayCountData', friendsTrackPlayCountData);
  // console.log('favoriteTrack', favoriteTrack);

  const handleRoundInput = () => {
    router.push('/quest/search');
  };

  const handleSeeMorePageData = ({
    imgUrl,
    songName,
    singerName,
  }: SeeMoreSlideProps) => {
    const updatedSeeMoreData = [...seeMoreData];

    const newSlideData: SeeMoreSlideProps = {
      imgUrl,
      songName,
      singerName,
    };

    updatedSeeMoreData.push(newSlideData);
    setSeeMoreData(updatedSeeMoreData);
  };
  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(
    (title: string) => {
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
      onClickRoundInput={handleRoundInput}
      friendsTrackPlayCountData={friendsTrackPlayCountData || []}
      myMostListenedTracks={trackPlayCountData || []}
      highlyRecommendedTracks={tracksRecommendData || []}
      myFavoriteTracks={favoriteTrack}
      setSwiperRef={setSwiperRef}
      onSlideChange={handleSwiper}
      onClickNextSlider={handleNext}
      onClickPrevButton={handlePrev}
      slideStep={slideStep}
      seeMoreData={seeMoreData}
    />
  );
};

export default Quest;
