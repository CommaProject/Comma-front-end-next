import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { EffectCards, Pagination } from 'swiper';
import { TrackPlayCountType } from '@/types/trackTypes';
import { Album } from '@/components/common/album';
import * as style from './SwiperAlbum.style';

interface SwiperAlbumProps {
  friendsTrackPlayCountData: TrackPlayCountType[] | null | undefined;
}

export const SwiperAlbum = ({
  friendsTrackPlayCountData,
}: SwiperAlbumProps) => (
  <style.CustomSwiper
    className="SwiperAlbum"
    modules={[EffectCards, Pagination]}
    effect="cards"
    loop
    pagination
  >
    {friendsTrackPlayCountData?.map((track, index) => (
      <style.CardSwiperSlide key={track.trackArtist.track.id}>
        <Album
          url={track.trackArtist.track.albumImageUrl}
          size={250}
          borderRadius={40}
        />
      </style.CardSwiperSlide>
    ))}
  </style.CustomSwiper>
);
