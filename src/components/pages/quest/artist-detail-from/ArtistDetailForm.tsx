import { Avata } from '@/components/common/avata';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { TrackType } from '@/types/trackTypes';
import { MusicAlbumFrom } from '../music-album-form';
import * as style from './ArtistDetailForm.style';

interface ArtistDetailFormProps {
  soptifyArtistData: SpotifyArtistProps | undefined;
  spotifyTrackData: TrackType[] | undefined;
  onClickFavorite: (trackId: string) => void;
  onClickFavoriteArtist: (artistId: string) => void;
  isLike: boolean;
  openMusicPlayer: string;
  onClickAlbumBox: (previewUrl: string, trackId: string) => void;
}

export const ArtistDetailForm = ({
  soptifyArtistData,
  spotifyTrackData,
  onClickFavorite,
  onClickFavoriteArtist,
  isLike,
  openMusicPlayer,
  onClickAlbumBox,
}: ArtistDetailFormProps) => {
  console.log('soptifyArtistData', soptifyArtistData);
  return (
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
          isLike={isLike}
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
        musicData={spotifyTrackData?.map((value) => ({
          ...value,
          isLike: false,
        }))}
        onClickPlusButton={() => {}}
        onClickLikeButton={(trackId: string) => {}}
        onClickAlbumBox={onClickAlbumBox}
        isPreviewMusicPlayerHidden={false}
      />
    </style.Wrapper>
  );
};
