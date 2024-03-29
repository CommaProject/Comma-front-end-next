import { useAtom } from 'jotai';
import { modalStateAtom } from '@/stores/atoms';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';
import { PlayerTemplate } from '@/components/template/player';
import { useEffect } from 'react';

export const usePlayer = () => {
  const [modalState, setModalState] = useAtom(modalStateAtom);
  const handleSwiperSwipe = (e: SwiperClass) => {
    if (e.isBeginning) {
      setModalState({
        isOpen: false,
      });
    }
  };

  useEffect(() => {
    if (modalState.isOpen === false) {
      setModalState({
        isOpen: true,
        content: (
          <PlayerTemplate
            onClickMinimize={() => {
              setModalState({ isOpen: false });
            }}
            title="test"
            date="20230303" // handleSwiperSwipe={handleSwiperSwipe}
          />
        ),
      });
    }
  }, []);

  return { modalState, setModalState };
};
