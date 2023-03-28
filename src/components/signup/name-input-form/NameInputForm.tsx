import { ChangeEvent } from 'react';
import { theme } from '~/src/styles';
import NameInput from '../../inputs';
import { ExplainTextBox, SubTextBox } from '../../text-box';
import { CommonContainer, CommonTextWrapper } from '../SignUpCommon.style';
import { ExplainContainer } from './NameInputForm.style';

interface NameInputFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  len: number;
}

export const NameInputForm = ({ onChange, len }: NameInputFormProps) => {
  return (
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
};
