import React from 'react';
import * as style from './Avata.style';

export const Avata = ({ url, size }: { url: string; size: number }) => (
  <style.Wrapper>
    <style.ImgBox width={size} height={size}>
      <style.Image src={url} radius={size} />
    </style.ImgBox>
  </style.Wrapper>
);
