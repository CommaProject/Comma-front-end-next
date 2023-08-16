import * as style from './SmallAlbumImage.style';

interface SmallAlbumImageProps {
  // 메인 아이콘 이미지 주소 포함 전체 주소 list
  imgSources: string[];
}
export const SmallAlbumImage = ({ imgSources }: SmallAlbumImageProps) => {
  /**
   * TODO: [need-fix] BigAlbumImage와 동일합니다. Props로할지, 그냥 숫자를 넣을지 고민하고 있습니다.
   */
  const widthHeight = '32.76px';
  const imgSourcesLength = imgSources.length - 1;
  if (imgSourcesLength > 0 && imgSourcesLength<=2) {
    return (
      <style.Wrapper>
        {imgSources.map((source, index) => (
          // TODO : [need-check] z-index 값을 임의로 10으로 설정 했습니다
          <style.ImageItem key={index} num={index} zIndex={10 - index}>
            <style.Img
              width={widthHeight}
              height={widthHeight}
              src={source}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="image"
            />
            <style.Span>{index === 0 ? `${imgSourcesLength}+` : ''}</style.Span>
          </style.ImageItem>
        ))}
      </style.Wrapper>
    );
  }else if (imgSourcesLength >=3){
    return (
      <style.Wrapper>
        {imgSources.slice(0, 3).map((source, index) => (
          <style.ImageItem key={index} num={index} zIndex={10 - index}>
            <style.Img
              width={widthHeight}
              height={widthHeight}
              src={source}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="image"
            />
            <style.Span>{index === 0 ? `${imgSourcesLength - 3}+` : ''}</style.Span>
          </style.ImageItem>
        ))}
      </style.Wrapper>
    );
  } else {
    return null;
  }
};
