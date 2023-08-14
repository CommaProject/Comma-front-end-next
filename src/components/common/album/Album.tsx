import * as style from './Album.style';

export const Album = ({ url, size }: { url: string; size: number }) => (
  <style.Wrapper>
    <style.ImgBox width={size} height={size}>
      <style.Image src={url} />
    </style.ImgBox>
  </style.Wrapper>
);
