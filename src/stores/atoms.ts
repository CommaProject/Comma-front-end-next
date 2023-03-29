import type { ReactNode } from 'react';
import { atom } from 'jotai';

export interface ModalStateType {
  isOpen: boolean;
  content?: ReactNode;
}

export const modalStateAtom = atom<ModalStateType>({
  isOpen: false,
  content: null,
});

// LOGIN
export interface LoginInputType {
  id: string;
  password: string;
}

export const loginInputAtom = atom<LoginInputType>({
  id: '',
  password: '',
});
