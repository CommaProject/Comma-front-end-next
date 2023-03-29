import { useState } from 'react';
import {
  HidePasswordIcon,
  LoginContainer,
  LoginInputContainer,
  ShowPasswordIcon,
  SimpleLoginConatiner,
} from '@/components/login/common-style/LoginCommon.style';
import MainLogo from '@/components/login/main-logo';
import LoginIdInput from '@/components/login/inputs/login-id-input';
import LoginPasswordInput from '@/components/login/inputs/login-password-input';
import LoginBtn from '@/components/login/login-btn';
import { FindIdPwLink } from '@/components/login/find-id-pw-link/FindIdPwLink';
import RegisterLink from '@/components/login/register-link/index';
import SnsLoginTextDiv from '@/components/login/sns-login-text-div';
import SnsLoginIcons from '@/components/login/sns-login-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LoginContainer>
      <MainLogo />
      <LoginInputContainer>
        <LoginIdInput />
        <LoginPasswordInput showPassword={showPassword} />
        {showPassword ? (
          <ShowPasswordIcon
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        ) : (
          <HidePasswordIcon
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        )}
      </LoginInputContainer>
      <LoginBtn />
      <FindIdPwLink />
      <RegisterLink />
      <SimpleLoginConatiner>
        <SnsLoginTextDiv />
        <SnsLoginIcons />
      </SimpleLoginConatiner>
    </LoginContainer>
  );
};

export default Login;
