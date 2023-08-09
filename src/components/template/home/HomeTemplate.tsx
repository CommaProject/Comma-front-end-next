import * as style from '@/components/template/home/HomeTemplate.style';
import PlaylistBox from '@/components/pages/home/playlist-box';
import { useState } from 'react';

interface HomeTemplateProps {
  whenPlaylistWillPlay: string;
  isTimeBadgeVisible: boolean;
  playlistImageSources: string[];
  isPlaylistAvailable: boolean;
  isEditMode: boolean;
  onClickIsEditMode : () => void;
  TestPlayListData : any;
}


export const HomeTemplate = ({
  whenPlaylistWillPlay,
  isTimeBadgeVisible,
  playlistImageSources,
  isPlaylistAvailable,
  isEditMode,
  onClickIsEditMode,
  TestPlayListData
}: HomeTemplateProps) => {
  
  return (
    <style.Container>

     { isPlaylistAvailable? 
     <style.ShowPlaylist>
      <style.MainIcon/>
      <style.EditDiv>
      { !isEditMode?
      <style.Button
       onClick = {onClickIsEditMode}
       isEditMode={isEditMode}
      >편집</style.Button> : 
      <style.Button
       onClick = {onClickIsEditMode}
       isEditMode={isEditMode}
      >취소</style.Button> }
      </style.EditDiv>
      <PlaylistBox
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isTimeBadgeVisible={isTimeBadgeVisible}
        playlistImageSources={playlistImageSources}
        isEditMode ={isEditMode}
        TestPlayListData={TestPlayListData}
        /> 
     
      </style.ShowPlaylist>
      : 
       <style.SuggestAddPlaylist>콤마 플레이리스트가 없어요.</style.SuggestAddPlaylist>
      }
      { !isEditMode?
      <style.AddPlaylistButton/> : <style.DeletePlaylistButton/>
      }
      
    </style.Container>
  );
};
