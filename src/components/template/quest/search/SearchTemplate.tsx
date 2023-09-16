import { LineInput } from '@/components/pages/quest/line-input';
import { TextList } from '@/components/pages/quest/search/text-list/TextList';
import { Dispatch, SetStateAction } from 'react';
import { getHistoryProps } from '@/types/searchTypes';
import { CategoryButtons } from '@/components/pages/quest/search/text-list/category-buttons/CategoryButtons';

import * as style from './SearchTemplate.style';

interface SearchTemplateProps {
  textList: getHistoryProps[] | undefined;
  isAutocomplete_: boolean;
  category: string;
  onClickCategory: (category: string) => void;
  onClickSearchItem: (searchItem: string) => void;
  onClickDeleteItem: (index: number) => void;
  onEnterKeyPress: () => void;
  onClickEraseIcon: () => void;
  onClickCancelKeyPress: () => void;
  onChangeSearchText: (text: string) => void;
  completedText: string;
}

export const SearchTemplate = ({
  textList,
  isAutocomplete_,
  category,
  onClickCategory,
  onClickSearchItem,
  onClickDeleteItem,
  onEnterKeyPress,
  onClickEraseIcon,
  onClickCancelKeyPress,
  onChangeSearchText,
  completedText,
}: SearchTemplateProps) => (
  <style.Wrapper>
    <LineInput
      onChangeSearchText={onChangeSearchText}
      handleEnterKeyPress={onEnterKeyPress}
      handleEraseIconClick={onClickEraseIcon}
      handleCancelButtonClick={onClickCancelKeyPress}
      completedText={completedText}
    />
    <CategoryButtons
      isHidden={false}
      onClickCategory={(category_: string) => {
        onClickCategory(category_);
      }}
      category={category}
    />
    <TextList
      isAutoComplete={isAutocomplete_}
      textMap={textList}
      onClickSearchItem={onClickSearchItem}
      onClickDeleteItem={onClickDeleteItem}
    />
  </style.Wrapper>
);
