import * as style from '@/components/template/home/HomeTemplate.style';
import PlaylistBox from '@/components/pages/home/playlist-box';
import { PlaylistType } from '@/constants/types/playlistTypes';


interface HomeTemplateProps {
  isPlaylistAvailable: boolean;
  isCommaPlaylistAvailable: boolean;
  isEditMode: boolean;
  onToggleSelect: (playlistId: number) => void;
  onClickIsEditMode: () => void;
  onClickAddPlaylistButton: () => void;
  onClickDeleteButton: () => void;
  commaPlaylist: PlaylistType[];
}

export const HomeTemplate = ({
  isPlaylistAvailable,
  isCommaPlaylistAvailable,
  isEditMode,
  onClickIsEditMode,
  onClickAddPlaylistButton,
  onClickDeleteButton,
  commaPlaylist,
  onToggleSelect,
}: HomeTemplateProps) => {
  
  let playlistContent;
  if (!isPlaylistAvailable) {
    playlistContent = (
      <style.Box>
        <style.Text>
          마이 플레이리스트가 없어요, <br />
          지금 담으러 가시겠어요?
        </style.Text>
        <style.Arrow />
      </style.Box>
    );
  } else if (isCommaPlaylistAvailable) {
    playlistContent = (
      <style.ShowPlaylist>
        <style.MainIcon />
        <style.EditDiv>
          <style.Button onClick={onClickIsEditMode} isEditMode={isEditMode}>
            {isEditMode ? '취소' : '편집'}
          </style.Button>
        </style.EditDiv>
        {commaPlaylist &&
          commaPlaylist.map((playlist: PlaylistType) => (
            <PlaylistBox
              showTimeBadge
              showAlarmButton
              isEditMode={isEditMode}
              key={playlist.playlistId}
              playlist={playlist}
              onToggleSelect={onToggleSelect}
            />
          ))}
      </style.ShowPlaylist>
    );
  } else {
    playlistContent = (
      <style.SuggestAddPlaylist>
        콤마 플레이리스트가 없어요.
      </style.SuggestAddPlaylist>
    );
  }

  return (
    <style.Container isPlaylistAvailable={isPlaylistAvailable}>
      {playlistContent}
      {!isEditMode ? (
        <style.AddPlaylistButton onClick={onClickAddPlaylistButton} />
      ) : (
        <style.DeletePlaylistButton onClick={onClickDeleteButton} />
      )}
    </style.Container>
  );
};
