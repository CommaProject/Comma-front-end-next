import { Dispatch, SetStateAction } from 'react';
import * as style from './LineInput.style';

interface LineInputProps {
  handleEnterKeyPress: () => void;
  handleEraseIconClick: (event: any) => void;
  handleCancelButtonClick: (event: any) => void;
  setCompletedText: Dispatch<SetStateAction<string>>;
  completedText: string;
}

export const LineInput = ({
  handleEnterKeyPress,
  handleEraseIconClick,
  handleCancelButtonClick,
  setCompletedText,
  completedText,
}: LineInputProps) => (
  <style.Wrapper>
    <style.SearchIcon />
    <style.Input
      type="text"
      value={completedText}
      onChange={(e) => setCompletedText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleEnterKeyPress();
        }
      }}
    />
    <style.EraseIcon onClick={handleEraseIconClick} />
    <style.CancelButton onClick={handleCancelButtonClick}>
      취소
    </style.CancelButton>
  </style.Wrapper>
);
