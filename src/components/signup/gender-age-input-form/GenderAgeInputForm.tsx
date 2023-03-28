import NameInput from '@/components/inputs';
import { SubTextBox } from '@/components/text-box';
import AgeBtnList from '@/components/signup/age-btn-list';
import GenderBtnList from '@/components/signup/gender-btn-list';
import {
  CommonContainer,
  CommonTextWrapper,
} from '@/components/signup/SignUpCommon.style';
import { FormBox } from './GenderAgeInputForm.style';

export const GenderAgeInputForm = ({ name }: { name: string }) => (
  <FormBox>
    <CommonContainer>
      <CommonTextWrapper>
        <NameInput disabled maxLength={8} value={name} />
        <SubTextBox>님</SubTextBox>
      </CommonTextWrapper>
      <SubTextBox>반갑습니다</SubTextBox>
    </CommonContainer>
    <GenderBtnList />
    <AgeBtnList />
  </FormBox>
);
