import { SearchTemplate } from '@/components/template/quest/search';
import { useState } from 'react';
import { getSpotifyArtistAsync } from '~/src/apis/search';
import { useSearch } from '@/hooks/useSearch';

const Search = () => {
  // Music, Artist, CommaUser

  const { mutateArtist, mutateTrack, mutateCommaUser } = useSearch();

  const [searchTarget, setSearchTarget] = useState('Music');
  const [completedText, setCompletedText] = useState('');

  const handleOnClickDeleteItem = (idnex: number) => {
    console.log(idnex);
  };
  const handleOnClickSearchItem = (searchItem: string) => {
    console.log(searchItem);
  };
  const handleEnterKeyPress = () => {
    // mutateArtist(completedText);
    // mutateCommaUser(completedText);
    mutateTrack(completedText);
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
