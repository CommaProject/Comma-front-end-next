import { Avata } from '@/components/common/avata';
import { getSpotifyArtistProps, getTrackProps } from '@/apis/search';
import { MusicAlbumFrom } from '../music-album-form';
import * as style from './ArtistDetailForm.style';

interface ArtistDetailFormProps {
  soptifyArtistData: getSpotifyArtistProps | undefined;
  spotifyTrackData: getTrackProps[];
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
            soptifyArtistData ? soptifyArtistData.images[2].url : 'undefined'
          }
          size={89}
        />
        {/* <style.AvatartName>{soptifyArtistData.artistName}</style.AvatartName> */}
        <style.AvatarGroupName>test</style.AvatarGroupName>
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
