import { Swiper as SwiperClass } from 'swiper/types';

import * as style from './PlayerTemplate.style';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface PlayerTemplateProps {
  onClickMinimize: () => void;
  handleSwiperSwipe: (swiper: SwiperClass) => void;
}

export const PlayerTemplate = ({
  onClickMinimize,
  handleSwiperSwipe,
}: PlayerTemplateProps) => (
  <style.CustomSwiper
    onSwiper={(swiper) => {
      swiper.on('slideChange', () => handleSwiperSwipe(swiper));
    }}
  >
    <style.Slide>
      <style.SlideWrapper>
        <style.CloseButton onClick={onClickMinimize} />
      </style.SlideWrapper>
    </style.Slide>
  </style.CustomSwiper>
);
