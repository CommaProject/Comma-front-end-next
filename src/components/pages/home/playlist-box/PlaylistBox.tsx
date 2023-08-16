import * as style from '@/components/pages/home/playlist-box/PlaylistBox.style';
import TimeBadge from '@/components/pages/home/time-badge';
import { PlaylistTexts } from '@/components/pages/home/playlist-texts/PlaylistTexts';
import { useState } from 'react';
import { Album } from '@/components/common/album/Album';
import { PlaylistType } from '~/src/constants/types/playlistTypes';
import {usePlaylist} from '@/hooks/usePlaylist';
interface PlaylistBoxProps {
  
  whenPlaylistWillPlay: string;
  isTimeBadgeVisible: boolean;
  isEditMode:boolean;
  playlist: PlaylistType;
  
}

export const PlaylistBox = ({

  whenPlaylistWillPlay,
  isTimeBadgeVisible,
  isEditMode,
  playlist
 
 
}: PlaylistBoxProps) => {

  const [isAlarmSelected,setIsAlarmSelected] = useState(true);
  const [isPlaylistSelected,setIsPlaylistSelected] = useState(false);

  const onClickAlarmButton = () =>{
    setIsAlarmSelected(!isAlarmSelected);
  }
  const onClickPlaylistSelectButton = () => {
    setIsPlaylistSelected(!isPlaylistSelected);
    
  }
  const { navigateToPlaylist } = usePlaylist();
  
  const onClickPlaylist = () =>{
    console.log(playlist.playlistId);
    navigateToPlaylist(playlist.playlistId);
  }
  
  return (
    <style.Wrapper isPlaylistSelected={isPlaylistSelected} onClick={onClickPlaylist} >
      <TimeBadge
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isTimeBadgeVisible={isTimeBadgeVisible}
      />
      <style.PlaylistInfoBox isEditMode ={isEditMode} isPlaylistSelected={isPlaylistSelected} >
      { isEditMode? <style.Button isPlaylistSelected={isPlaylistSelected} onClick={onClickPlaylistSelectButton}/> :'' }
        <style.ImagesBox isEditMode ={isEditMode }>
          
          <Album url={playlist.repAlbumImageUrl} size={81.5} />
          {/* <SmallAlbumImage imgSources={playlist.repAlbumImageUrl} /> */}
          </style.ImagesBox>
      <PlaylistTexts 
        isPlaylistSelected={isPlaylistSelected}
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isEditMode ={isEditMode }
        
      />
      {/* <style.MovePlaylistIcon isPlaylistSelected={isPlaylistSelected} /> */}
      </style.PlaylistInfoBox>
      { !isEditMode?
      (!isPlaylistSelected ? (
        isAlarmSelected ? (
          <style.ActivateAlarmIcon onClick={onClickAlarmButton } />
        ) : (
          <style.DeactivateAlarmIcon onClick={onClickAlarmButton} />
        )
      ) : (
        ''
      )) : ''}
      
    </style.Wrapper>
  );
};
