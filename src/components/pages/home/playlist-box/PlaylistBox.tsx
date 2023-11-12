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
}

export const PlaylistBox = ({
  showTimeBadge,
  showAlarmButton,
  isEditMode,
  playlist,
  onToggleSelect,
}: PlaylistBoxProps) => {
  const [isAlarmSelected, setIsAlarmSelected] = useState(playlist.alarmFlag);
  const [isPlaylistSelected, setIsPlaylistSelected] = useState(false);
  const { playTime } = useGetPlaylistPlayTime(playlist.playlistId);
  const onClickAlarmButton = (event: { stopPropagation: () => void }) => {
    event.stopPropagation(); // 이벤트 버블링 막기
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
        (isAlarmSelected ? (
          <style.ActivateAlarmIcon onClick={onClickAlarmButton} />
        ) : (
          <style.DeactivateAlarmIcon onClick={onClickAlarmButton} />
        ))}
    </style.Wrapper>
  );
};
