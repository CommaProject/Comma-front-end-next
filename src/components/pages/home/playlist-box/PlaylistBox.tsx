import * as style from '@/components/pages/home/playlist-box/PlaylistBox.style';
import TimeBadge from '@/components/pages/home/time-badge';
import { PlaylistTexts } from '@/components/pages/home/playlist-texts/PlaylistTexts';
import { useState } from 'react';
import { Album } from '@/components/common/album/Album';
import { PlaylistType } from '@/constants/types/playlistTypes';
import { usePlaylist } from '@/hooks/usePlaylist';
import { useGetPlaylistPlayTime } from '@/apis/playlist';

interface PlaylistBoxProps {
  isEditMode: boolean;
  playlist: PlaylistType;
}

export const PlaylistBox = ({ isEditMode, playlist }: PlaylistBoxProps) => {
  const [isAlarmSelected, setIsAlarmSelected] = useState(playlist.alarmFlag);
  const [isPlaylistSelected, setIsPlaylistSelected] = useState(false);
  const { playTime } = useGetPlaylistPlayTime(playlist.playlistId);
  const onClickAlarmButton = () => {
    setIsAlarmSelected(!isAlarmSelected);
  };
  const onClickPlaylistSelectButton = () => {
    setIsPlaylistSelected(!isPlaylistSelected);
  };
  const { navigateToPlaylist } = usePlaylist();

  const onClickPlaylist = () => {
    if (isEditMode === false) {
      navigateToPlaylist(playlist.playlistId);
    }
  };

  return (
    <style.Wrapper
      isPlaylistSelected={isPlaylistSelected}
      onClick={onClickPlaylist}
    >
      <TimeBadge whenPlaylistWillPlay={playlist.alarmStartTime} />
      <style.PlaylistInfoBox
        isEditMode={isEditMode}
        isPlaylistSelected={isPlaylistSelected}
      >
        {isEditMode ? (
          <style.Button
            isPlaylistSelected={isPlaylistSelected}
            onClick={onClickPlaylistSelectButton}
          />
        ) : (
          ''
        )}
        <style.ImagesBox isEditMode={isEditMode}>
          <Album
            url={playlist.repAlbumImageUrl}
            size={81.5}
            borderRadius={15}
          />
          {playlist.trackCount - 1 > 0 ? (
            <style.TrackNumInfo>+{playlist.trackCount - 1}</style.TrackNumInfo>
          ) : (
            ''
          )}
        </style.ImagesBox>
        <PlaylistTexts
          isPlaylistSelected={isPlaylistSelected}
          isEditMode={isEditMode}
          playlist={playlist}
          playTime={playTime}
        />
        {/* <style.MovePlaylistIcon isPlaylistSelected={isPlaylistSelected} /> */}
      </style.PlaylistInfoBox>
      {!isEditMode &&
        !isPlaylistSelected &&
        (isAlarmSelected ? (
          <style.ActivateAlarmIcon onClick={onClickAlarmButton} />
        ) : (
          <style.DeactivateAlarmIcon onClick={onClickAlarmButton} />
        ))}
    </style.Wrapper>
  );
};
