import { useState } from 'react';
import * as style from './PlayerMotionBars.style';

export const PlayerMotionBars = () => {
  // minimum: 5 Maximum: 65
  const [musicMotionBarLength, setMusicMotionBarLength] = useState([5, 5, 5]);
  return (
    <style.Wrapper>
      <style.PlayerMotionBarIcon
        style={{ backgroundColor: 'black' }}
        first={musicMotionBarLength[0]}
        second={musicMotionBarLength[1]}
        third={musicMotionBarLength[2]}
      />
      test
    </style.Wrapper>
  );
};
