import { AgeType, GenderType } from './authTypes';

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

/**
 * 회원가입시 필요한 데이터 타입
 */
export interface SignUpStateType {
  /** 이름 */
  name: string;
  /** 성별 남/여/x */
  gender: GenderType;
  /** 연령 20대 미만/20대/30대/40대/50대 이상/x */
  age: AgeType;
  /** 아티스트 선택 리스트 */
  artist: string[];
  /** 장르 선택 리스트 */
  genre: string[];
  /** 오전/오후 - 시간- 분 */
  time: TimeType;
}
