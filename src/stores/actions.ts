import { atom } from 'jotai';
import {
  loginInputAtom,
  ModalStateType,
  modalStateAtom,
  LoginInputType,
} from './atoms';

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (get, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);

//  LOGIN
export const handleLoginInputAtom = atom(
  (get) => get(loginInputAtom),
  (get, set, newInput: LoginInputType) => {
    set(loginInputAtom, newInput);
  },
);
