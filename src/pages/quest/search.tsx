import { SearchTemplate } from '@/components/template/quest/search';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';
import { deleteHistoryAsync } from '~/src/apis/search';

const Search = () => {
  const router = useRouter();
  // Music, Artist, CommaUser
  const { searchHistory, mutateSearchHistory } = useSearch();
  const [completedText, setCompletedText] = useState('');
  const [historyArray_, setHistoryArray_] = useState<string[]>();
  useEffect(() => {}, []);

  const handleOnClickDeleteItem = (index: number) => {
    deleteHistoryAsync(index);
  };

  const handleOnClickSearchItem = (searchItem: string) => {
    setCompletedText(searchItem);
    router.push({
      pathname: '/quest/completedSearch',
      query: { searchText: searchItem },
    });
  };
  const handleEnterKeyPress = useCallback(() => {
    // mutateSearchHistory(completedText);
    console.log('searchHistory', searchHistory?.result.data);
    // setHistoryArray_(searchHistory);
    router.push({
      pathname: '/quest/completedSearch',
      query: { searchText: completedText },
    });
  }, [searchHistory]);
  const handleOnClickEraseIcon = () => {
    setCompletedText(() => '');
  };

  const handleOnClickCancelIcon = () => {
    window.history.back();
  };

  return (
    <SearchTemplate
      key="SearchTemplate"
      textList={searchHistory?.isSuccess ? searchHistory?.result.data : null}
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
