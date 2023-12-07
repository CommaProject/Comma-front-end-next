import Link from 'next/link';
import { API_URL } from '@/constants/apis';
import * as style from './SnsLoginBox.style';

export const SnsLoginBox = () => (
  <style.Wrapper>
    <style.Text>간편 로그인</style.Text>
    <style.Box>
      <Link href={`${API_URL}oauth2/authorization/kakao`}>
        <style.KakaoIcon onClick={() => 0} />
      </Link>
      <Link href={`${API_URL}oauth2/authorization/naver`}>
        <style.NaverIcon onClick={() => 0} />
      </Link>
      <style.InstagramIcon onClick={() => 0} />
      <Link href={`${API_URL}oauth2/authorization/google`}>
        <style.GoogleIcon onClick={() => 0} />
      </Link>
    </style.Box>
  </style.Wrapper>
);
