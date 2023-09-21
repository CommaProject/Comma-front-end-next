import * as style from './CategoryButtons.style';

interface CategoryButtonsProps {
  isHidden: boolean;
  category: string;
  onClickCategory: (category: string) => void;
}

export const CategoryButtons = ({
  isHidden,
  category,
  onClickCategory,
}: CategoryButtonsProps) => (
  <style.ButtonBox style={{ display: isHidden ? 'none' : 'flex' }}>
    <style.Button
      isActivate={category === 'music'}
      onClick={() => onClickCategory('music')}
    >
      음악
    </style.Button>
    <style.Button
      isActivate={category === 'artist'}
      onClick={() => onClickCategory('artist')}
    >
      가수
    </style.Button>
    <style.Button
      isActivate={category === 'commaUser'}
      onClick={() => onClickCategory('commaUser')}
    >
      사용자
    </style.Button>
  </style.ButtonBox>
);
