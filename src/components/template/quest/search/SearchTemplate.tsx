import { LineInput } from '~/src/components/pages/quest/line-input';
import { TextList } from '@/components/pages/quest/search/text-list/TextList';
import { Dispatch, SetStateAction } from 'react';
import * as style from './SearchTemplate.style';

interface SearchTemplateProps {
  textList: string[];
  isAutocomplete_: boolean;
  onClickSearchItem: (searchItem: string) => void;
  onClickDeleteItem: (index: number) => void;
  onEnterKeyPress: () => void;
  onClickEraseIcon: () => void;
  onClickCancelKeyPress: () => void;
  setCompletedText: Dispatch<SetStateAction<string>>;
}

export const SearchTemplate = ({
  textList,
  isAutocomplete_,
  onClickSearchItem,
  onClickDeleteItem,
  onEnterKeyPress,
  onClickEraseIcon,
  onClickCancelKeyPress,
  setCompletedText,
}: SearchTemplateProps) => (
  <style.Wrapper>
    <LineInput
      setCompletedText={setCompletedText}
      handleEnterKeyPress={onEnterKeyPress}
      handleEraseIconClick={onClickEraseIcon}
      handleCancelButtonClick={onClickCancelKeyPress}
    />
    <TextList
      isAutoComplete={isAutocomplete_}
      textMap={textList}
      onClickSearchItem={onClickSearchItem}
      onClickDeleteItem={onClickDeleteItem}
    />
  </style.Wrapper>
);
