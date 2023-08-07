import React from 'react';
import { AlbumProps } from '@/types/albumTypes';
import * as style from './VerticalAlbum.style';
import { Album } from '../Album';

interface VerticalAlbumProps extends AlbumProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const VerticalAlbum = ({
  imgUrl,
  songName,
  singerName,
  onClick,
}: VerticalAlbumProps) => (
  <style.Wrapper onClick={onClick}>
    <Album url={imgUrl} />
    <style.SongName>{songName}</style.SongName>
    <style.SingerName>{singerName}</style.SingerName>
  </style.Wrapper>
);
