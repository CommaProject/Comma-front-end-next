import { useAtom } from 'jotai';
import { AgeType } from '@/constants/types/authTypes';
import { signUpStateAtom } from '@/stores/atoms';
import { theme } from '@/styles/theme';
import { SelectBtn } from '@/components/buttons/Buttons.style';
import { ExplainTextBox, SubTextBox } from '@/components/text-box';
import {
  AgeBtnListContainer,
  AgeContainer,
  BtnWrapper,
} from './AgeBtnList.style';

const AGE_LIST: { type: AgeType; value: string }[] = [
  { type: '19', value: '20↓' },
  { type: '20', value: '20' },
  { type: '30', value: '30' },
  { type: '40', value: '40' },
  { type: '50', value: '50↑' },
  { type: 'x', value: 'X' },
];

export const AgeBtnList = () => {
  const [signUpState, setSignUpState] = useAtom(signUpStateAtom);

  return (
    <AgeBtnListContainer>
      <SubTextBox>연령</SubTextBox>
      <AgeContainer>
        {AGE_LIST.map(({ type, value }) => (
          <BtnWrapper key={type}>
            <SelectBtn
              onClick={() => setSignUpState({ ...signUpState, age: type })}
              disable={signUpState.age === type}
            >
              {value}
            </SelectBtn>
            <ExplainTextBox
              color={
                signUpState.age === type
                  ? theme.colors.grayscale.dark
                  : theme.colors.grayscale.gray300
              }
            >
              20대
            </ExplainTextBox>
          </BtnWrapper>
        ))}
      </AgeContainer>
    </AgeBtnListContainer>
  );
};
