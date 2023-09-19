import { Avata } from '@/components/common/avata';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { TrackType } from '@/types/trackTypes';
import { MusicAlbumFrom } from '../music-album-form';
import * as style from './ArtistDetailForm.style';

interface ArtistDetailFormProps {
  soptifyArtistData: SpotifyArtistProps | undefined;
  spotifyTrackData: TrackType[] | undefined;
  isLike: boolean;
  openMusicPlayer: string;
  onClickAlbumBox: (previewUrl: string, trackId: string) => void;
}

export const ArtistDetailForm = ({
  soptifyArtistData,
  spotifyTrackData,
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
              : 'no image'
          }
          size={89}
        />
        <style.AvatartName>{soptifyArtistData?.artistName}</style.AvatartName>
        <style.LikeButton isLike={isLike} />
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
