import { Avata } from '@/components/common/avata';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { EnhancedTrackProps } from '@/types/trackTypes';
import { MusicAlbumFrom } from '../music-album-form';
import * as style from './ArtistDetailForm.style';

interface ArtistDetailFormProps {
  soptifyArtistData: SpotifyArtistProps | undefined;
  spotifyTrackData: EnhancedTrackProps[];
  onClickFavorite: (trackId: string) => void;
  onClickFavoriteArtist: (artistId: string) => void;
  openMusicPlayer: string;
  onClickAlbumBox: (previewUrl: string, trackId: string) => void;
}

export const ArtistDetailForm = ({
  soptifyArtistData,
  spotifyTrackData,
  onClickFavorite,
  onClickFavoriteArtist,
  openMusicPlayer,
  onClickAlbumBox,
}: ArtistDetailFormProps) => (
  <style.Wrapper>
    <style.AvatarBox>
      <Avata
        url={
          soptifyArtistData && soptifyArtistData.images[2] !== undefined
            ? soptifyArtistData.images[2].url
            : '~/src/assets/images/noImage.png'
        }
        size={89}
      />
      <style.AvatartName>{soptifyArtistData?.artistName}</style.AvatartName>
      <style.LikeButton
        isFavorite={false} // Avata isFavorite
        onClick={() => {
          onClickFavoriteArtist(
            soptifyArtistData?.artistId !== undefined
              ? soptifyArtistData?.artistId
              : 'artistId is undefined', // error 처리 필요
          );
        }}
      />
    </style.AvatarBox>

    <MusicAlbumFrom
      openMusicPlayer={openMusicPlayer}
      musicData={spotifyTrackData}
      onClickPlusButton={() => {}}
      onClickFavoriteButton={(trackId: string) => {}}
      onClickAlbumBox={onClickAlbumBox}
      isPreviewMusicPlayerHidden={false}
    />
  </style.Wrapper>
);
