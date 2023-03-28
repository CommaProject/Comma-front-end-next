import { useRouter } from 'next/router';

import NavigationHomeSvg from '@/assets/icons/NavigationHome.svg';
import NavigationHomeSelected from '@/assets/icons/NavigationHomeSeleted.svg';
import NavigationPlaylistSvg from '@/assets/icons/NavigationPlaylist.svg';
import NavigationPlaylistSelected from '@/assets/icons/NavigationPlaylistSeleted.svg';
import NavigationSearchSvg from '@/assets/icons/NavigationSearch.svg';
import NavigationSearchSelected from '@/assets/icons/NavigationSearchSeleted.svg';
import NavigationProfileSvg from '@/assets/icons/NavigationProfile.svg';
import NavigationProfileSelected from '@/assets/icons/NavigationProfileSeleted.svg';

import * as style from './Navigation.style';

const Navigation = () => {
  const router = useRouter();
  const currentFirstPath = router.pathname.split('/')[1];

  const moveToPage = (path: string) => {
    router.push(`/${path}`);
  };

  const NavigationIcon = [
    {
      path: '',
      notSelected: <NavigationHomeSvg onClick={() => moveToPage('/')} />,
      selected: <NavigationHomeSelected />,
    },
    {
      path: 'playlist',
      notSelected: (
        <NavigationPlaylistSvg onClick={() => moveToPage('/playlist')} />
      ),
      selected: <NavigationPlaylistSelected />,
    },
    {
      path: 'search',
      notSelected: (
        <NavigationSearchSvg onClick={() => moveToPage('/search')} />
      ),
      selected: <NavigationSearchSelected />,
    },
    {
      path: 'profile',
      notSelected: (
        <NavigationProfileSvg onClick={() => moveToPage('/profile')} />
      ),
      selected: <NavigationProfileSelected />,
    },
  ];

  return (
    <style.Wrapper>
      {NavigationIcon.map(({ path, notSelected, selected }) =>
        currentFirstPath === path ? selected : notSelected,
      )}
    </style.Wrapper>
  );
};

export default Navigation;
