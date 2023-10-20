import { SliderFreeMode } from '@/components/common/slider-free-mode';
import { VerticalAlbum } from '@/components/common/album/vertical-album';
import { TrackFavoritesType } from '@/constants/types/trackTypes';
import { SeeMoreSlideProps } from '@/pages/quest';
import * as style from './MyFavoriteTracks.style';

interface MyFavoriteTracksProps {
    myFavoriteTracks: TrackFavoritesType[];
    onClickNextSlider: (title: string, seeMoreData: SeeMoreSlideProps[]) => void;
}

export const MyFavoriteTracks = ({ myFavoriteTracks, onClickNextSlider }: MyFavoriteTracksProps) => (
    <style.Wrapper>
        <style.Title>
            내가 좋아요 표시한 곡
        </style.Title>
        <SliderFreeMode componentGab={0}>
            {myFavoriteTracks.map((track) => (
                <VerticalAlbum
                    key={track.favoriteTrackId}
                    onClick={() => { }}
                    imgUrl={track.trackArtistResponses[0].track.albumImageUrl}
                    songName={track.trackArtistResponses[0].track.trackTitle}
                    singerName={
                        track.trackArtistResponses[0]?.artist.artistName || 'undefined'
                    }
                />
            ))}
            <style.MoreSee onClick={() => {
                const seeMoreDataArray = myFavoriteTracks.map(track => ({
                    imgUrl: track.trackArtistResponses[0].track.albumImageUrl,
                    songName: track.trackArtistResponses[0].track.trackTitle,
                    singerName: track.trackArtistResponses[0].artist.artistName,
                    timer: track.trackArtistResponses[0].track.durationTimeMs,
                }));

                onClickNextSlider('내가 좋아요 표시한 곡', seeMoreDataArray)
            }
            }> 더보기 </style.MoreSee>
        </SliderFreeMode>
    </style.Wrapper>
)
