import HomeTemplate from '@/components/template/home';
import { useState } from 'react';



let TestPlayListData= [ {
  "playlistId" : 123,
  "playlistTitle" : "test111 playlist",
  "alarmFlag" : true,
  "alarmStartTime" : "11:11:11.159451735",
  "repAlbumImageUrl" : "w",
  "trackCount" : 3
}, {
  "playlistId" : 123,
  "playlistTitle" : "test222 playlist",
  "alarmFlag" : true,
  "alarmStartTime" : "22:22:22.159619119",
  "repAlbumImageUrl" : "w",
  "trackCount" : 3
} ]


const Home = () => {
  
  
  const [whenPlaylistWillPlay] = useState('12:00:00');
  const [isTimeBadgeVisible] = useState(true);
  const [isEditSelected,setIsEditSelected] = useState(true);
  const [playlistImageSources] = useState([]);
  
  const [isPlaylistAvailable] = useState(true);
  const [isEditMode,setIsEditMode] = useState(false);
  const [isTimeSetting,setIsTimeSetting] = useState(false);

  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
    
  }
  // const HandleEditModeChange = () => {
  // 편집 -> 일반 모드로 변할때 isPlaylistSelected(State)를 
  // 모두 false로 변경해주는 함수
  // }

  return (
    <HomeTemplate
      whenPlaylistWillPlay={whenPlaylistWillPlay}
      isTimeBadgeVisible={isTimeBadgeVisible}
      playlistImageSources={playlistImageSources}
      isPlaylistAvailable = {isPlaylistAvailable}
      isEditMode= {isEditMode}
      onClickIsEditMode ={onClickIsEditMode}
      TestPlayListData ={TestPlayListData}
     
    />
  );
};

export default Home;
