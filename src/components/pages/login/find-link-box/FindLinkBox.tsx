
import Link from 'next/link';
import * as style from '@/components/pages/login/find-link-box/FindLinkBox.style';

/**
 * TODO : 아이디 비밀번호 href 추가 필요
 */
export const FindLinkBox = () => (
  <style.Wrapper>
    <Link className="findLink" href="/">
      아이디 찾기
    </Link>
    <Link className="findLink" href="/">
      비밀번호 찾기
    </Link>
    <style.Box>
      아직 계정이 없으세요?
      <Link href="/signup">
        <style.Text>가입하기</style.Text>
      </Link>
    </style.Box>
  </style.Wrapper>
);
