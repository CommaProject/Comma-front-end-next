import * as style from '~/src/styles/playlist.[id].style';
import PrevIcon from '@/assets/images/PrevArrow.svg';
import SettingIcon from '@/assets/images/setting.svg';
import TimeBadge from '@/components/pages/home/time-badge';
import { HorizontalAlbum } from '@/components/common/album/horizontal-album';
import { useState } from 'react';
import { useGetPlaylistTracks } from '@/apis/playlisttrack';
import { useRouter } from 'next/router';
import { HandleMS,HandleSingerName } from '@/hooks/usePlaylistTrack';
import { PlaylistType } from '~/src/constants/types/playlistTypes';
import { useGetPlaylistPlayTime } from '~/src/apis/playlist';


const Id = () => {
    const [isEditMode,setIsEditMode] = useState(false);
    const router = useRouter();
    
    const {playlistId} = router.query ;
    /* 아래 지금은 useState로 해놨는데 api 생기면 바꿀 것임 */
    const [nowPlaylist] =useState<PlaylistType>(
       { "playlistId": 33,
        "playlistTitle": "트랙 정보 불러오기 완료, 단일 플리 정보 x",
        "alarmFlag": true,
        "alarmStartTime": "12:33",
        "repAlbumImageUrl": "",
        "trackCount": 3
    }
    );
    const{playlistTracks} = useGetPlaylistTracks(playlistId);
    const{nowPlaylistPlayTIme} :any = useGetPlaylistPlayTime(1);
    const onClickSetting = () =>{
        setIsEditMode(!isEditMode);
        console.log(playlistId,typeof(playlistId),nowPlaylistPlayTIme);
    }

    const onClickAlbum = () =>{
        console.log('현재 id',playlistId);
        console.log(playlistTracks[0].trackArtistList)
        
    }
    const onClickPrevButton= () => {
        router.push('/home');
    }
   
    return (
        <style.Wrapper>
            <style.TopBar>
                <PrevIcon onClick ={onClickPrevButton}/>
                {nowPlaylist.playlistTitle}
                <SettingIcon onClick={onClickSetting}/>
            </style.TopBar>
            <style.PlaylistInfoBox>
                <TimeBadge
                    whenPlaylistWillPlay={nowPlaylist.alarmStartTime}
                />
                <style.TimeText>
                    {nowPlaylist.trackCount}songs/{HandleMS(nowPlaylistPlayTIme)}
                </style.TimeText>
            </style.PlaylistInfoBox>
            <style.AlbumList>
            {playlistTracks.length >=1 && playlistTracks.map( (track) => (<HorizontalAlbum
                key = {track.trackId}
                imgUrl={track.albumImageUrl}
                songName = {track.trackTitle}
                singerName = {HandleSingerName(track.trackArtistList)}
                timer ={HandleMS(track.durationTimeMs)}
                onClick = {onClickAlbum}
            />
            ))}
            </style.AlbumList>

        </style.Wrapper>
    );
}

export default Id;