import * as style from '@/styles/pages-styles/playlist.[id].style';
import PrevIcon from '@/assets/images/prevArrow.svg';
import SettingIcon from '@/assets/images/setting.svg';
import TimeBadge from '@/components/pages/home/time-badge';
import { HorizontalAlbum } from '@/components/common/album/horizontal-album';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  HandleMS,
  HandleSingerName,
  useGetPlaylistTracks,
} from '@/hooks/usePlaylistTrack';
import { useGetPlaylistDetail } from '@/apis/playlist';
import { HorizontalAlbumWithIcon } from '@/components/pages/playlist/horizontal-album-with-icon';

const Id = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const [selectedPlaylist, setSelectedPlaylist] = useState<number[]>([]);

  useEffect(() => {
    if (isEditMode === false) {
      setSelectedPlaylist([]);
    }
  }, [isEditMode]);
  const onToggleSelect = (playlistId: number) =>{
    if (selectedPlaylist.includes(playlistId)) {
      setSelectedPlaylist((prevIds) =>
        prevIds.filter((id) => id !== playlistId),
      );
    } else {
      setSelectedPlaylist((prevIds) => [...prevIds, playlistId]);
    }
  }
  
  const { playlistId } = router.query;
  const parsedPlaylistId =
    typeof playlistId === 'string' ? parseInt(playlistId, 10) : 0;
  const { myPlaylistDetail } = useGetPlaylistDetail(parsedPlaylistId);
  const { playlistTracks } = useGetPlaylistTracks(parsedPlaylistId);

  const onClickSetting = () => {
    setIsEditMode(!isEditMode);
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
              key={track.trackArtistList[0].artist.spotifyArtistId}
              imgUrl={track.trackArtistList[0].track.albumImageUrl}
              songName={track.trackArtistList[0].track.trackTitle}
              singerName={HandleSingerName(track.trackArtistList)}
              timer={HandleMS(track.trackArtistList[0].track.durationTimeMs)}
              onClick={() => {}}
              onClickMoveButton={() => {}}
              isEditMode={isEditMode}
            />
          ))}
      </style.AlbumList>
      {isEditMode ? <style.DeletePlaylistBtn onClick={() => onToggleSelect()} />: null}
    </style.Wrapper>
  );
};

export default Id;
