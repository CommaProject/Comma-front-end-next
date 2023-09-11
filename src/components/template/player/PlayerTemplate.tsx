<<<<<<< HEAD
import * as style from './PlayerTemplate.style';

interface PlayerTemplateProps {
  onClickMinimize: () => void;
}

export const PlayerTemplate = ({ onClickMinimize }: PlayerTemplateProps) => (
  <style.Wrapper>
    <style.CloseButton onClick={onClickMinimize} />
    PlayerTemplate
=======
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
      <style.Title>{title}</style.Title>
      <style.Date>{date}</style.Date>
    </style.TitleBox>
    <PlayerControl />
>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9
  </style.Wrapper>
);
