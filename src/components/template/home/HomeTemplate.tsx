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
  onClickAlarmButton : () => void;
  onClickPlaylistSelectButton: () => void;
  TestPlayListData : any;
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
  onClickIsEditMode,
  onClickAlarmButton,
  onClickPlaylistSelectButton,
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
      >편집</style.Button> : 
      <style.Button
       onClick = {onClickIsEditMode}
      >취소</style.Button> }
      </style.EditDiv>
      <PlaylistBox
        isPlaylistSelected={isPlaylistSelected}
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isTimeBadgeVisible={isTimeBadgeVisible}
        isEditSelected={isEditSelected}
        playlistImageSources={playlistImageSources}
        isAlarmSelected={isAlarmSelected}
        isEditMode ={isEditMode}
        TestPlayListData={TestPlayListData}
        onClickAlarmButton ={onClickAlarmButton}
        onClickPlaylistSelectButton ={onClickPlaylistSelectButton}
      /> 
      {/* 테스트용 */}
      <PlaylistBox
        isPlaylistSelected={isPlaylistSelected}
        whenPlaylistWillPlay={whenPlaylistWillPlay}
        isTimeBadgeVisible={isTimeBadgeVisible}
        isEditSelected={isEditSelected}
        playlistImageSources={playlistImageSources}
        isAlarmSelected={isAlarmSelected}
        isEditMode ={isEditMode}
        TestPlayListData={TestPlayListData}
        onClickAlarmButton ={onClickAlarmButton}
        onClickPlaylistSelectButton ={onClickPlaylistSelectButton}
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
