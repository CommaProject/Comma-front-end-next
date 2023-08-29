import React, { useEffect, useState, useRef } from 'react';
import { useAtom } from 'jotai';
import { musicStateAtom } from '@/stores/music';
import * as style from './MusicPlay.style';

const MusicPlay = (audioUrl: string) => {
  const [musicState, setMusicState] = useAtom(musicStateAtom);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);

  let musicTotalMinutes = 0;
  let musicTotalSeconds = 0;
  const totalDuration = audioRef.current?.duration;

  if (totalDuration) {
    musicTotalMinutes = Math.floor(totalDuration / 60);
    musicTotalSeconds = Math.floor(totalDuration % 60);
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value, 10);
    setCurrentTime(newTime);
    audioRef.current!.currentTime = newTime;
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      setMusicState((prevMusicState) => ({
        ...prevMusicState,
        isPlaying: !prevMusicState.isPlaying,
      }));
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  // current time을 수시로 바꿔줌
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

  // 시간이 다 되어 멈추는 시점
  useEffect(() => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        setMusicState((prevMusicState) => ({
          ...prevMusicState,
          isPlaying: false,
        }));
      }
    }
  }, [audioRef.current && audioRef.current.paused]);

  return (
    <style.Wrapper>
      {musicState.isPlaying ? (
        <style.PauseButton onClick={toggleAudio} />
      ) : (
        <style.PlayButton onClick={toggleAudio} />
      )}
      <style.AudioContainer>
        <audio ref={audioRef}>
          <source src={audioUrl} type="audio/mpeg" />
          <track kind="captions" />
        </audio>

        <style.ProgressBar
          onChange={handleTimeChange}
          type="range"
          min={0}
          max={
            audioRef.current?.duration && Math.floor(audioRef.current?.duration)
          }
          value={currentTime}
        />
        <style.Time>
          <style.CurrentTime>
            {currentMinutes}:
            {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
          </style.CurrentTime>
          <style.DurationTime>
            {musicTotalMinutes}:
            {musicTotalSeconds && musicTotalSeconds < 10
              ? `0${musicTotalSeconds}`
              : musicTotalSeconds}
          </style.DurationTime>
        </style.Time>
      </style.AudioContainer>
    </style.Wrapper>
  );
};

export default MusicPlay;
