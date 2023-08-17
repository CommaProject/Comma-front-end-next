import * as style from './RoundInput.style';

interface RoundInputProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
}

export const RoundInput = ({
  completedTextValue,
  onClickRoundInput,
}: RoundInputProps) => (
  <style.Wrapper>
    <style.SearchIcon />
    <style.Input value={completedTextValue} onClick={onClickRoundInput} />
  </style.Wrapper>
);
