import { atom } from 'jotai';

import {
  ModalStateType,
  SignUpStateType,
  modalStateAtom,
  signUpStateAtom,
} from './atoms';

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (get, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);

export const handleSignUpAtom = atom(
  (get) => get(signUpStateAtom),
  (get, set, newSignUpState: SignUpStateType) => {
    set(signUpStateAtom, newSignUpState);
  },
);
