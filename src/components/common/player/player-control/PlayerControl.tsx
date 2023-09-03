import * as style from './PlayerControl.style';

export const PlayerControl = () => (
  <style.Wrapper>
    <style.ProgressBar
      type="range"
      min={0}
      /* max={audioRef.current?.duration && Math.floor(audioRef.current?.duration)} */
      /* value={currentTime} */
    />
    <style.ButtonsContainer>
      <style.RewindButton />
      <style.PlayButton />
      <style.FastForwordButton />
    </style.ButtonsContainer>
  </style.Wrapper>
);
