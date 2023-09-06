import { useRouter } from 'next/router';
import { useGetFavoriteArtist } from '../apis/favoriteArtists';
import { ArtistAvataFrom } from '../components/pages/quest/artist-avata-form';
import { Swiper as SwiperClass } from 'swiper/types';
import * as style from '@/styles/pages-styles/myartist.style';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { ArtistDetailForm } from '../components/pages/quest/artist-detail-from';
import { useCallback, useEffect, useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { SpotifyArtistProps } from '../constants/types/searchTypes';
import { FavoriteArtistType } from '../constants/types/artistTypes';

const MyArtist = () => {
  
  const router = useRouter();
  const onClickPrevButton = () => {
    router.back();
  };

  // 스와이퍼 관련
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [slideStep, setSlideStep] = useState(0);
  const handleSwiper = (swiper: SwiperClass) => {
    setSlideStep(swiper.realIndex);
  };
  const [isHidden, setIsHidden] = useState(false); // false: Completed Search true: Detail
  
  
  const { favoriteArtist } = useGetFavoriteArtist();
  const [clickedArtistDetail, setClickedArtistDetail] = useState<FavoriteArtistType>(
    {
      favoriteArtistId : -1,
      artistName : "-",
      artistImageUrl : "-"
  }
  );
  
  
  const {mutateTrack,spotifyTrackData}= useSearch();
   const handleAvatarClick = useCallback(  // Detail Artist
   (artistDetailInfo: FavoriteArtistType) => {
     mutateTrack(artistDetailInfo.artistName);
     setClickedArtistDetail(artistDetailInfo);
     
     setIsHidden(true);
     swiperRef?.slideNext();

   },
   [swiperRef],
 );
 
  return (
    <style.Wrapper>
      <style.TopBar>
        <style.PrevButton onClick={onClickPrevButton} />
        My Artist
      </style.TopBar>

      <style.CustomSwiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides
        noSwiping
        mousewheel={false}
        centerInsufficientSlides
        allowTouchMove={false}
        onSlideChange={handleSwiper}
      >
        <style.Slide>
          <ArtistAvataFrom
            artistData={[]}
            commaUserData={[]}
            favoriteArtistData={favoriteArtist}
            onArtistAvataClick={()=>{}}
            onClickFavoriteArtistDetail={(artistDetailInfo:FavoriteArtistType) => handleAvatarClick(artistDetailInfo)}
          />
        </style.Slide>
        <style.Slide>
          <ArtistDetailForm
            artistImage={clickedArtistDetail.artistImageUrl}
            artistName= {clickedArtistDetail.artistName}
            spotifyTrackData={spotifyTrackData}
            isLike
          />
         
          
        </style.Slide>
      </style.CustomSwiper>
    </style.Wrapper>
  );
};

export default MyArtist;
