import { SearchTemplate } from '@/components/template/quest/search';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  // Music, Artist, CommaUser

  const [completedText, setCompletedText] = useState('');

  const handleOnClickDeleteItem = (idnex: number) => {
    console.log(idnex);
  };
  const handleOnClickSearchItem = (searchItem: string) => {
    console.log(searchItem);
  };
  const handleEnterKeyPress = () => {
    router.push({
      pathname: '/quest/completedSearch',
      query: { searchText: completedText },
    });
  };
  const handleOnClickEraseIcon = () => {};
  const handleOnClickCancelIcon = () => {};

  return (
    <SearchTemplate
      key="SearchTemplate"
      textList={['Item 1', 'Item 2', 'Item 3']}
      isAutocomplete_={false}
      onClickDeleteItem={handleOnClickDeleteItem}
      onClickSearchItem={handleOnClickSearchItem}
      onEnterKeyPress={handleEnterKeyPress}
      onClickEraseIcon={handleOnClickEraseIcon}
      onClickCancelKeyPress={handleOnClickCancelIcon}
      setCompletedText={setCompletedText}
    />
  );
};

export default Search;
