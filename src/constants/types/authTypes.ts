export interface LoginInputsType {
  email: string;
  password: string;
}

/**
 * time-picker 정의를 위한 type
 */
export interface TimeType {
  /** AM/PM */
  meridiem: string;
  /** 시간 1 ~ 12 */
  hour: number;
  /** 분 0 ~ 59 */
  min: number;
}

export type GenderType = 'm' | 'f' | 'x';
export type AgeType = '19' | '20' | '30' | '40' | '50' | 'x';

export type DuplicateOptionType = 'email' | 'nickname';

export interface RegisterInputsType extends LoginInputsType {
  passwordCheck: string;
  name: string;
  gender: GenderType;
  age: number;
  profileImg: string;
  nickname: string;
}

export interface LoginAsyncInput {
  email: string;
  password: string;
}

export interface LoginAsyncOutput {
  token: string;
}

export type InputNameType = keyof RegisterInputsType;
