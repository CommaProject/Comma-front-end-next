import { SearchTemplate } from '@/components/template/quest/search';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { deleteHistoryAsync } from '@/apis/search';
import { useQueryClient } from '@tanstack/react-query';
import { getHistoryProps } from '@/constants/types/searchTypes';
import { atom, useAtom } from 'jotai';
import { searchAtom } from '@/stores/atoms';

const Search = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  // Music, Artist, CommaUser
  const [searchItems, setSearchItems] = useAtom(searchAtom);
  const { searchHistory, mutateSearchHistory } = useSearch();
  const [completedText, setCompletedText] = useState('');
  const [historyTextArray, setHistoryTextArray] = useState<getHistoryProps[]>();
  const handleOnClickDeleteItem = (index: number) => {
    console.log(index);
    deleteHistoryAsync(index);
    queryClient.invalidateQueries(['searchHistory']); // 수정 낙관적
  };

  // 수정 탐색페이지에 들어올 때로 수정
  // 삭제, 전체 삭제
  useEffect(() => {
    if (
      searchHistory?.isSuccess &&
      searchHistory.result.data &&
      !('errors' in searchHistory.result.data)
    ) {
      setHistoryTextArray(searchHistory.result.data);
    }
  }, []);
  const handleCategory = (category: string) => {
    setSearchItems((prevState) => ({
      ...prevState,
      category,
    }));
  };
  const handleOnClickSearchItem = (historyItem: string) => {
    setSearchItems((prevState) => ({
      ...prevState,
      searchText: historyItem,
    }));
    setCompletedText(historyItem);
    router.push({
      pathname: '/quest/completedSearch',
    });
  };
  const handleEnterKeyPress = useCallback(() => {
    setSearchItems((prevState) => ({
      ...prevState,
      searchText: completedText,
    }));
    mutateSearchHistory(completedText);
    if (
      searchHistory?.isSuccess &&
      searchHistory.result.data &&
      !('errors' in searchHistory.result.data)
    ) {
      setHistoryTextArray(searchHistory?.result.data);
    }
    router.push({
      pathname: '/quest/completedSearch',
    });
  }, [searchHistory, completedText]);
  const handleOnClickEraseIcon = () => {
    setCompletedText(() => '');
  };
  const handleChangeSearchText = (text: string) => {
    setSearchItems((prevState) => ({
      ...prevState,
      searchText: text,
    }));
  };
  const handleOnClickCancelIcon = () => {
    window.history.back();
  };

  return (
    <SearchTemplate
      key="SearchTemplate"
      textList={historyTextArray}
      isAutocomplete_={false}
      category={searchItems.category}
      onClickCategory={handleCategory}
      onClickDeleteItem={handleOnClickDeleteItem}
      onClickSearchItem={handleOnClickSearchItem}
      onEnterKeyPress={handleEnterKeyPress}
      onClickEraseIcon={handleOnClickEraseIcon}
      onClickCancelKeyPress={handleOnClickCancelIcon}
      completedText={searchItems.searchText}
      onChangeSearchText={handleChangeSearchText}
    />
  );
};

export default Search;

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}
