import { theme } from '@/styles/theme';
import { ChangeEvent } from 'react';
import NameInput from '@/components/inputs';
import { ExplainTextBox, SubTextBox } from '@/components/text-box';
import {
  CommonContainer,
  CommonTextWrapper,
} from '@/components/signup/SignUpCommon.style';
import { ExplainContainer } from './NameInputForm.style';

/**
 * 이름 입력 폼 인터페이스
 */
interface NameInputFormProps {
  /** 이름값 change event 함수 */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 이름 길이 */
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
