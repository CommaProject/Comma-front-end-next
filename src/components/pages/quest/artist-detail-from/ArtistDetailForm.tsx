import { Avata } from '@/components/common/avata';
import { MusicAlbumFrom } from '../music-album-form';
import { getSpotifyArtistProps, getTrackProps } from '@/apis/search';
import * as style from './ArtistDetailForm.style';

interface ArtistDetailFormProps {
    soptifyArtistData: getSpotifyArtistProps;
    spotifyTrackData: getTrackProps[];
    isLike: boolean;

}

export const ArtistDetailForm = ({ soptifyArtistData, spotifyTrackData, isLike }: ArtistDetailFormProps) => {
    return (
        <style.Wrapper>
            <style.AvatarBox>
                <Avata
                    url={'https://direct.samsunglife.com/upload/202103/16084.jpg'}
                    // url={soptifyArtistData.images[2].url}
                    size={89}
                />
                {/* <style.AvatartName>{soptifyArtistData.artistName}</style.AvatartName> */}
                <style.AvatarGroupName>test</style.AvatarGroupName>
                <style.LikeButton isLike={isLike} />
            </style.AvatarBox>
            <MusicAlbumFrom musicData={spotifyTrackData?.map((value) => ({
                ...value,
                isLike: false,
            }))}
                onClickPlusButton={() => { }}
                onClickLikeButton={(trackId: string) => { }}
                onClick={() => { }}
            />
        </style.Wrapper>
    );

}