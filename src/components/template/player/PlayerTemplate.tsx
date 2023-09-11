import { Swiper as SwiperClass } from 'swiper/types';
import { PlayerControl } from '@/components/common/player';

import * as style from './PlayerTemplate.style';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface PlayerTemplateProps {
  onClickMinimize: () => void;
  title: string;
  date: string;
  // handleSwiperSwipe: (swiper: SwiperClass) => void;
}

export const PlayerTemplate = ({
  onClickMinimize,
  title,
  date,
}: PlayerTemplateProps) => (
  <style.Wrapper>
    <style.TopBar>
      <style.CloseButton onClick={onClickMinimize} />
      <style.WriteButton onClick={onClickMinimize} />
    </style.TopBar>
    <style.TitleBox>
      <style.Title>title</style.Title>
      <style.Date>2023-03-20 13:22:00</style.Date>
    </style.TitleBox>
    <PlayerControl />
  </style.Wrapper>
);
