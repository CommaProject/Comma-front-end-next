import HomeTemplate from '@/components/template/home';
import { useState } from 'react';
import { PlaylistType } from '@/types/playlistTypes';

let TestPlayListData: PlaylistType[]= [ {
  "playlistId" : 1,
  "playlistTitle" : "test111 playlist",
  "alarmFlag" : true,
  "alarmStartTime" : "11:11",
  "repAlbumImageUrl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJF83QVaxQS2vq9yt_I_ZbRnL8Ox3OPj-ddg&usqp=CAU",
  "trackCount" : 3
}, {
  "playlistId" : 2,
  "playlistTitle" : "test222 playlist",
  "alarmFlag" : true,
  "alarmStartTime" : "22:22",
  "repAlbumImageUrl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRQuF44MfD617MCRNgKMIKH2Rm0TMCQembw&usqp=CAU",
  "trackCount" : 3
} ]


const Home = () => {
  
  
  const [whenPlaylistWillPlay] = useState('12:00:00');
  const [isTimeBadgeVisible] = useState(true);
  const [isEditSelected,setIsEditSelected] = useState(true);
  
  
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
    
      isPlaylistAvailable = {isPlaylistAvailable}
      isEditMode= {isEditMode}
      onClickIsEditMode ={onClickIsEditMode}
      TestPlayListData ={TestPlayListData}
     
    />
  );
};

export default Home;
