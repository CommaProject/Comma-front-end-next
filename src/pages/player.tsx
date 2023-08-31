import { PlayerTemplate } from '@/components/template/player/PlayerTemplate';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { modalStateAtom } from '@/stores/atoms';

export const Player = () => {
  const [modalState, setModalState] = useAtom(modalStateAtom);

  useEffect(() => {
    if (modalState.isOpen === false) {
      setModalState({
        isOpen: true,
        content: <PlayerTemplate />,
      });
    }
  }, []);
  return <PlayerTemplate />;
};

export default Player;

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: true,
    },
  };
}
