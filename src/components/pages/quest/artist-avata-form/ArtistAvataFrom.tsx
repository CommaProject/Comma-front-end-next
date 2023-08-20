import React from 'react';
import { getCommaUserProps, getSpotifyArtistProps } from '@/apis/search';
import { Avata } from '@/components/common/avata';
import * as style from './ArtistAvataFrom.style';

interface ArtistAvataFromProps {
  artistData: getSpotifyArtistProps[] | undefined;
  commaUserData: getCommaUserProps[] | undefined;
}

export const ArtistAvataFrom = ({
  artistData,
  commaUserData,
}: ArtistAvataFromProps) => {
  console.log('artistData', artistData);
  return (
    <style.Wrapper>
      {artistData &&
        artistData.map((value) => (
          <style.AvatarBox key={value.artistId}>
            <Avata
              url={value.images ? value.images[2]?.url : 'error: undefined'}
              size={89}
            />
            <style.AvatartName>{value.artistName}</style.AvatartName>
          </style.AvatarBox>
        ))}

      {commaUserData &&
        commaUserData.map((value) => (
          <style.AvatarBox key={value.userId}>
            <Avata
              url={value.profileImage ? value.profileImage : 'error: undefined'}
              size={89}
            />
            <style.AvatartName>{value.nickName}</style.AvatartName>
          </style.AvatarBox>
        ))}
    </style.Wrapper>
  );
};
