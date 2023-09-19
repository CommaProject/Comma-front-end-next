import React from 'react';
import { TrackType } from '@/types/trackTypes';
import MusicPlay from '@/components/common/music-play';
import * as style from './MusicAlbumFrom.style';
import { HorizontalAlbumWithIcon } from '../horizontal-album-with-icon';

type isLike = boolean;
interface EnhancedTrackProps extends TrackType {
  isLike: boolean;
}
interface MusicAlbumFromProps {
  musicData: EnhancedTrackProps[] | undefined;
  onClickPlusButton: () => void;
  onClickLikeButton: (trackId: string) => void;
  onClickAlbumBox: (previewUrl: string, trackId: string) => void;
  isPreviewMusicPlayerHidden: boolean;
  openMusicPlayer: string;
}

export const MusicAlbumFrom = ({
  musicData,
  onClickPlusButton,
  onClickLikeButton,
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
              isLike={value.isLike}
              timer={`${value.durationMinute}m ${value.durationSecond}s`}
              imgUrl={value.images ? value.images[0].url : 'error: undefine'}
              songName={value.trackName}
              singerName={value.artist}
              onClickPlusButton={onClickPlusButton}
              onClickLikeButton={() => onClickLikeButton(value.trackId)}
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
