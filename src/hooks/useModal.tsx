import { useAtom } from 'jotai';
import type { ReactNode } from 'react';

import { handleModalAtom, handlePlayerModalAtom } from '@/stores/actions';

const useModal = () => {
  const [, setModalState] = useAtom(handleModalAtom);
  const [, setPlayerModalState] = useAtom(handlePlayerModalAtom);

  const openModal = (newContent: ReactNode) => {
    setModalState({ isOpen: true, content: newContent });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, content: null });
  };

  const openPlayerModal = (newContent: ReactNode) => {
    setPlayerModalState({ isOpen: true, content: newContent });
  };

  const closePlayerModal = () => {
    setPlayerModalState({ isOpen: false, content: null });
  };

  return { openModal, closeModal, openPlayerModal, closePlayerModal };
};

export default useModal;
