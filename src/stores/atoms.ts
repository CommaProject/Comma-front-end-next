import {
  EnhancedPlaylistType,
  PlaylistType,
} from '@/constants/types/playlistTypes';
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
  category: string; // 'music' | 'artist' | 'commaUser';
  searchText: string;
}

export const searchAtom = atom<SearchType>({
  category: 'music',
  searchText: '',
});

export const playListsAtom = atom<PlaylistType[]>([]);
