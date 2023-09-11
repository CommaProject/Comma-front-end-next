import { useState } from 'react';
import * as style from './RoundInput.style';

interface RoundInputProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
  handleEraseIconClick: (event: any) => void;
  isCompletedSearch: boolean;
  isHidden: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RoundInput = ({
  completedTextValue,
  onClickRoundInput,
  handleEraseIconClick,
  isCompletedSearch,
  isHidden,
  onChange,
}: RoundInputProps) => {
  return (
    <style.Wrapper hidden={isHidden}>
      <style.SearchIcon />
      <style.Input onClick={onClickRoundInput} onChange={onChange} />
      {isCompletedSearch ? (
        <style.EraseIcon onClick={handleEraseIconClick} />
      ) : null}
    </style.Wrapper>
  );
};
