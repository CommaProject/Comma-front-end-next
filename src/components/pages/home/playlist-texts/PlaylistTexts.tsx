import { PlaylistType } from '@/constants/types/playlistTypes';
import * as style from './PlaylistTexts.style';

interface PlaylistTextsProps {
  isPlaylistSelected: boolean;
  isEditMode: boolean;
  playlist:PlaylistType;
  playTime :number ;

  
}
export const PlaylistTexts = ({ 
  isPlaylistSelected,
  isEditMode,
  playlist,
  playTime
}: PlaylistTextsProps ) => (
  <style.Wrapper 
  isEditMode={isEditMode} 
  isPlaylistSelected={isPlaylistSelected}>
  <style.Text
    isFontBoldElseRegular
    isFontNotoElsePre={false}
    isFontsize15Else12
  />
  
  <style.Text
    isFontBoldElseRegular
    isFontNotoElsePre
    isFontsize15Else12
  >
    {playlist.playlistTitle}
  </style.Text>
  <style.Text
    isFontBoldElseRegular={false}
    isFontNotoElsePre={false}
    isFontsize15Else12={false}
  >
    {playlist.trackCount} songs /{playTime > 360000 ? `${Math.floor((playTime / (1000 * 60)) % 60)}h` : ''} {playTime > 60000 ? `${Math.floor((playTime / (1000 * 60)) % 60)}m` : ''} {Math.floor((playTime / 1000 ) % 60) }s
  </style.Text>
</style.Wrapper>
);
