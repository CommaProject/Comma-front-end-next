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
      path: 'home',
      notSelected: (
        <NavigationHomeSvg key="Home" onClick={() => moveToPage('/')} />
      ),
      selected: <NavigationHomeSelected key="Home" />,
    },
    {
      path: 'playlist',
      notSelected: (
        <NavigationPlaylistSvg
          key="Playlist"
          onClick={() => moveToPage('/playlist')}
        />
      ),
      selected: <NavigationPlaylistSelected key="Playlist" />,
    },
    {
      path: 'quest',
      notSelected: (
        <NavigationSearchSvg key="Quest" onClick={() => moveToPage('/quest')} />
      ),
      selected: <NavigationSearchSelected key="Quest" />,
    },
    {
      path: 'profile',
      notSelected: (
        <NavigationProfileSvg
          key="Profile"
          onClick={() => moveToPage('/myprofile')}
        />
      ),
      selected: <NavigationProfileSelected key="Profile" />,
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
