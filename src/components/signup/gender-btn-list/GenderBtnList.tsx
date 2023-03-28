import { GenderType } from '~/src/constants/types';
import { useAtom } from 'jotai';
import { signUpStateAtom } from '~/src/stores/atoms';
import { SubTextBox } from '../../text-box';
import { GenderBtnListContainer, GenderContainer } from './GenderBtnList.style';
import { SelectBtn } from '../../buttons/Buttons.style';

const GENDER_LIST: { type: GenderType; value: string }[] = [
  { type: 'm', value: '남' },
  { type: 'f', value: '여' },
  { type: 'x', value: 'X' },
];

export const GenderBtnList = () => {
  const [signUpState, setSignUpState] = useAtom(signUpStateAtom);

  return (
    <GenderBtnListContainer>
      <SubTextBox>성별</SubTextBox>
      <GenderContainer>
        {GENDER_LIST.map(({ type, value }) => (
          <SelectBtn
            onClick={() => setSignUpState({ ...signUpState, gender: type })}
            disable={signUpState.gender === type}
            key={type}
          >
            {value}
          </SelectBtn>
        ))}
      </GenderContainer>
    </GenderBtnListContainer>
  );
};
