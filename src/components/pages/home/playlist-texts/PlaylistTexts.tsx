import { PlaylistType } from '~/src/constants/types/playlistTypes';
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
}: PlaylistTextsProps ) => {
  return (
    <style.Wrapper 
    isEditMode={isEditMode} 
    isPlaylistSelected={isPlaylistSelected}>
      <style.Text
        isFontBoldElseRegular={true}
        isFontNotoElsePre={false}
        isFontsize15Else12={true}
      />
      
      <style.Text
        isFontBoldElseRegular={true}
        isFontNotoElsePre={true}
        isFontsize15Else12={true}
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
};
