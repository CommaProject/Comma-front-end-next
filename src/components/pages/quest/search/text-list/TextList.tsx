import React from 'react';
import * as style from './TextList.style';

interface TextListProps {
  onClickSearchItem: (searchItem: string) => void;
  onClickDeleteItem: (index: number) => void;
  isAutoComplete: boolean;
  textMap: string[];
}

export const TextList = ({
  isAutoComplete,
  textMap,
  onClickSearchItem,
  onClickDeleteItem,
}: TextListProps) => (
  <style.Wrapper>
    <style.SearchItemBox>
      {textMap.map((search, index) => (
        <style.SearchItem
          key={index}
          onClick={() => {
            if (onClickSearchItem) {
              onClickSearchItem(search);
            }
          }}
        >
          {search}
          {isAutoComplete ? null : (
            <style.DeleteSearchItem
              onClick={(event) => {
                event.stopPropagation(); // 이벤트 버블링 막기
                if (onClickDeleteItem) {
                  onClickDeleteItem(index);
                }
              }}
            />
          )}
        </style.SearchItem>
      ))}
    </style.SearchItemBox>
  </style.Wrapper>
);
