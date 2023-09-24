import { Avata } from '@/components/common/avata';
import { SpotifyArtistProps } from '@/types/searchTypes';
import { TrackType } from '@/types/trackTypes';
import { MusicAlbumFrom } from '../music-album-form';
import * as style from './ArtistDetailForm.style';

interface ArtistDetailFormProps {
  
  artistImage: string;
  artistName: string;
  spotifyTrackData: TrackType[] | undefined;
  isLike: boolean;
}

export const ArtistDetailForm = ({
 
  artistImage,
  artistName,
  spotifyTrackData,
  isLike,
}: ArtistDetailFormProps) =>  (
    <style.Wrapper>
      <style.AvatarBox>
        <Avata
          url={
            artistImage && artistImage !== undefined
              ? artistImage
              : '~/src/assets/images/noImage.png'

          }
          size={89}
        />
        <style.AvatartName>{artistName}</style.AvatartName>
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

