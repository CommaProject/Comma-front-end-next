import React from 'react'
import * as style from './MyMostListenedTracks.style';
import { SliderFreeMode } from '@/components/common/slider-free-mode';
import { VerticalAlbum } from '@/components/common/album/vertical-album';
import { TrackPlayCountType } from '@/constants/types/trackTypes';

interface MyMostListenedTracksProps {
    myMostListenedTracks: TrackPlayCountType[];
}

export const MyMostListenedTracks = ({ myMostListenedTracks }: MyMostListenedTracksProps) => {
    return (
        <style.Wrapper>
            <style.Title>
                내가 가장 많이 들은 곡
            </style.Title>
            <SliderFreeMode componentGab={0}>
                {myMostListenedTracks?.map((track) => (
                    <VerticalAlbum
                        key={track.trackArtist.track.id}
                        onClick={() => { }}
                        imgUrl={track.trackArtist.track.albumImageUrl}
                        songName={track.trackArtist.track.trackTitle}
                        singerName={track.trackArtist.artist.artistName}
                    />
                ))}
                <style.MoreSee> 더보기 </style.MoreSee>
            </SliderFreeMode>
        </style.Wrapper>
    )
}
