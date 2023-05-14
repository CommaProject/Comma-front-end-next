import { MutableRefObject, useEffect, useRef, useState } from 'react';
import CategoryBtnList from './category-btn-list';

import * as style from './CategoryForm.style';

interface CategoryFormProps {
  categoryTypeState: string;
  artists: string[];
  genres: string[];
  artistBox: any;
  leftBox: any;
  selectedArtists: string[];
  selectedGenres: string[];
  leftRef: MutableRefObject<any>;
  rightRef: MutableRefObject<any>;
  onClickCategory: (category: string) => void;
  onClickGenre: (genre: string) => void;
  onClickArtist: (artist: string) => void;
}
export const CategoryForm = ({
  categoryTypeState,
  artists,
  genres,
  leftBox,
  artistBox,
  selectedArtists,
  selectedGenres,
  leftRef,
  rightRef,
  onClickCategory,
  onClickGenre,
  onClickArtist,
}: CategoryFormProps) => {
  const isActivate = categoryTypeState === 'artist';
  return (
    <style.Wrapper>
      <style.Title>어떤 음악 좋아하세요?</style.Title>
      <style.Desc>
        좋아하는 카테고리는 한 번,
        <br />
        좋아하지 않는 카테고리라면 길게 누르세요.
      </style.Desc>
      <style.Emphs>*최소 3개 이상씩 골라주세요.</style.Emphs>
      <style.Box>
        <style.Button
          isActivate={isActivate}
          onClick={() => onClickCategory('artist')}
        >
          아티스트
        </style.Button>
        <style.Button
          isActivate={!isActivate}
          onClick={() => onClickCategory('genre')}
        >
          장르
        </style.Button>
      </style.Box>

      <style.Slide>
        <div ref={leftRef} />
        {artistBox.map((artist: any) => {
          return (
            <div>
              <CategoryBtnList
                key={artist[0]}
                onClick={onClickArtist}
                list={artist.slice(0, 8)}
                selectedList={selectedArtists}
              />
            </div>
          );
        })}
        <div ref={rightRef} />
        {/* {isActivate ? ( */}
        {/* {artistBox[0] && (
            <CategoryBtnList
            key={artistBox[0][0]}
            onClick={onClickArtist}
            list={artistBox[0].slice(0, 8)}
            selectedList={selectedArtists}
            />
            )}
          <div ref={divRef} /> */}

        {/* <div style={{ display: 'flex' }}>
        </div> */}
        {/* <style.FlexBox>
            {genres.map((genre, idx) => {
              if (idx % 8 === 0)
                return (
                  <CategoryBtnList
                    onClick={onClickGenre}
                    list={genres.slice(idx, idx + 8)}
                    selectedList={selectedGenres}
                  />
                );
            })}
          </style.FlexBox>
        )} */}
      </style.Slide>
    </style.Wrapper>
  );
};
