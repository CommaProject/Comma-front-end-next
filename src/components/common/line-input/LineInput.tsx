import { MouseEventHandler } from 'react';
import * as style from './LineInput.style';

interface LineInputProps {
  handleEnterKeyPress: () => void;
  handleEraseIconClick: (event: any) => void;
  handleCancelButtonClick: (event: any) => void;
}

export const LineInput = ({
  handleEnterKeyPress,
  handleEraseIconClick,
  handleCancelButtonClick,
}: LineInputProps) => (
  <style.Wrapper>
    <style.SearchIcon />
    <style.Input
      type="text"
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
