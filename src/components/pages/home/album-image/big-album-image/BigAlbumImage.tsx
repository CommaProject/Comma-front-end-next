import * as style from './BIgAlbumImage.style';

interface AlbumImageProps {
  imgSource: string;
}
export const BigAlbumImage = ({ imgSource }: AlbumImageProps) => {
  /**
   * TODO : [need-fix] 앨범 이미지의 width, height를 Props로 받을지 안받을지 고민했습니다
   * 만약, Common 폴더에 넣지 않고, /home 디렉토리에만 사용하게 할 시,
   * 굳이 Props 로 전달안해도 될것 같아서 입니다.
   */
   const widthHeight: string = '81.9px';

  return (
    <style.Img
      width={widthHeight}
      height={widthHeight}
      src={imgSource}
      alt="image"
      layout="fixed"
      objectFit="cover"
      objectPosition="center"
    />
  );
};
