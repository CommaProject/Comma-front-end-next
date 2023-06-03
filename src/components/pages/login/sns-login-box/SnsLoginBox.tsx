import * as style from './SnsLoginBox.style';

export const SnsLoginBox = () => (
  <style.Wrapper>
    <style.Text>간편 로그인</style.Text>
    <style.Box>
      {/* TODO : Oauth2 연결 로직 구현 필요 */}
      <style.KakaoIcon onClick={() => {}} />
      <style.NaverIcon onClick={() => {}} />
      <style.InstagramIcon onClick={() => {}} />
      <style.GoogleIcon onClick={() => {}} />
    </style.Box>
  </style.Wrapper>
);
