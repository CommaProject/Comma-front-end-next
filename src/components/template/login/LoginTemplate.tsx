import * as style from './LoginTemplate.style';
import { ChangeEvent } from 'react';
import LoginInputBox from '~/src/components/pages/login/login-input-box';
import FindLinkBox from '@/components/pages/login/find-link-box';
import SnsLoginBox from '@/components/pages/login/sns-login-box';

interface LoginTemplateProps {
  inputId: string;
  onChangeInputId: (event: ChangeEvent<HTMLInputElement>) => void;
  inputPw: string;
  onChangeInputPw: (event: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeIsPasswordVisible: () => void;
  onClickLoginLogic: () => void;
}

export const LoginTemplate = ({
  inputId,
  onChangeInputId,
  inputPw,
  onChangeInputPw,
  isPasswordVisible,
  setIsPasswordVisible,
  onChangeIsPasswordVisible,
  onClickLoginLogic,
}: LoginTemplateProps) => {
  return (
    <style.Wrapper>
      <style.MainIcon />
      <LoginInputBox
        inputId={inputId}
        onChangeInputId={onChangeInputId}
        inputPw={inputPw}
        onChangeInputPw={onChangeInputPw}
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
        onChangeIsPasswordVisible={onChangeIsPasswordVisible}
        onClickLoginLogic={onClickLoginLogic}
      />
      <FindLinkBox />
      <SnsLoginBox />
    </style.Wrapper>
  );
};
