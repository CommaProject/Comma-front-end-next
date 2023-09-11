import { useAtom } from 'jotai';
import { playerModalStateAtom } from '@/stores/atoms';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';
import { PlayerTemplate } from '@/components/template/player';

SwiperCore.use([Navigation]);

export const Player = () => {
  const [modalState, setModalState] = useAtom(playerModalStateAtom);
  const handleSwiperSwipe = (e: SwiperClass) => {
    if (e.isBeginning) {
      setModalState({
        isOpen: false,
      });
    }
  };
  const closeModal = () => {};

  // return (
  //   <PlayerTemplate
  //     onClickMinimize={closeModal}
  //     // handleSwiperSwipe={handleSwiperSwipe}
  //   />
  // );
};
