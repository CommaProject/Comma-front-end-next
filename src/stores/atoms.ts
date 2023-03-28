import type { ReactNode } from 'react';
import { atom } from 'jotai';
import { GenderType, AgeType } from '@/constants/types/authTypes';

export interface ModalStateType {
  isOpen: boolean;
  content?: ReactNode;
}

export const modalStateAtom = atom<ModalStateType>({
  isOpen: false,
  content: null,
});

export interface TimeType {
  meridiem: string;
  hour: number;
  min: number;
}

export interface SignUpStateType {
  name: string;
  gender: GenderType;
  age: AgeType;
  artist: string[];
  genre: string[];
  time: TimeType;
  percent: number;
}

export const signUpStateAtom = atom<SignUpStateType>({
  name: '',
  gender: 'x',
  age: 'x',
  artist: [],
  genre: [],
  time: { meridiem: 'AM', hour: 1, min: 1 },
  percent: 20,
});
