import * as style from './CategoryButtons.style';

interface CategoryButtonsProps {
  isHidden: boolean;
  onClickCategory: (category: string) => void;
}

export const CategoryButtons = ({
  isHidden,
  onClickCategory,
}: CategoryButtonsProps) => (
  <style.ButtonBox style={{ display: isHidden ? 'none' : 'flex' }}>
    <style.Button isActivate onClick={() => onClickCategory('music')}>
      음악
    </style.Button>
    <style.Button isActivate={false} onClick={() => onClickCategory('artist')}>
      가수
    </style.Button>
    <style.Button
      isActivate={false}
      onClick={() => onClickCategory('commaUser')}
    >
      사용자
    </style.Button>
  </style.ButtonBox>
);
