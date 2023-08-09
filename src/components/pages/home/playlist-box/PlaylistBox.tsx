import * as style from '@/components/pages/home/playlist-box/PlaylistBox.style';
import TimeBadge from '@/components/pages/home/time-badge';
import BigAlbumImage from '@/components/pages/home/album-image/big-album-image';
import SmallAlbumImage from '@/components/pages/home/album-image/small-album-image';
import { PlaylistTexts } from '@/components/pages/home/playlist-texts/PlaylistTexts';
import { useState } from 'react';

interface PlaylistBoxProps {
  // isPlaylistSelected: boolean;
  whenPlaylistWillPlay: string;
  isTimeBadgeVisible: boolean;
  //isEditSelected: boolean;
  playlistImageSources: string[];
  //isAlarmSelected: boolean;
  isEditMode:boolean;
  TestPlayListData: any;
  //onClickAlarmButton : () => void;
  //onClickPlaylistSelectButton: () => void;
}
export const PlaylistBox = ({

  whenPlaylistWillPlay,
  isTimeBadgeVisible,
  playlistImageSources, 
  isEditMode,
  TestPlayListData,
 
}: PlaylistBoxProps) => {

  const [isAlarmSelected,setIsAlarmSelected] = useState(true);
  const [isPlaylistSelected,setIsPlaylistSelected] = useState(false);

  const onClickAlarmButton = () =>{
    setIsAlarmSelected(!isAlarmSelected);
  }
  const onClickPlaylistSelectButton = () => {
    setIsPlaylistSelected(!isPlaylistSelected);
    
  }

  return (
    <style.Wrapper isPlaylistSelected={isPlaylistSelected} >
      <TimeBadge
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isTimeBadgeVisible={isTimeBadgeVisible}
      />
      
      <style.PlaylistInfoBox isEditMode ={isEditMode} isPlaylistSelected={isPlaylistSelected} >
      { isEditMode? <style.Button isPlaylistSelected={isPlaylistSelected} onClick={onClickPlaylistSelectButton}/> :'' }
        <style.ImagesBox isEditMode ={isEditMode }>
          <BigAlbumImage imgSource={playlistImageSources[0]} />
          <SmallAlbumImage imgSources={playlistImageSources} />
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
