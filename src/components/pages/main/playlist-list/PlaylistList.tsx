import * as style from './PlaylistList.style';

const ALBUMS = ['1', '2', '3', '4', '5'];
export const PlaylistList = () => (
  <style.Wrapper>
    {ALBUMS.map((album) => (
      <style.Album key={album}>{album}</style.Album>
    ))}
  </style.Wrapper>
);
