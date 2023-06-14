import AgeBtnList from '@/components/pages/signup/gender-age-input-form/age-btn-list';
import GenderBtnList from '@/components/pages/signup/gender-age-input-form/gender-btn-list';
import * as style from './GenderAgeInputForm.style';

/**
 * 성별/연령 form 관리를 위한 인터페이스
 */
interface GenderAgeInputFormProps {
  /** 앞에서 입력한 이름 */
  name: string;
  /** 성별 */
  gender: string;
  /** 연령 */
  age: number;
  /** 성별 연령 change event 함수 */
  onChageSelect: (name: string, value: string | number) => void;
}
export const GenderAgeInputForm = ({
  name,
  gender,
  age,
  onChageSelect,
}: GenderAgeInputFormProps) => (
  <style.Wrapper>
    <style.Box>
      <style.Text>
        <style.Input disabled maxLength={8} value={name} />
        <style.Desc>님</style.Desc>
      </style.Text>
      <style.Desc>반갑습니다</style.Desc>
    </style.Box>
    <GenderBtnList gender={gender} onChangeSelect={onChageSelect} />
    <AgeBtnList age={age} onChangeSelect={onChageSelect} />
  </style.Wrapper>
);
