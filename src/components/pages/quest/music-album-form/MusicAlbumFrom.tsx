import React from 'react';
import { EnhancedTrackProps } from '@/types/trackTypes';
import MusicPlay from '@/components/common/music-play';
import * as style from './MusicAlbumFrom.style';
import { HorizontalAlbumWithIcon } from '../horizontal-album-with-icon';

interface MusicAlbumFromProps {
  musicData: EnhancedTrackProps[] | undefined;
  onClickPlusButton: () => void;
  onClickFavoriteButton: (trackId: string) => void;
  onClickAlbumBox: (previewUrl: string, trackId: string) => void;
  isPreviewMusicPlayerHidden: boolean;
  openMusicPlayer: string;
}

export const MusicAlbumFrom = ({
  musicData,
  onClickPlusButton,
  onClickFavoriteButton,
  onClickAlbumBox,
  isPreviewMusicPlayerHidden,
  openMusicPlayer,
}: MusicAlbumFromProps) => (
  <style.Wrapper>
    {musicData &&
      musicData.map((value) => (
        <style.Wrapper>
          <style.AlbumBox
            onClick={() => {
              onClickAlbumBox(value.previewUrl, value.trackId);
            }}
          >
            <HorizontalAlbumWithIcon
              key={value.albumId}
              isFavorite={value.isFavorite}
              timer={`${value.durationMinute}m ${value.durationSecond}s`}
              imgUrl={value.images ? value.images[0].url : 'error: undefine'}
              songName={value.trackName}
              singerName={value.artist}
              onClickPlusButton={onClickPlusButton}
              onClickFavoriteButton={() => onClickFavoriteButton(value.trackId)}
              onClick={() => {}}
            />
          </style.AlbumBox>
          {openMusicPlayer === value.trackId && (
            <MusicPlay
              isHidden={isPreviewMusicPlayerHidden}
              audioUrl={value.previewUrl}
            />
          )}
        </style.Wrapper>
      ))}
  </style.Wrapper>
);
