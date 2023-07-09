import Link from 'next/link';
import * as style from './SnsLoginBox.style';

export const SnsLoginBox = () => (
  <style.Wrapper>
    <style.Text>간편 로그인</style.Text>
    <style.Box>
      <Link href="http://43.201.188.96:8080/oauth2/authorization/kakao">
        <style.KakaoIcon onClick={() => 0} />
      </Link>
      <Link href="http://43.201.188.96:8080/oauth2/authorization/naver">
        <style.NaverIcon onClick={() => 0} />
      </Link>
      <style.InstagramIcon onClick={() => 0} />
      <Link href="http://43.201.188.96:8080/oauth2/authorization/google">
        <style.GoogleIcon onClick={() => 0} />
      </Link>
    </style.Box>
  </style.Wrapper>
);
