import { useAtom } from 'jotai';
import { useState, type ReactNode } from 'react';

import { handleModalAtom, handlePlayerModalAtom } from '@/stores/actions';

const useModal = () => {
  const [, setModalState] = useAtom(handleModalAtom);
  const [, setPlayerModalState] = useAtom(handlePlayerModalAtom);
  const [beforeCloseCallback, setBeforeCloseCallback] = useState<
    (() => void) | null
  >(null);

  const openModal = (newContent: ReactNode, beforeClose?: () => void) => {
    // Callback 함수 등록
    if (beforeClose !== undefined) {
      setBeforeCloseCallback(beforeClose);
    }
    setModalState({ isOpen: true, content: newContent });
  };

  const closeModal = () => {
    // Callback 함수 실행
    if (beforeCloseCallback) {
      beforeCloseCallback();
    }
    setBeforeCloseCallback(null);
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
