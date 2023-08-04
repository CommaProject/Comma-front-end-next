import * as style from '@/components/template/home/HomeTemplate.style';
import PlaylistBox from '@/components/pages/home/playlist-box';
import { useState } from 'react';

interface HomeTemplateProps {
  isPlaylistSelected: boolean;
  whenPlaylistWillPlay: string;
  isTimeBadgeVisible: boolean;
  isEditSelected: boolean;
  playlistImageSources: string[];
  isAlarmSelected: boolean;
  isPlaylistAvailable: boolean;
  isEditMode: boolean;
  onClickIsEditMode : () => void;
}

export const HomeTemplate = ({
  isPlaylistSelected,
  whenPlaylistWillPlay,
  isTimeBadgeVisible,
  isEditSelected,
  playlistImageSources,
  isAlarmSelected,
  isPlaylistAvailable,
  isEditMode,
  onClickIsEditMode
}: HomeTemplateProps) => {
  
  return (
    <style.Container>
     { isPlaylistAvailable? 
     <style.ShowPlaylist>
      <style.MainIcon/>
      { !isEditMode?
      <style.Button
       onClick = {onClickIsEditMode}
      >편집</style.Button> : 
      <style.Button
       onClick = {onClickIsEditMode}
      >취소</style.Button> }
      <PlaylistBox
        isPlaylistSelected={isPlaylistSelected}
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isTimeBadgeVisible={isTimeBadgeVisible}
        isEditSelected={isEditSelected}
        playlistImageSources={playlistImageSources}
        isAlarmSelected={isAlarmSelected}
        isEditMode ={isEditMode}
      /> 
      </style.ShowPlaylist>
      : 
       <style.SuggestBox>
       <style.SuggestAddPlaylist>콤마 플레이리스트가 없어요.</style.SuggestAddPlaylist>
       <style.AddPlaylistButton></style.AddPlaylistButton>
       </style.SuggestBox>
      }

    </style.Container>
  );
};
