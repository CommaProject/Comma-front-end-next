import * as style from './PlayerTemplate.style';

interface PlayerTemplateProps {
  onClickMinimize: () => void;
}

export const PlayerTemplate = ({ onClickMinimize }: PlayerTemplateProps) => (
  <style.Wrapper>
    <style.CloseButton onClick={onClickMinimize} />
    PlayerTemplate
  </style.Wrapper>
);
