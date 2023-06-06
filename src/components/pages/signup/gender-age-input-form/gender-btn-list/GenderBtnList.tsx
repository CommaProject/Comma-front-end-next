import { GenderType } from '@/constants/types';
import * as style from './GenderBtnList.style';

interface GenderListType {
  genderGroup: GenderType;
  insideText: string;
}
const GENDER_LIST: GenderListType[] = [
  { genderGroup: 'male', insideText: '남' },
  { genderGroup: 'female', insideText: '여' },
  { genderGroup: 'x', insideText: 'X' },
];

/**
 * 성별 관리를 위한 인터페이스
 */
interface GenderBtnListProps {
  /** 성별 */
  gender: string;
  /** 성별 change event 함수 */
  onChangeSelect: (name: string, value: string) => void;
}
export const GenderBtnList = ({
  gender,
  onChangeSelect,
}: GenderBtnListProps) => (
  <style.Wrapper>
    <style.Title>성별</style.Title>
    <style.Box>
      {GENDER_LIST.map(({ genderGroup, insideText }) => (
        <style.Button
          onClick={() => onChangeSelect('sex', genderGroup)}
          isActivate={gender === genderGroup}
          key={genderGroup}
        >
          {insideText}
        </style.Button>
      ))}
    </style.Box>
  </style.Wrapper>
);
