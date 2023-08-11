import * as style from '@/pages/home/timesetting.style';
import PrevIcon from '@/assets/images/PrevArrow.svg';
import RepeatDaySetting from '@/components/pages/home/repeat-day-setting';
import { TimeType } from '@/constants/types/signUpTypes';
import TimePicker from '@/components/common/time-picker';
import { TimePickerProps } from '@/components/common/time-picker/TimePicker';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import MusicPlay from '~/src/components/common/music-play';



interface Playlist {
    repAlbumImageUrl: string;
    playlistTitle: string;
    playlistId:number;
  }
  
const TimeSetting = ({
    meridiem,
    hour,
    min,
    onChangeMeridiem,
    onChangeHour,
    onChangeMin,
  }: TimePickerProps) => {
    const playlists: Playlist[] = [
        
      ];

      const settingTime: TimeType = {
        meridiem: 'AM',
        hour: 1,
        min: 0,
      };

    const OnChangeMerdium = (meridiem: string) => {
        console.log('mer');
      };




      
    return(
        <style.Wrapper>
            <style.TopBarBox>
                <PrevIcon/>
                <style.NextButton>다음</style.NextButton>
            </style.TopBarBox>
            <style.BigTimeBadge>
                <style.StartTimeDiv>
                    <style.TimeTitle>Start</style.TimeTitle>
                    <style.TimeText>20:30</style.TimeText>
                </style.StartTimeDiv>
                <style.DoneTimeDiv>
                    <style.TimeTitle>Done</style.TimeTitle>
                    <style.TimeText>20:59</style.TimeText>
                </style.DoneTimeDiv>
            </style.BigTimeBadge>
            <TimePicker
               meridiem={meridiem}
               onChangeMeridiem={onChangeMeridiem}
               hour={hour}
               onChangeHour={onChangeHour}
               min={min}
               onChangeMin={onChangeMin}
               />
            <RepeatDaySetting/>
            <style.MyPlaylistContainer>
                <style.Text>My Playlist</style.Text>
                <style.MyPlaylistBox>
                    {playlists.map(({playlistId,repAlbumImageUrl,playlistTitle}) => (
                        <style.PlaylistInfo  onClick = {() => {console.log(playlistTitle)}}>
                            <style.AlbumImg src={repAlbumImageUrl}/>
                            <style.PlaylistTitle>{playlistTitle}</style.PlaylistTitle>
                        </style.PlaylistInfo>
            ))}
                </style.MyPlaylistBox>
            </style.MyPlaylistContainer>
            <MusicPlay/>
        </style.Wrapper>
    )
}

export default TimeSetting;