import { SearchTemplate } from '@/components/template/quest/search';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '@/hooks/useSearch';

const Search = () => {
  const router = useRouter();
  // Music, Artist, CommaUser
  const { searchHistory } = useSearch();
  const [completedText, setCompletedText] = useState('');
  const [historyArray_, setHistoryArray_] = useState<string[]>();
  useEffect(() => {
    const getHistoryArrayLocalState = localStorage.getItem(
      'recentSearchHistory',
    );
    setHistoryArray_(
      getHistoryArrayLocalState ? JSON.parse(getHistoryArrayLocalState) : [],
    );
  }, []);

  const handleOnClickDeleteItem = (index: number) => {
    if (historyArray_ && index >= 0 && index < historyArray_.length) {
      const newArray = [...historyArray_];
      newArray.splice(index, 1);
      setHistoryArray_(newArray);
    } else {
      console.error('Invalid index');
    }
  };
  const handleOnClickSearchItem = (searchItem: string) => {
    setCompletedText(searchItem);
    router.push({
      pathname: '/quest/completedSearch',
      query: { searchText: searchItem },
    });
  };
  const handleEnterKeyPress = () => {
    console.log('searchHistory', searchHistory);
    // 최근 기록
    const existingHistory = localStorage.getItem('recentSearchHistory');
    const historyArray = existingHistory ? JSON.parse(existingHistory) : [];

    historyArray.push(completedText);
    localStorage.setItem('recentSearchHistory', JSON.stringify(historyArray));
    setHistoryArray_(historyArray);
    router.push({
      pathname: '/quest/completedSearch',
      query: { searchText: completedText },
    });
  };
  const handleOnClickEraseIcon = () => {
    setCompletedText(() => '');
  };

  const handleOnClickCancelIcon = () => {
    window.history.back();
  };

  return (
    <SearchTemplate
      key="SearchTemplate"
      textList={historyArray_ || []}
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
