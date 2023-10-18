import * as style from './RoundInput.style';

interface RoundInputProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
  handleEraseIconClick: (event: any) => void;
  isSearchResults: boolean;
  isHidden: boolean;
}

export const RoundInput = ({
  completedTextValue,
  onClickRoundInput,
  handleEraseIconClick,
  isSearchResults,
  isHidden,
}: RoundInputProps) => (
  <style.Wrapper hidden={isHidden}>
    <style.SearchIcon />
    <style.Input
      value={completedTextValue}
      onClick={onClickRoundInput}
      readOnly
    />
    {isSearchResults ? (
      <style.EraseIcon onClick={handleEraseIconClick} />
    ) : null}
  </style.Wrapper>
);
