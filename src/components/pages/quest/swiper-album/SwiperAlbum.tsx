import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { EffectCards, Pagination } from 'swiper';

import * as style from './SwiperAlbum.style';

export const SwiperAlbum = () => (
  <style.CustomSwiper
    className="SwiperAlbum"
    modules={[EffectCards, Pagination]}
    effect="cards"
    loop
    pagination
  >
    <style.CardSwiperSlide backgroundColor="red">test1</style.CardSwiperSlide>
    <style.CardSwiperSlide backgroundColor="blue">test2</style.CardSwiperSlide>
    <style.CardSwiperSlide backgroundColor="green">test3</style.CardSwiperSlide>
    <style.CardSwiperSlide backgroundColor="yellow">
      test4
    </style.CardSwiperSlide>
  </style.CustomSwiper>
);
