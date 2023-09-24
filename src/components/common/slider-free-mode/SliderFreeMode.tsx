import React from 'react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import FreeMode from 'swiper';
import NavigationPlaylistSvg from '@/assets/icons/NavigationPlaylist.svg';
import { Avata } from '@/components/common/avata';
import * as style from './SliderFreeMode.style';

// interface SwiperAlbumProps {
//   setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
// }

interface SliderFreeModeProps {
  componentGab: number;
  children: React.ReactNode;
}

export const SliderFreeMode = ({
  componentGab,
  children,
}: SliderFreeModeProps) => (
  <style.CustomSwiper spaceBetween={componentGab} slidesPerView={4.5} freeMode>
    {React.Children.map(children, (child, index) => (
      <style.CardSwiperSlide>{child}</style.CardSwiperSlide>
    ))}
    <style.CardSwiperSlide>더보기 (임시)</style.CardSwiperSlide>
  </style.CustomSwiper>
);
