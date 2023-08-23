import * as style from './RoundInput.style';

interface RoundInputProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
  handleEraseIconClick: (event: any) => void;
  isCompletedSearch: boolean;
  isHidden: boolean;
}

export const RoundInput = ({
  completedTextValue,
  onClickRoundInput,
  handleEraseIconClick,
  isCompletedSearch,
  isHidden,
}: RoundInputProps) => (
  <style.Wrapper hidden={isHidden}>
    <style.SearchIcon />
    <style.Input value={completedTextValue} onClick={onClickRoundInput} />
    {isCompletedSearch ? (
      <style.EraseIcon onClick={handleEraseIconClick} />
    ) : null}
  </style.Wrapper>
);
