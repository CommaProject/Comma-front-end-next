import { musicStateAtom } from '@/stores/music';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import * as style from './MusicPlay.style';

const MusicPlay = () => {
  const [musicState, setMusicState] = useAtom(musicStateAtom);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const audioUrl =
    'https://p.scdn.co/mp3-preview/41ca116da4133de4e1bbd8bfd18de9e1273b455a?cid=f6d89d8d397049678cbbf45f829dd85a';

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = currentTime % 60;

  const totalDuration =
    musicState.track.durationMinute * 60 + musicState.track.durationSecond;

  const playPauseToggle = () => {
    setMusicState((prevMusicState) => ({
      ...prevMusicState,
      isPlaying: !prevMusicState.isPlaying,
    }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value, 10);
    setCurrentTime(newTime);
  };
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  useEffect(() => {
    if (audioRef.current) {
      const updateCurrentTime = () => {
        setCurrentTime(audioRef.current!.currentTime);
      };
      audioRef.current.addEventListener('timeupdate', updateCurrentTime);
      return () => {
        audioRef.current!.removeEventListener('timeupdate', updateCurrentTime);
      };
    }

    return undefined;
  }, []);

  useEffect(() => {
    let interval: any;

    if (musicState.isPlaying) {
      interval = setInterval(() => {
        if (currentTime < totalDuration) {
          setCurrentTime((prevTime) => prevTime + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentTime, musicState.isPlaying, totalDuration]);

  return (
    <style.Wrapper>
      {musicState.isPlaying ? (
        <style.PauseButton onClick={playPauseToggle} />
      ) : (
        <style.PlayButton onClick={playPauseToggle} />
      )}
      <style.AudioContainer>
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          <track kind="captions" srcLang="en" label="English captions" />
        </audio>
        <style.ProgressBarContainer>
          <style.CustomProgressBar
            onChange={handleTimeChange}
            type="range"
            min={0}
            max={audioRef.current?.duration || 0}
            value={currentTime}
          />
        </style.ProgressBarContainer>
        <style.ProgressBar
          onChange={handleTimeChange}
          type="range"
          min={0}
          max={totalDuration}
          value={currentTime}
        />
        <style.Time>
          <style.CurrentTime>
            {currentMinutes}:
            {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
          </style.CurrentTime>
          <style.DurationTime>
            {musicState.track.durationMinute}:{musicState.track.durationSecond}
          </style.DurationTime>
        </style.Time>
      </style.AudioContainer>
    </style.Wrapper>
  );
};

export default MusicPlay;
