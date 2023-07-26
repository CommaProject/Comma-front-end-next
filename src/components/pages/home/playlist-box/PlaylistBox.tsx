import * as style from '@/components/pages/home/playlist-box/PlaylistBox.style';
import TimeBadge from '@/components/pages/home/time-badge';
import BigAlbumImage from '@/components/pages/home/album-image/big-album-image';
import SmallAlbumImage from '@/components/pages/home/album-image/small-album-image';
import { PlaylistTexts } from '@/components/pages/home/playlist-texts/PlaylistTexts';

interface PlaylistBoxProps {
  isPlaylistSelected: boolean;
  whenPlaylistWillPlay: string;
  isTimeBadgeVisible: boolean;
  isEditSelected: boolean;
  playlistImageSources: string[];
  isAlarmSelected: boolean;
}
export const PlaylistBox = ({
  isPlaylistSelected,
  whenPlaylistWillPlay,
  isTimeBadgeVisible,
  isEditSelected,
  playlistImageSources,
  isAlarmSelected,
}: PlaylistBoxProps) => {
  return (
    <style.Wrapper isPlaylistSelected={isPlaylistSelected}>
      <TimeBadge
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isTimeBadgeVisible={isTimeBadgeVisible}
      />
      <style.Button isEditSelected={isEditSelected} />
      <BigAlbumImage imgSource={playlistImageSources[0]} />
      <SmallAlbumImage imgSources={playlistImageSources} />
      <PlaylistTexts
        isPlaylistSelected={isPlaylistSelected}
        whenPlaylistWillPlay={whenPlaylistWillPlay}
      />
      <style.MovePlaylistIcon isPlaylistSelected={isPlaylistSelected} />
      {!isPlaylistSelected ? (
        isAlarmSelected ? (
          <style.ActivateAlarmIcon onClick={() => {}} />
        ) : (
          <style.DeactivateAlarmIcon onClick={() => {}} />
        )
      ) : (
        ''
      )}
    </style.Wrapper>
  );
};
