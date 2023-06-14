import { AgeType } from '@/constants/types/authTypes';
import { theme } from '@/styles/theme';
import * as style from './AgeBtnList.style';

interface AgeListType {
  ageGroup: AgeType;
  insideText: string;
  outsideText: string;
}
const AGE_LIST: AgeListType[] = [
  { ageGroup: 19, insideText: '20↓', outsideText: '20대 미만' },
  { ageGroup: 20, insideText: '20', outsideText: '20대' },
  { ageGroup: 30, insideText: '30', outsideText: '30대' },
  { ageGroup: 40, insideText: '40', outsideText: '40대' },
  { ageGroup: 50, insideText: '50↑', outsideText: '50대 이상' },
  { ageGroup: 0, insideText: 'X', outsideText: ' ' },
];

/**
 * 연령 버튼 리스트 관리를 위한 인터페이스
 */
interface AgeBtnListProps {
  /** 연령 값 */
  age: number;
  /** 연령 값 change event 함수 */
  onChangeSelect: (name: string, value: string | number) => void;
}
export const AgeBtnList = ({ age, onChangeSelect }: AgeBtnListProps) => (
  <style.Wrapper>
    <style.Title>연령</style.Title>
    <style.List>
      {AGE_LIST.map(({ ageGroup, insideText, outsideText }) => (
        <style.Box key={ageGroup}>
          <style.Button
            onClick={() => onChangeSelect('age', ageGroup)}
            isActivate={age === ageGroup}
          >
            {insideText}
          </style.Button>
          <style.Desc
            isActivate={age === ageGroup}
            color={
              age === ageGroup
                ? theme.colors.grayscale.dark
                : theme.colors.grayscale.gray300
            }
          >
            {outsideText === ' ' ? <p /> : outsideText}
          </style.Desc>
        </style.Box>
      ))}
    </style.List>
  </style.Wrapper>
);
