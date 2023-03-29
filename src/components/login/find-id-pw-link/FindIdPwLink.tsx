import Link from 'next/link';
import {
  FIND_ID_PAGE,
  FIND_PASSWORD_PAGE,
} from '@/constants/router-pages/routerPages';
import { FindIdPwDivWrapper } from '@/components/login/common-style/LoginCommon.style';
import { FindIdPwLinkStyle } from '~/src/components/login/find-id-pw-link/FindIdPwLink.style';

export const FindIdPwLink = () => (
  <FindIdPwDivWrapper>
    <FindIdPwLinkStyle>
      <Link href={FIND_ID_PAGE}>아이디 찾기</Link>
      <Link href={FIND_PASSWORD_PAGE}>비밀번호 찾기</Link>
    </FindIdPwLinkStyle>
  </FindIdPwDivWrapper>
);
