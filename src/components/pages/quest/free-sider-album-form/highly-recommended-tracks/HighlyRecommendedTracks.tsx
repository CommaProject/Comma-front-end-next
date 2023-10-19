import * as style from './HighlyRecommendedTracks.style';
import { SliderFreeMode } from '@/components/common/slider-free-mode';
import { VerticalAlbum } from '@/components/common/album/vertical-album';
import { TracksRecommendData } from '@/constants/types/recommendType';

interface HighlyRecommendedTracksProps {
    highlyRecommendedTracks: TracksRecommendData[];
}

export const HighlyRecommendedTracks = ({ highlyRecommendedTracks }: HighlyRecommendedTracksProps) => {
    return (
        <style.Wrapper>
            <style.Title>
                추천이 가장 많이 된 곡
            </style.Title>
            <SliderFreeMode componentGab={0}>
                {highlyRecommendedTracks.map((track) => (
                    <VerticalAlbum
                        key={track.track.id}
                        onClick={() => { }}
                        imgUrl={track.track.albumImageUrl}
                        songName={track.track.trackTitle}
                        singerName={track.artist.artistName || 'undefined'} />
                ))}
                <style.MoreSee onClick={() => { }}> 더보기 </style.MoreSee>
            </SliderFreeMode>
        </style.Wrapper>
    )
}
