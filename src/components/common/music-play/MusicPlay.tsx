import { useState } from 'react';
import * as style from './MusicPlay.style';

const MusicPlay = () => {

    const[isplaying,setIsPlaying]=useState(true);
    const handlePlayButton = () => {
        console.log(isplaying);
        setIsPlaying(!isplaying);
    }
    return(
        <style.Wrapper>
            { isplaying?
            <style.PauseButton onClick={handlePlayButton}/>
            :<style.PlayButton onClick={handlePlayButton}/>
            }
            <style.MusicPlayInfo>
                <style.ProgressBar
                    type="range"/>
                <style.Time>
                    <style.CurrentTime>00:00</style.CurrentTime>
                    <style.DurationTime>03:46</style.DurationTime>
                </style.Time>
            </style.MusicPlayInfo>
        </style.Wrapper>
    );
}

export default MusicPlay;