import React from 'react';
import { getSpotifyArtistProps } from '@/apis/search';
import { Avata } from '@/components/common/avata';
import * as style from './ArtistAvataFrom.style';

interface ArtistAvataFromProps {
  artistData: getSpotifyArtistProps[];
}

export const ArtistAvataFrom = ({ artistData }: ArtistAvataFromProps) => {
  console.log('artistData', artistData);
  return (
    <style.Wrapper>
      {artistData.map((value) => (
        <style.AvatarBox>
          <Avata
            key={value.artistId}
            url={value.images ? value.images[2]?.url : 'error: undefined'}
            size={89}
          />
          <style.AvatarArtistName>{value.artistName}</style.AvatarArtistName>
        </style.AvatarBox>
      ))}
    </style.Wrapper>
  );
};
