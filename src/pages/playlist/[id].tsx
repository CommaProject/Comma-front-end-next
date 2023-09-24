import * as style from '@/styles/pages-styles/playlist.[id].style';
import PrevIcon from '@/assets/images/prevArrow.svg';
import SettingIcon from '@/assets/images/setting.svg';
import TimeBadge from '@/components/pages/home/time-badge';
import { HorizontalAlbum } from '@/components/common/album/horizontal-album';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { HandleMS, HandleSingerName,useGetPlaylistTracks } from '@/hooks/usePlaylistTrack';
import { useGetPlaylistDetail } from '@/apis/playlist';
import { HorizontalAlbumWithIcon } from '@/components/pages/playlist/horizontal-album-with-icon';

const Id = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();

  const { playlistId } = router.query;
  const parsedPlaylistId =
    typeof playlistId === 'string' ? parseInt(playlistId, 10) : 0;
  const { myPlaylistDetail } = useGetPlaylistDetail(parsedPlaylistId);
  const { playlistTracks } = useGetPlaylistTracks(parsedPlaylistId);

  const onClickSetting = () => {
    setIsEditMode(!isEditMode);
    console.log(playlistTracks);
  };

  const onClickPrevButton = () => {
    router.back();
  };
  const onClickTimeBadgeEditBtn = () => {
    router.push('../home/timesetting');
  };
  return (
    <style.Wrapper>
      <style.TopBar>
        <PrevIcon onClick={onClickPrevButton} />
        <style.Title>
          {myPlaylistDetail ? myPlaylistDetail.playlistTitle : '-'}
          {isEditMode ? <style.EditBtn /> : ''}
        </style.Title>
        <SettingIcon onClick={onClickSetting} />
      </style.TopBar>
      <style.PlaylistInfoBox>
        <style.TimeInfo>
          <TimeBadge
            whenPlaylistWillPlay={
              myPlaylistDetail ? myPlaylistDetail.alarmStartTime : ''
            }
          />
          {isEditMode ? (
            <style.EditBtn onClick={onClickTimeBadgeEditBtn} />
          ) : (
            ''
          )}
        </style.TimeInfo>
        <style.TimeText>
          {myPlaylistDetail ? myPlaylistDetail.trackCount : ''}songs/
          {myPlaylistDetail
            ? HandleMS(myPlaylistDetail.totalDurationTime)
            : '-'}
        </style.TimeText>
      </style.PlaylistInfoBox>
      <style.AlbumList>
        {playlistTracks &&
          playlistTracks.map((track) => (
            <HorizontalAlbumWithIcon
              key={track.trackId}
              imgUrl={track.albumImageUrl}
              songName={track.trackTitle}
              singerName={HandleSingerName(track.trackArtistList)}
              timer={HandleMS(track.durationTimeMs)}
              onClick={() => {}}
              onClickMoveButton={() => {}}
              isEditMode={isEditMode}
            />
          ))}
      </style.AlbumList>
      <style.DeletePlaylistBtn />
    </style.Wrapper>
  );
};

export default Id;
