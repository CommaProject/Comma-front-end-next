import Link from 'next/link';
import { REGISTER_PAGE } from '~/src/constants/router-pages/routerPages';
import { RegisterLinkWrapper } from '@/components/login/common-style/LoginCommon.style';

export const RegisterLink = () => (
  <RegisterLinkWrapper>
    아직 계정이 없으세요?
    <Link href={REGISTER_PAGE}>
      <span>가입하기</span>
    </Link>
  </RegisterLinkWrapper>
);
