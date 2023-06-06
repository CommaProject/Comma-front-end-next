import CommaLogo from '@/assets/images/commaLogo.svg';
import * as style from './SuccessBox.style';

export const SuccessBox = () => (
  <style.Wrapper>
    <style.Text>일상의</style.Text>
    <style.Icon>
      <CommaLogo className="icon" />
    </style.Icon>
    <style.Text>휴식</style.Text>
  </style.Wrapper>
);
