import { Avata } from '@/components/common/avata';
import { SpotifyArtistProps, TrackProps } from '@/types/search';
import noImage from '~/src/assets/images/noImage.png';
import { MusicAlbumFrom } from '../music-album-form';
import * as style from './ArtistDetailForm.style';

interface ArtistDetailFormProps {
  soptifyArtistData: SpotifyArtistProps | undefined;
  spotifyTrackData: TrackProps[] | undefined;
  isLike: boolean;
}

export const ArtistDetailForm = ({
  soptifyArtistData,
  spotifyTrackData,
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
        onClickLikeButton={(trackId: string) => {}}
        onClick={() => {}}
      />
    </style.Wrapper>
  );
};
