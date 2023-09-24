import React from 'react';
import { Avata, VerticalAvata } from '@/components/common/avata';
import { SpotifyArtistProps } from '@/constants/types/searchTypes';
import { CommaUserType } from '@/types/authTypes';
import { FavoriteArtistType } from '@/constants/types/artistTypes';
import * as style from './ArtistAvataFrom.style';


interface ArtistAvataFromProps {
  artistData: SpotifyArtistProps[] | undefined;
  commaUserData: CommaUserType[] | undefined;
  onArtistAvataClick: (value: SpotifyArtistProps) => void;
  onClickFavoriteArtistDetail: (value: FavoriteArtistType) => void;
  favoriteArtistData: FavoriteArtistType[] | undefined;
}

export const ArtistAvataFrom = ({
  artistData,
  commaUserData,
  onArtistAvataClick,
  favoriteArtistData,
  onClickFavoriteArtistDetail,
}: ArtistAvataFromProps) => (
  <style.Wrapper>
    {artistData &&
      artistData.map((value) => (
        <VerticalAvata
          key={value.artistId}
          onClick={() => {
            onArtistAvataClick(value);
          }}

          avatarImage={value.images ? value.images[2]?.url : 'error: undefined'}

          avartarName={value.artistName}
        />
      ))}

    {commaUserData &&
      commaUserData.map((value) => (
        <VerticalAvata
          key={value.userId}
          avatarImage={value.profileImage}
          avartarName={value.nickName}
          onClick={() => {}}
        />
      ))}
    {favoriteArtistData &&
      favoriteArtistData.map((value) => (
        <VerticalAvata
          key={value.favoriteArtistId}
          avatarImage={value.artistImageUrl}
          avartarName={value.artistName}
          onClick={() => {
            onClickFavoriteArtistDetail(value);
          }}
        />
      ))}
  </style.Wrapper>
);
