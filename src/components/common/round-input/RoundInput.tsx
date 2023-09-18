import * as style from './RoundInput.style';

interface RoundInputProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
  handleEraseIconClick: (event: any) => void;
  issearchResults: boolean;
  isHidden: boolean;
}

export const RoundInput = ({
  completedTextValue,
  onClickRoundInput,
  handleEraseIconClick,
  issearchResults,
  isHidden,
}: RoundInputProps) => (
  <style.Wrapper hidden={isHidden}>
    <style.SearchIcon />
    <style.Input
      value={completedTextValue}
      onClick={onClickRoundInput}
      readOnly
    />
    {issearchResults ? (
      <style.EraseIcon onClick={handleEraseIconClick} />
    ) : null}
  </style.Wrapper>
);
