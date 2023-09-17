import { SearchTemplate } from '@/components/template/quest/search';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { deleteHistoryAsync, deleteAllHistoryAsync } from '@/apis/search';
import { useQueryClient } from '@tanstack/react-query';
import { getHistoryProps } from '@/constants/types/searchTypes';
import { useAtom } from 'jotai';
import { searchAtom } from '@/stores/atoms';

const Search = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  // Music, Artist, CommaUser
  const [searchItems, setSearchItems] = useAtom(searchAtom);
  const { searchHistory, mutateSearchHistory } = useSearch();
  const [historyTextArray, setHistoryTextArray] = useState<getHistoryProps[]>();
  const handleOnClickDeleteItem = (index: number) => {
    console.log(index);
    deleteHistoryAsync(index);
    // queryClient.invalidateQueries(['searchHistory']); // 수정 낙관적
  };

  // 수정 탐색페이지에 들어올 때로 수정
  // 삭제, 전체 삭제
  useEffect(() => {
    if (
      searchHistory?.isSuccess &&
      searchHistory.result.data &&
      !('errors' in searchHistory.result.data)
    ) {
      const reaverseSearchHistory = searchHistory.result.data.sort(
        (a, b) => b.id - a.id,
      );
      setHistoryTextArray(reaverseSearchHistory);
    }
  }, [searchHistory]);

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
    router.push({
      pathname: '/quest/completedSearch',
    });
  };
  const handleEnterKeyPress = useCallback(() => {
    mutateSearchHistory(searchItems.searchText);
    router.push({
      pathname: '/quest/completedSearch',
    });
  }, [searchItems.searchText]);

  const handleOnClickEraseIcon = () => {
    setSearchItems((prevState) => ({
      ...prevState,
      searchText: '',
    }));
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
  const handleAllHistoryDelete = () => {
    deleteAllHistoryAsync();
  };
  return (
    <SearchTemplate
      key="SearchTemplate"
      textList={historyTextArray}
      isAutocomplete_={false}
      category={searchItems.category}
      onClickCategory={handleCategory}
      onClickDeleteItem={handleOnClickDeleteItem}
      onClickAllHistoryDelete={handleAllHistoryDelete}
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
