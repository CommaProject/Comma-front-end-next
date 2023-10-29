import styled, { css } from 'styled-components';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import {
  EnhancedPlaylistType,
  PlaylistType,
} from '@/constants/types/playlistTypes';
import { SliderFreeMode } from '@/components/common/slider-free-mode';
import playlistPlusSVG from '@/assets/images/playlistPlus.svg';
import { PlaylistAlbumForModal } from '@/components/common/playlist-rep-album-with-num';
import Image from 'next/image';

export const Wrapper = styled.div`
  height: 100%;
  width: 390px;
  height: 245px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.18);
  position: absolute;
  bottom: 0;
`;
export const Box = styled.div`
  margin-top: 32px;
  margin-left: 25px;
`;

interface PlusModalProps {
  myPlayList: PlaylistType[];
  onClickPlaylist: (playlistId: number) => void;
  onClickAddPlaylist: () => void;
}
export const PlusButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 92px;
  height: 92px;
  background-color: rgba(104, 154, 255, 0.7);
  border-radius: 15px;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusModal = ({
  myPlayList,
  onClickPlaylist,
  onClickAddPlaylist,
}: PlusModalProps) => (
  <Wrapper>
    <Box>
      <SliderFreeMode componentGab={0}>
        {myPlayList &&
          myPlayList.map((playlist: PlaylistType) => {
            console.log(playlist.playlistId);
            return (
              <PlaylistAlbumForModal
                key={playlist.playlistId}
                playlistId={playlist.playlistId}
                registeredTrack={false}
                repAlbumImageUrl={playlist.repAlbumImageUrl}
                trackCount={playlist.trackCount}
                onClickPlaylist={onClickPlaylist}
              />
            );
          })}
        <PlusButton onClick={onClickAddPlaylist}>
          {' '}
          <Image
            src="/src/assets/images/playlistPlus.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </PlusButton>
      </SliderFreeMode>
    </Box>
  </Wrapper>
);
