import * as style from './SnsLoginBox.style';

export const SnsLoginBox = () => (
  <style.Wrapper>
    <style.Text>간편 로그인</style.Text>
    <style.Box>
      {/* TODO : Oauth2 연결 로직 구현 필요 */}
      <style.KakaoIcon onClick={() => void 0} />
      <style.NaverIcon onClick={() => void 0} />
      <style.InstagramIcon onClick={() => void 0} />
      <style.GoogleIcon onClick={() => void 0} />
    </style.Box>
  </style.Wrapper>
);
