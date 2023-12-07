import styled, { css } from 'styled-components';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import {
  PlaylistType,
} from '@/constants/types/playlistTypes';
import { SliderFreeMode } from '@/components/common/slider-free-mode';
import PlaylistPlusSVG from '@/assets/images/playlistPlus.svg';
import { PlaylistAlbumForModal as Album } from '@/components/common/playlist-rep-album-with-num';

const Wrapper = styled.div`
  height: 100%;
  width: 390px;
  height: 245px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.18);
  position: absolute;
  bottom: 0;
`;
const Box = styled.div`
  margin-top: 32px;
  margin-left: 15px;
  margin-right: 15px;
`;

const AlbumBox = styled.div`
  display: flex;
  flex-direction: column;  
  margin-bottom: 16px;
  overflow: hidden;
`

const PlaylistTitle = styled.div`
  color: #0F0F0F;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
`

interface PlusModalProps {
  myPlayList: PlaylistType[];
  onClickPlaylist: (playlistId: number) => void;
  onClickAddPlaylist: () => void;
}

export const PlusButton = styled.div`
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
              <AlbumBox>
                <Album
                  key={playlist.playlistId}
                  playlistId={playlist.playlistId}
                  registeredTrack={false}
                  repAlbumImageUrl={playlist.repAlbumImageUrl}
                  trackCount={playlist.trackCount}
                  onClickPlaylist={onClickPlaylist}
                />
                <PlaylistTitle>
                  {playlist.playlistTitle}
                </PlaylistTitle>
              </AlbumBox>
            );
          })}
        <PlusButton onClick={onClickAddPlaylist}>
          <PlaylistPlusSVG />
        </PlusButton>
      </SliderFreeMode>
    </Box>
  </Wrapper>
);
