import * as style from '@/components/pages/home/playlist-box/PlaylistBox.style';
import TimeBadge from '@/components/pages/home/time-badge';
import { PlaylistTexts } from '@/components/pages/home/playlist-texts/PlaylistTexts';
import { useState } from 'react';
import { Album } from '@/components/common/album/Album';
import { PlaylistType } from '@/constants/types/playlistTypes';
import { usePlaylist } from '@/hooks/usePlaylist';
import { useGetPlaylistPlayTime } from '@/apis/playlist';
import { PlaylistRepAlbumWithNum } from '@/components/common/playlist-rep-album-with-num';

interface PlaylistBoxProps {
  showTimeBadge: boolean;
  showAlarmButton: boolean;
  isEditMode: boolean;
  playlist: PlaylistType;
  onToggleSelect: (playlistId: number) => void;
  onClickAlarmIcon: (playlistId: number) => void;
}

export const PlaylistBox = ({
  showTimeBadge,
  showAlarmButton,
  isEditMode,
  playlist,
  onToggleSelect,
  onClickAlarmIcon
}: PlaylistBoxProps) => {
  const [isPlaylistSelected, setIsPlaylistSelected] = useState(false);
  const { playTime } = useGetPlaylistPlayTime(playlist.playlistId);

  const onClickPlaylistSelectButton = () => {
    setIsPlaylistSelected(!isPlaylistSelected);
    onToggleSelect(playlist.playlistId);
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
      {showTimeBadge ? (
        <TimeBadge whenPlaylistWillPlay={playlist.alarmStartTime} />
      ) : (
        ' '
      )}
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
          <PlaylistRepAlbumWithNum
            key={playlist.playlistId}
            playlistId={playlist.playlistId}
            repAlbumImageUrl={playlist.repAlbumImageUrl}
            trackCount={playlist.trackCount}
          />
        </style.ImagesBox>
        <PlaylistTexts
          isPlaylistSelected={isPlaylistSelected}
          isEditMode={isEditMode}
          playlist={playlist}
          playTime={playTime}
        />
      </style.PlaylistInfoBox>

      {showAlarmButton &&
        !isEditMode &&
        !isPlaylistSelected &&
        (playlist.alarmFlag ? (
          <style.ActivateAlarmIcon onClick={(event) => {
            event.stopPropagation();
            onClickAlarmIcon(playlist.playlistId)}} />
        ) : (
          <style.DeactivateAlarmIcon onClick={(event) => {
            event.stopPropagation();
            onClickAlarmIcon(playlist.playlistId)}} />
        ))}
    </style.Wrapper>
  );
};
