import NameInput from '@/components/inputs';
import { SubTextBox } from '@/components/text-box';
import AgeBtnList from '@/components/signup/age-btn-list';
import GenderBtnList from '@/components/signup/gender-btn-list';
import {
  CommonContainer,
  CommonTextWrapper,
} from '@/components/signup/SignUpCommon.style';
import { FormBox } from './GenderAgeInputForm.style';

/**
 * 성별/연령 form 관리를 위한 인터페이스
 */
interface GenderAgeInputFormProps {
  /** 앞에서 입력한 이름 */
  name: string;
  /** 성별 */
  gender: string;
  /** 연령 */
  age: string;
  /** 성별 연령 change event 함수 */
  onChageSelect: (name: string, value: string) => void;
}
export const GenderAgeInputForm = ({
  name,
  gender,
  age,
  onChageSelect,
}: GenderAgeInputFormProps) => (
  <FormBox>
    <CommonContainer>
      <CommonTextWrapper>
        <NameInput disabled maxLength={8} value={name} />
        <SubTextBox>님</SubTextBox>
      </CommonTextWrapper>
      <SubTextBox>반갑습니다</SubTextBox>
    </CommonContainer>
    <GenderBtnList gender={gender} onChangeSelect={onChageSelect} />
    <AgeBtnList age={age} onChangeSelect={onChageSelect} />
  </FormBox>
);
