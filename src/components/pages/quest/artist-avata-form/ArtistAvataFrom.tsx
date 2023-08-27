import React from 'react';
import { Avata } from '@/components/common/avata';
import { SpotifyArtistProps } from '~/src/constants/types/searchTypes';
import { CommaUserType } from '@/types/authTypes';
import * as style from './ArtistAvataFrom.style';

interface ArtistAvataFromProps {
  artistData: SpotifyArtistProps[] | undefined;
  commaUserData: CommaUserType[] | undefined;
  onArtistAvataClick: (value: SpotifyArtistProps) => void;
}

export const ArtistAvataFrom = ({
  artistData,
  commaUserData,
  onArtistAvataClick,
}: ArtistAvataFromProps) => (
  <style.Wrapper>
    {artistData &&
      artistData.map((value) => (
        <style.AvatarBox
          key={value.artistId}
          onClick={() => {
            onArtistAvataClick(value);
          }}
        >
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
