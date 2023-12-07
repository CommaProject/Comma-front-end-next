import * as style from '@/styles/pages-styles/playlist.[id].style';
import PrevIcon from '@/assets/images/prevArrow.svg';
import SettingIcon from '@/assets/images/setting.svg';
import TimeBadge from '@/components/pages/home/time-badge';
import { HorizontalAlbum } from '@/components/common/album/horizontal-album';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  HandleMS,
  HandleSingerName,
  useGetPlaylistTracks,
} from '@/hooks/usePlaylistTrack';
import { useGetPlaylistDetail } from '@/apis/playlist';
import { HorizontalAlbumWithIcon } from '@/components/pages/playlist/horizontal-album-with-icon';
import { usePlaylist, usePlaylistTrack } from '@/hooks/usePlaylist';

const Id = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const [selectedPlaylist, setSelectedPlaylist] = useState<number[]>([]);
  const { playlistId } = router.query;
  const parsedPlaylistId = typeof playlistId === 'string' ? parseInt(playlistId, 10) : 0;
  const { myPlaylistDetail } = useGetPlaylistDetail(parsedPlaylistId);
  const { playlistTracks } = useGetPlaylistTracks(parsedPlaylistId);
  const { mutateDeletelaylistTrack } = usePlaylistTrack();
  const { mutateEditTitle } = usePlaylist();
  const [playlistTitle, setPlaylistTitle] = useState<string>();
  const titleRef = useRef<HTMLInputElement>(null);
  const [ isEditModeTitle, setIsEditModeTitle] = useState<boolean>();

  useEffect(()=>{
    setPlaylistTitle( myPlaylistDetail ? myPlaylistDetail.playlistTitle : '-');
  },[myPlaylistDetail])

  useEffect(() => {
    if (isEditMode === false) {
      setSelectedPlaylist([]);
    }
  }, [isEditMode]);

  const onToggleSelect = (playlistId_: number) =>{
    if (selectedPlaylist.includes(playlistId_)) {
      setSelectedPlaylist((prevIds) =>
        prevIds.filter((id) => id !== playlistId_),
      );
    } else {
      setSelectedPlaylist((prevIds) => [...prevIds, playlistId_]);
    }
  }
  
  const handleDeleteTrack = () => {
    mutateDeletelaylistTrack(selectedPlaylist);
  }

  const onClickSetting = () => {
    setIsEditMode(!isEditMode);
  };

  const onClickPrevButton = () => {
    router.back();
  };

  const onClickTimeBadgeEditBtn = () => {
    router.push('../home/timesetting');
  };

  const handleChangeTitle = (e: { target: { value: SetStateAction<string | undefined>; }; }) => {
    setPlaylistTitle(e.target.value);
  }
  
  const handleTitleEditActive = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsEditModeTitle(true);
    titleRef.current!.focus();
  }

  const titleEnter = () => {
    setIsEditModeTitle(false);
    const playlistId1 = Number(playlistId);
    mutateEditTitle({ playlistId: playlistId1, title: playlistTitle || "Error"});
  };

  return (
    <style.Wrapper>
      <style.TopBar>
        <PrevIcon onClick={onClickPrevButton} />
        <style.Title ref={titleRef}  readOnly={!isEditModeTitle} type="text" name="st_name"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              titleEnter();
            }
          }}
         onChange={handleChangeTitle} value={playlistTitle}/>
        {isEditMode ? <style.EditBtn onClick={handleTitleEditActive} /> : null}
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
          playlistTracks.map((track, index) => (
            <HorizontalAlbumWithIcon
              key={track.trackArtistList[0].track.spotifyTrackId + index.toString}
              imgUrl={track.trackArtistList[0].track.albumImageUrl}
              songName={track.trackArtistList[0].track.trackTitle}
              singerName={HandleSingerName(track.trackArtistList)}
              timer={HandleMS(track.trackArtistList[0].track.durationTimeMs)}
              onClick={() => { } }
              onClickMoveButton={() => { } }
              isEditMode={isEditMode} 
              onToggleSelect={onToggleSelect}
              playlistId={track.trackArtistList[0].track.id}/>
          ))}
      </style.AlbumList>
      {isEditMode ? <style.DeletePlaylistBtn onClick={handleDeleteTrack} />: null}
    </style.Wrapper>
  );
};

export default Id;
