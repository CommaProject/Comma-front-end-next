import { GenderType } from '~/src/constants/types';
import { SubTextBox } from '~/src/components/pages/signup/text-box';
import { SelectBtn } from '~/src/components/pages/signup/buttons/Buttons.style';
import { GenderBtnListContainer, GenderContainer } from './GenderBtnList.style';

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
  <GenderBtnListContainer>
    <SubTextBox>성별</SubTextBox>
    <GenderContainer>
      {GENDER_LIST.map(({ type, value }) => (
        <SelectBtn
          onClick={() => onChangeSelect('gender', type)}
          disable={gender === type}
          key={type}
        >
          {value}
        </SelectBtn>
      ))}
    </GenderContainer>
  </GenderBtnListContainer>
);
