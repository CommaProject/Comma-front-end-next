import { atom } from 'jotai';
import { ModalStateType, modalStateAtom, playerModalStateAtom } from './atoms';

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (get, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);

export const handlePlayerModalAtom = atom(
  (get) => get(playerModalStateAtom),
  (get, set, newModalState: ModalStateType) => {
    set(playerModalStateAtom, newModalState);
  },
);

export const closeCallbackAtom = atom<(() => void) | null>(null);
