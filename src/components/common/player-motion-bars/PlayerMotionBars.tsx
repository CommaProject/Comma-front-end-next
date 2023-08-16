import { useState } from 'react';
import * as style from './PlayerMotionBars.style';

export const MusicPlaybar = () => {

    // minimum: 5 Maximum: 65
    const [musicMotionBarLength, setMusicMotionBarLength ] = useState([''])

    return (<style.Wrapper><style.PlayerMotionBarIcon first='5' second='5' third='5'/>test</style.Wrapper>)
}