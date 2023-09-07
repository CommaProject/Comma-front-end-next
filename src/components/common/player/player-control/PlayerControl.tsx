import * as style from './PlayerControl.style';

export const PlayerControl = () => (
  <style.Wrapper>
    <style.ProgressBar
      type="range"
      min={0}
      /* max={audioRef.current?.duration && Math.floor(audioRef.current?.duration)} */
      /* value={currentTime} */
    />
    <style.ControlsContainer>
      <style.TimeContainer>
        <style.CurrentTime>
          <style.TimeTypography>00:00</style.TimeTypography>
        </style.CurrentTime>
        <style.DurationTime>
          <style.TimeTypography>03:10</style.TimeTypography>
        </style.DurationTime>
      </style.TimeContainer>
      <style.ButtonsContainer>
        <style.RewindButton />
        <style.PlayButton />
        <style.FastForwordButton />
      </style.ButtonsContainer>
    </style.ControlsContainer>
  </style.Wrapper>
);
