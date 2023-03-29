import axios from 'axios';
import { useRouter } from 'next/router';
import { loginInputAtom } from '@/stores/atoms';
import { useAtom } from 'jotai';
import { LOGIN_API_URL } from '@/constants/router-pages/routerPages';
import { LoginButtonWrapper } from '@/components/login/common-style/LoginCommon.style';
import { LoginBtnStyle } from './LoginBtn.style';

export const LoginBtn = () => {
  const router = useRouter();
  const [input, setInput] = useAtom(loginInputAtom);

  /**
   * 로그인 로직 API 구조만 짜놓았습니다.
   */
  const loginCheck = () => {
    // TODO : 백엔드 로그인 URI 기입 필요
    axios
      .post(LOGIN_API_URL, {
        id: input.id,
        password: input.password,
      })
      .then((res) => {
        // TODO : API SPEC 나온후 작성 필요
        router.push('/');
      });
  };

  return (
    <LoginButtonWrapper>
      <LoginBtnStyle
        onClick={() => {
          loginCheck();
        }}
      >
        로그인
      </LoginBtnStyle>
    </LoginButtonWrapper>
  );
};
