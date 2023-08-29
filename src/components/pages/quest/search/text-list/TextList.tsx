import React from 'react';
import { getHistoryProps } from '@/types/search';
import * as style from './TextList.style';

interface TextListProps {
  onClickSearchItem: (searchItem: string) => void;
  onClickDeleteItem: (index: number) => void;
  isAutoComplete: boolean;
  textMap: getHistoryProps[] | undefined;
}

export const TextList = ({
  isAutoComplete,
  textMap,
  onClickSearchItem,
  onClickDeleteItem,
}: TextListProps) => (
  <style.Wrapper>
    <style.AllDeleteSearchBox>
      <style.RecentText>최근검색어</style.RecentText>
      <style.AllDeleteSearchText>전체삭제</style.AllDeleteSearchText>
    </style.AllDeleteSearchBox>

    <style.SearchItemBox>
      {textMap
        ? textMap.map((search, index) => (
            <style.SearchItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onClick={() => {
                if (onClickSearchItem) {
                  onClickSearchItem(search.searchHistory);
                }
              }}
            >
              {search.searchHistory}
              {isAutoComplete ? null : (
                <style.DeleteSearchItem
                  onClick={(event) => {
                    event.stopPropagation(); // 이벤트 버블링 막기
                    if (onClickDeleteItem) {
                      onClickDeleteItem(search.id);
                    }
                  }}
                />
              )}
            </style.SearchItem>
          ))
        : null}
    </style.SearchItemBox>
  </style.Wrapper>
);
