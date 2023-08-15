import { LineInput } from '@/components/common/line-input';
import { TextList } from '@/components/pages/quest/search/text-list/TextList';
import * as style from './SearchTemplate.style';

interface SearchTemplateProps {
  textList: string[];
  isAutocomplete_: boolean;
  onClickSearchItem: (searchItem: string) => void;
  onClickDeleteItem: (index: number) => void;
  onEnterKeyPress: () => void;
  onClickEraseIcon: () => void;
  onClickCancelKeyPress: () => void;
}

export const SearchTemplate = ({
  textList,
  isAutocomplete_,
  onClickSearchItem,
  onClickDeleteItem,
  onEnterKeyPress,
  onClickEraseIcon,
  onClickCancelKeyPress,
}: SearchTemplateProps) => (
  <style.Wrapper>
    <LineInput
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
