import * as style from './CategoryForm.style';
import CategoryBtnList from './category-btn-list';

const ARTIST_LIST = [
  'NCT DREAM',
  'NewJeans',
  '지코(ZICO)',
  'IVE',
  'NCT DREAM',
  '(여자)아이들',
  'LE SSERAFIM',
  '윤하',
  'NCT DREAM',
  '(여자)아이들',
  'LE SSERAFIM',
  '윤하',
  'NCT DREAM',
  '(여자)아이들',
  'LE SSERAFIM',
  '윤하',
  'NCT DREAM',
  '(여자)아이들',
  'LE SSERAFIM',
  '윤하',
  'NCT DREAM',
  '(여자)아이들',
  'LE SSERAFIM',
  '윤하',
];

const GENRE_LIST = [
  'POP',
  'LO-fi',
  'CLASSIC',
  'INDIE',
  'FOLK',
  'TROT',
  'ROCK',
  'DISCO',
  'POP',
  'LO-fi',
  'CLASSIC',
  'INDIE',
  'FOLK',
  'TROT',
  'ROCK',
  'DISCO',
  'POP',
  'LO-fi',
  'CLASSIC',
  'INDIE',
  'FOLK',
  'TROT',
  'ROCK',
  'DISCO',
];

interface CategoryFormProps {
  categoryTypeState: string;
  onClickCategory: (category: string) => void;
  onClickGenre: (genre: string) => void;
  onClickArtist: (artist: string) => void;
}
export const CategoryForm = ({
  categoryTypeState,
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

      {isActivate ? (
        <style.Slide>
          {/* <div>
          left ref div
          </div> */}
          {/* 여기에 추가 */}
          <CategoryBtnList
            onClick={onClickArtist}
            list={ARTIST_LIST.slice(0, 8)}
          />
          <CategoryBtnList
            onClick={onClickArtist}
            list={ARTIST_LIST.slice(0, 8)}
          />
          <CategoryBtnList
            onClick={onClickArtist}
            list={ARTIST_LIST.slice(8, 16)}
          />
          <CategoryBtnList
            onClick={onClickArtist}
            list={ARTIST_LIST.slice(16, 24)}
          />
          {/* 여기에 추가 */}
          {/* <div>
          right ref div
          </div> */}
        </style.Slide>
      ) : (
        <style.Slide>
          <CategoryBtnList
            onClick={onClickGenre}
            list={GENRE_LIST.slice(0, 8)}
          />
          <CategoryBtnList
            onClick={onClickGenre}
            list={GENRE_LIST.slice(8, 16)}
          />
          <CategoryBtnList
            onClick={onClickGenre}
            list={GENRE_LIST.slice(16, 24)}
          />
        </style.Slide>
      )}
    </style.Wrapper>
  );
};
