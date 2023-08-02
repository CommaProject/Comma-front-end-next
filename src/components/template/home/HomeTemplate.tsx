import * as style from '@/components/template/home/HomeTemplate.style';
import PlaylistBox from '@/components/pages/home/playlist-box';

interface HomeTemplateProps {
  isPlaylistSelected: boolean;
  whenPlaylistWillPlay: string;
  isTimeBadgeVisible: boolean;
  isEditSelected: boolean;
  playlistImageSources: string[];
  isAlarmSelected: boolean;
}

export const HomeTemplate = ({
  isPlaylistSelected,
  whenPlaylistWillPlay,
  isTimeBadgeVisible,
  isEditSelected,
  playlistImageSources,
  isAlarmSelected,
}: HomeTemplateProps) => (
  <style.Container>
    <PlaylistBox
      isPlaylistSelected={isPlaylistSelected}
      whenPlaylistWillPlay={whenPlaylistWillPlay}
      isTimeBadgeVisible={isTimeBadgeVisible}
      isEditSelected={isEditSelected}
      playlistImageSources={playlistImageSources}
      isAlarmSelected={isAlarmSelected}
    />
  </style.Container>
);
