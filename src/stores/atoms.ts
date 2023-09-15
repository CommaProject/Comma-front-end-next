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

export const playerModalStateAtom = atom<ModalStateType>({
  isOpen: false,
  content: null,
});

interface SearchType {
  category: 'music' | 'artist' | 'commaUser';
  searchText: string;
}

export const searchAtom = atom<SearchType>({
  category: 'music',
  searchText: '',
});
