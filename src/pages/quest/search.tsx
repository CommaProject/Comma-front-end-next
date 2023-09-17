import { SearchTemplate } from '@/components/template/quest/search';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { getHistoryProps } from '@/constants/types/searchTypes';
import { useAtom } from 'jotai';
import { searchAtom } from '@/stores/atoms';

const Search = () => {
  const router = useRouter();
  // Music, Artist, CommaUser
  const [searchItems, setSearchItems] = useAtom(searchAtom);
  const {
    searchHistory,
    mutateSearchHistory,
    useMutationDeleteHistory,
    useMutationDeleteAllHistory,
  } = useSearch();
  const [historyTextArray, setHistoryTextArray] = useState<getHistoryProps[]>();
  const handleOnClickDeleteItem = (index: number) => {
    useMutationDeleteHistory.mutate(index);
  };

  useEffect(() => {
    if (searchHistory !== undefined) {
      const reaverseSearchHistory = searchHistory.sort((a, b) => b.id - a.id);
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
    useMutationDeleteAllHistory.mutate();
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
