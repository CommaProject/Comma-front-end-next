import { SearchTemplate } from '@/components/template/quest/search';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { deleteHistoryAsync } from '~/src/apis/search';
import { useQueryClient } from '@tanstack/react-query';
import { getHistoryProps } from '@/types/search';

const Search = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  // Music, Artist, CommaUser
  const { searchHistory, mutateSearchHistory } = useSearch();
  const [completedText, setCompletedText] = useState('');
  const [historyTextArray, setHistoryTextArray] = useState<getHistoryProps[]>();
  const handleOnClickDeleteItem = (index: number) => {
    console.log(index);
    deleteHistoryAsync(index);
    queryClient.invalidateQueries(['searchHistory']);
  };
  useEffect(() => {
    if (
      searchHistory?.isSuccess &&
      searchHistory.result.data &&
      !('errors' in searchHistory.result.data)
    ) {
      setHistoryTextArray(searchHistory.result.data);
    }
  }, []);

  const handleOnClickSearchItem = (searchItem: string) => {
    setCompletedText(searchItem);
    router.push({
      pathname: '/quest/completedSearch',
      query: { searchText: searchItem },
    });
  };
  const handleEnterKeyPress = useCallback(() => {
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
      query: { searchText: completedText },
    });
  }, [searchHistory, completedText]);
  const handleOnClickEraseIcon = () => {
    setCompletedText(() => '');
  };

  const handleOnClickCancelIcon = () => {
    window.history.back();
  };

  return (
    <SearchTemplate
      key="SearchTemplate"
      textList={historyTextArray}
      isAutocomplete_={false}
      onClickDeleteItem={handleOnClickDeleteItem}
      onClickSearchItem={handleOnClickSearchItem}
      onEnterKeyPress={handleEnterKeyPress}
      onClickEraseIcon={handleOnClickEraseIcon}
      onClickCancelKeyPress={handleOnClickCancelIcon}
      completedText={completedText}
      setCompletedText={setCompletedText}
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
