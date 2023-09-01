export interface LoginInputsType {
  email: string;
  password: string;
}

/** 남성/ 여성/ 선택 안함 */
export type GenderType = 'male' | 'female' | 'x';
/** 20대 미만/ 20대/ 30대/ 40대/ 50대 이상/ 선택안함 */
export type AgeType = 19 | 20 | 30 | 40 | 50 | 0;

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

export interface UserInfomationOutputsType {
  userId: number;
  email: string;
  data: RegisterInputsType;
}

export interface CommaUserType {
  userId: number;
  email: string;
  password: string;
  delFlag: boolean;
  role: string;
  name: string;
  nickName: string;
  age: number;
  sex: string;
  joinDate: string;
  profileImage: string;
}

export type InputNameType = keyof RegisterInputsType;
