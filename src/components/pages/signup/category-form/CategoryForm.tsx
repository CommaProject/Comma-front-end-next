import { MutableRefObject } from 'react';

import CategoryBtnList from './category-btn-list';
import * as style from './CategoryForm.style';

interface CategoryFormProps {
  categoryTypeState: string;
  artists: string[];
  genres: string[];
  selectedArtists: string[];
  selectedGenres: string[];
  rightRef: MutableRefObject<any>;
  onClickCategory: (category: string) => void;
  onClickGenre: (genre: string) => void;
  onClickArtist: (artist: string) => void;
}
export const CategoryForm = ({
  artists,
  genres,
  categoryTypeState,
  selectedArtists,
  selectedGenres,
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
        <style.FlexBox>
          {isActivate ? (
            <style.FlexBox>
              {artists.map((artist, idx) => {
                return idx % 8 === 0 ? (
                  <CategoryBtnList
                    key={artist + idx}
                    onClick={onClickArtist}
                    list={artists.slice(idx, idx + 8)}
                    selectedList={selectedArtists}
                  />
                ) : null;
              })}
              <div ref={rightRef} />
            </style.FlexBox>
          ) : (
            <style.FlexBox>
              {genres.map((genre, idx) => {
                return idx % 8 === 0 ? (
                  <CategoryBtnList
                    key={genre + idx}
                    onClick={onClickGenre}
                    list={genres.slice(idx, idx + 8)}
                    selectedList={selectedGenres}
                  />
                ) : null;
              })}
            </style.FlexBox>
          )}
        </style.FlexBox>
      </style.Slide>
    </style.Wrapper>
  );
};
