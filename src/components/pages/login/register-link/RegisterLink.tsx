import Link from 'next/link';
import * as style from './RegisterLink.style';

/**
 * TODO : 회원가입 href 확인 필요, 재한님 pages폴더 보고 /signup으로 작성
 */
export const RegisterLink = () => (
  <style.Wrapper>
    아직 계정이 없으세요?
    <Link href="/signup">
      <span>가입하기</span>
    </Link>
  </style.Wrapper>
);
