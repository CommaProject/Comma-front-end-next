import { ChangeEvent } from 'react';
import NameInput from '@/components/inputs';
import { ExplainTextBox, SubTextBox } from '@/components/text-box';
import {
  CommonContainer,
  CommonTextWrapper,
} from '@/components/signup/SignUpCommon.style';
import { ExplainContainer } from './NameInputForm.style';
import { theme } from '@/styles/theme';

interface NameInputFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  len: number;
}

export const NameInputForm = ({ onChange, len }: NameInputFormProps) => (
  <CommonContainer>
    <SubTextBox>안녕하세요,</SubTextBox>
    <div>
      <CommonTextWrapper>
        <NameInput maxLength={8} onChange={onChange} />
        <SubTextBox>님</SubTextBox>
      </CommonTextWrapper>
      <ExplainContainer>
        <ExplainTextBox
          color={theme.colors.grayscale.gray300}
        >{`(${len}/8)`}</ExplainTextBox>
      </ExplainContainer>
    </div>
  </CommonContainer>
);
