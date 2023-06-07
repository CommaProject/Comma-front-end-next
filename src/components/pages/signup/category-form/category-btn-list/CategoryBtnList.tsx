import * as style from './CategoryBtnList.style';

const POSITIONS = [
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
export const CategoryBtnList = ({
  list,
  selectedList,
  onClick,
}: CategoryBtnListProps) => (
  <style.Wrapper>
    {list.map((artist, idx) => (
      <style.Button
        isBig={idx < 4}
        isSelected={selectedList.includes(artist)}
        left={POSITIONS[idx].left}
        bottom={POSITIONS[idx].bottom}
        onClick={() => onClick(artist)}
        key={artist + idx.toString()}
      >
        {artist}
      </style.Button>
    ))}
  </style.Wrapper>
);
