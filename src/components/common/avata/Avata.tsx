import React from 'react';
import * as style from './Avata.style';

export const Avata = ({
  url,
  singerName,
  singerSubName,
}: {
  url: string;
  singerName: string;
  singerSubName: string;
}) => (
  <style.Wrapper>
    <style.ImgBox>
      <style.Image src={url} />
    </style.ImgBox>
    <style.SingerName>{singerName}</style.SingerName>
    <style.SingerSubName>{singerSubName}</style.SingerSubName>
  </style.Wrapper>
);
