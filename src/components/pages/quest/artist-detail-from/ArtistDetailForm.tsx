import { Avata } from '@/components/common/avata';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { TrackType } from '@/types/trackTypes';
import { MusicAlbumFrom } from '../music-album-form';
import * as style from './ArtistDetailForm.style';

interface ArtistDetailFormProps {
  soptifyArtistData: SpotifyArtistProps | undefined;
  spotifyTrackData: TrackType[] | undefined;
  onClickFavorite: (trackId: string) => void;
  isLike: boolean;
}

export const ArtistDetailForm = ({
  soptifyArtistData,
  spotifyTrackData,
  onClickFavorite,
  isLike,
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
        <style.LikeButton isLike={isLike} />
      </style.AvatarBox>

      <MusicAlbumFrom
        musicData={spotifyTrackData?.map((value) => ({
          ...value,
          isLike: false,
        }))}
        onClickPlusButton={() => {}}
        onClickLikeButton={(trackId: string) => {
          onClickFavorite(trackId);
        }}
        onClick={() => {}}
      />
    </style.Wrapper>
  );
};
