import { SearchTemplate } from '@/components/template/quest/search';
import { useState } from 'react';
import { getSpotifyArtistNameAsync } from '~/src/apis/search';
import { useSearch } from '@/hooks/useSearch';

const Search = () => {
  // Music, Artist, CommaUser

  const { mutate } = useSearch();

  const [searchTarget, setSearchTarget] = useState('Music');

  const handleOnClickDeleteItem = (idnex: number) => {
    console.log(idnex);
  };
  const handleOnClickSearchItem = (searchItem: string) => {
    console.log(searchItem);
  };
  const handleEnterKeyPress = () => {
    // console.log('getSpotifyArtistNameAsync', getSpotifyArtistNameAsync('IU'));
    mutate('artistName');
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
    />
  );
};

export default Search;
