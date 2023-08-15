import { SearchTemplate } from '@/components/template/quest/search';

const search = () => {
  const handleOnClickDeleteItem = (idnex: number) => {
    console.log(idnex);
  };
  const handleOnClickSearchItem = (searchItem: string) => {
    console.log(searchItem);
  };
  const handleEnterKeyPress = () => {};
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

export default search;
