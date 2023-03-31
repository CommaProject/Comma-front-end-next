import { GenderType } from '@/constants/types';
import * as style from './GenderBtnList.style';

const GENDER_LIST: { type: GenderType; value: string }[] = [
  { type: 'm', value: '남' },
  { type: 'f', value: '여' },
  { type: 'x', value: 'X' },
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
      {GENDER_LIST.map(({ type, value }) => (
        <style.Button
          onClick={() => onChangeSelect('gender', type)}
          isActivate={gender === type}
          key={type}
        >
          {value}
        </style.Button>
      ))}
    </style.Box>
  </style.Wrapper>
);
