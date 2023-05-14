import * as style from './CategoryBtnList.style';

const Positions = [
  { left: 0, bottom: 0 },
  { left: 117, bottom: 65 },
  { left: 203, bottom: 191 },
  { left: 323, bottom: 128 },
  { left: 34, bottom: 122 },
  { left: 100, bottom: 202 },
  { left: 243, bottom: 91 },
  { left: 317, bottom: 26 },
];

interface CategoryBtnListProps {
  list: string[];
  selectedList: string[];
  onClick: (value: string) => void;
}
export const CategoryBtnListReverse = ({
  list,
  selectedList,
  onClick,
}: CategoryBtnListProps) => (
  <style.Wrapper>
    {list.map((artist, idx) =>
      idx < 4 ? (
        <style.Button
          isBig
          isSelected={selectedList.includes(artist)}
          left={Positions[idx].left}
          bottom={Positions[idx].bottom}
          onClick={() => onClick(artist)}
          key={artist.concat(String(idx))}
        >
          {artist}
        </style.Button>
      ) : (
        <style.Button
          isBig={false}
          isSelected={selectedList.includes(artist)}
          left={Positions[idx].left}
          bottom={Positions[idx].bottom}
          onClick={() => onClick(artist)}
          key={artist.concat(String(idx))}
        >
          {artist}
        </style.Button>
      ),
    )}
  </style.Wrapper>
);
