import * as style from './PlaylistTexts.style';

interface PlaylistTextsProps {
  isPlaylistSelected: boolean;
  whenPlaylistWillPlay: string;
  isEditMode: boolean;
}
export const PlaylistTexts = ({ isPlaylistSelected }: PlaylistTextsProps, {isEditMode}: PlaylistTextsProps) => {
  return (
    <style.Wrapper isEditMode={isEditMode} isPlaylistSelected={isPlaylistSelected}>
      <style.Text
        isFontBoldElseRegular={true}
        isFontNotoElsePre={false}
        isFontsize15Else12={true}
      >
        {/*  TODO : 이 부분을 Date 자바스크립트 함수로 구현하려했는데 렌더링 쪽 에러가 생겨서 포기했습니다 ㅠ*/}
        05:34:23
      </style.Text>
      <style.Text
        isFontBoldElseRegular={true}
        isFontNotoElsePre={true}
        isFontsize15Else12={true}
      >
        {/* TODO : API 명세가 나오지 않아서 작업을 하지 못했고, 임의의 데이터 넣어놓음  */}
        아침에 커피 마시면서,
      </style.Text>
      <style.Text
        isFontBoldElseRegular={false}
        isFontNotoElsePre={false}
        isFontsize15Else12={false}
      >
        {/*위와 동일 */}4 songs / 15m 23s
      </style.Text>
    </style.Wrapper>
  );
};
