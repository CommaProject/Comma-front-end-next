import * as style from '~/src/pages/playlist/[id].style';
import PrevIcon from '@/assets/images/PrevArrow.svg';
import SettingIcon from '@/assets/images/setting.svg';
import TimeBadge from '@/components/pages/home/time-badge';
import { HorizontalAlbum } from '@/components/common/album/horizontal-album';
import { useState } from 'react';

const Id = () => {
    const [isEditMode,setIsEditMode] = useState(false);

    const onClickSetting = () =>{
        setIsEditMode(!isEditMode);
    }

    const onClickAlbum = () =>{
        
    }
    return (
        <style.Wrapper>
            <style.TopBar>
                <PrevIcon/>
                플레이리스트 제목
                <SettingIcon onClick={onClickSetting}/>
            </style.TopBar>
            <style.PlaylistInfoBox>
                <TimeBadge
                    whenPlaylistWillPlay="12:00"
                    isTimeBadgeVisible= {true}
                />
                <style.TimeText>
                    4songs/4h 25m 34s
                </style.TimeText>
            </style.PlaylistInfoBox>
            <style.AlbumList>
            <HorizontalAlbum
                imgUrl=''
                songName = '노래 제목'
                singerName = '가수'
                timer = '3m 30s'
                onClick = {onClickAlbum}
            />
            </style.AlbumList>

        </style.Wrapper>
    );
}

export default Id;