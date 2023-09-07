import * as style from './Album.style';

export const Album = ({
  url,
  size,
  borderRadius,
}: {
  url: string;
  size: number;
  borderRadius: number;
}) => (
  <style.Wrapper>
    <style.ImgBox width={size} height={size}>
      <style.Image src={url} borderRadius={borderRadius} />
    </style.ImgBox>
  </style.Wrapper>
);
