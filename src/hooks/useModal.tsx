import { useAtom } from 'jotai';
import { useState, type ReactNode, useEffect } from 'react';

import {
  closeCallbackAtom,
  handleModalAtom,
  handlePlayerModalAtom,
} from '@/stores/actions';

const useModal = () => {
  const [, setModalState] = useAtom(handleModalAtom);
  const [, setPlayerModalState] = useAtom(handlePlayerModalAtom);
  const [closeCallback, setCloseCallback] = useAtom(closeCallbackAtom);

  const openModal = (newContent: ReactNode, beforeClose?: () => void) => {
    if (beforeClose !== undefined) {
      setCloseCallback(() => beforeClose);
      console.log(beforeClose);
    }
    setModalState({ isOpen: true, content: newContent });
  };

  const closeModal = () => {
    if (closeCallback) {
      closeCallback();
    }
    setCloseCallback(null);
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
