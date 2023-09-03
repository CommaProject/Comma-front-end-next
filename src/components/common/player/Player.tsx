import { useAtom } from 'jotai';
import { modalStateAtom } from '@/stores/atoms';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';
import { PlayerTemplate } from '../../template/player';

SwiperCore.use([Navigation]);

export const Player = () => {
  const [modalState, setModalState] = useAtom(modalStateAtom);
  const handleSwiperSwipe = (e: SwiperClass) => {
    if (e.isBeginning) {
      setModalState({
        isOpen: false,
      });
    }
  };
  const closeModal = () => {};

  return (
    <PlayerTemplate
      onClickMinimize={closeModal}
      handleSwiperSwipe={handleSwiperSwipe}
    />
  );
};
