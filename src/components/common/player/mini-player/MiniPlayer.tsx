import { Album } from '@/components/common/album';
import * as style from './MiniPlayer.style';

export const MiniPlayer = () => (
  <style.Wrapper>
    <style.ProgressBarContainer>
      <style.ProgressBarFill progress={30} />
    </style.ProgressBarContainer>
    <style.AlbumContainer>
      <Album
        url="https://www.codingfactory.net/wp-content/uploads/abc.jpg"
        size={56}
        borderRadius={5}
      />
      <style.TextContainer>
        <style.SongName>새소녀</style.SongName>
        <style.SingerName>새소녀</style.SingerName>
      </style.TextContainer>
    </style.AlbumContainer>
    <style.ButtonsContainer>
      <style.RewindButton />
      <style.PlayButton />
      <style.FastForwordButton />
    </style.ButtonsContainer>
  </style.Wrapper>
);
