import { SliderFreeMode } from '@/components/common/slider-free-mode';
import { VerticalAlbum } from '@/components/common/album/vertical-album';
import { TrackPlayCountType } from '@/constants/types/trackTypes';
import { SeeMoreSlideProps } from '@/pages/quest';
import * as style from './MyMostListenedTracks.style';

interface MyMostListenedTracksProps {
  myMostListenedTracks: TrackPlayCountType[];
  onClickNextSlider: (title: string, seeMoreData: SeeMoreSlideProps[]) => void;
}

export const MyMostListenedTracks = ({
  myMostListenedTracks,
  onClickNextSlider,
}: MyMostListenedTracksProps) => (
  <style.Wrapper>
    <style.Title>내가 가장 많이 들은 곡</style.Title>
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
      <style.MoreSee
        onClick={() => {
          const seeMoreDataArray = myMostListenedTracks.map(track => ({
            trackId: track.trackArtist.track.spotifyTrackId,
            imgUrl: track.trackArtist.track.albumImageUrl,
            songName: track.trackArtist.track.trackTitle,
            singerName: track.trackArtist.artist.artistName,
            timer: track.trackArtist.track.durationTimeMs,
          }));

          onClickNextSlider('내가 가장 많이 들은 곡', seeMoreDataArray);
        }}
      >
        {' '}
        더보기{' '}
      </style.MoreSee>
    </SliderFreeMode>
  </style.Wrapper>
);
