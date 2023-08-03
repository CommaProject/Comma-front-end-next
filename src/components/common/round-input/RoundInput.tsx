import * as style from './RoundInput.style';

export const RoundInput = () => (
  <style.Wrapper>
    <style.SearchIcon />
    <style.Input
      onClick={() => {
        console.log('input Clicked');
      }}
    />
  </style.Wrapper>
);
