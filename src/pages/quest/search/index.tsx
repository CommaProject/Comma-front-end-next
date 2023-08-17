import Search from './search';

export default Search;

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}
