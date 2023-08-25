import { useState } from 'react';
import * as style from '@/pages/home/timesetting.style';
import PrevIcon from '@/assets/images/PrevArrow.svg';
import RepeatDaySetting from '@/components/pages/home/repeat-day-setting';
import { TimeType } from '@/constants/types/signUpTypes';
import TimePicker from '@/components/common/time-picker';
import SwiperCore from 'swiper';
import  { Album }  from '~/src/components/common/album/Album';




interface Playlist {
    repAlbumImageUrl: string;
    playlistTitle: string;
    playlistId:number;
  }
  
const TimeSetting = () => {
    const playlists: Playlist[] = [];

      const [alarmTime,setAlarmTime] =useState<TimeType>( {
        meridiem: 'AM',
        hour: 1,
        min: 0,
      });

      const [renderingStartTime] = useState("01:00");
    function handleMeridiem(meridiem: string):void {
        
        setAlarmTime({...alarmTime,meridiem
          });
        
      };

    function handleHour(swiper: SwiperCore): void {
        
        setAlarmTime({
            ...alarmTime,
            hour:swiper.realIndex + 1 ,
          });
          

    }

    function handleMin(swiper: SwiperCore): void {
        setAlarmTime({
            ...alarmTime,
            min: swiper.realIndex*10  ,
          });
    }

    return(
        <style.Wrapper>
            <style.TopBarBox>
                <PrevIcon/>
                <style.NextButton>다음</style.NextButton>
            </style.TopBarBox>
            <style.BigTimeBadge>
                <style.StartTimeDiv>
                    <style.TimeTitle>Start</style.TimeTitle>
                    <style.TimeText>{renderingStartTime}</style.TimeText>
                </style.StartTimeDiv>
                <style.DoneTimeDiv>
                    <style.TimeTitle>Done</style.TimeTitle>
                    <style.TimeText>20:59</style.TimeText>
                </style.DoneTimeDiv>
            </style.BigTimeBadge>
            <style.TimePickerBox>
                <TimePicker
                meridiem={alarmTime.meridiem}
                onChangeMeridiem={()=> handleMeridiem}
                hour={alarmTime.hour}
                onChangeHour={()=> handleHour}
                min={alarmTime.min}
                onChangeMin={()=> handleMin}
                />
            </style.TimePickerBox>   
            <RepeatDaySetting/>
            <style.MyPlaylistContainer>
                <style.Text>My Playlist</style.Text>
                <style.MyPlaylistBox>
                    {playlists.map(({playlistId,repAlbumImageUrl,playlistTitle}) => (
                        <style.PlaylistInfo  
                          key={playlistId}>
                            <Album url={repAlbumImageUrl} size={81} />
                            <style.PlaylistTitle>{playlistTitle}</style.PlaylistTitle>
                        </style.PlaylistInfo>
            ))}
                </style.MyPlaylistBox>
            </style.MyPlaylistContainer>
            
        </style.Wrapper>
    )
}

export default TimeSetting;