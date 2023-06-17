import { useState } from 'react';
import LoginTemplate from '@/components/template/login';

import { useLogIn } from '@/hooks/useLogIn';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}

const Login = () => {
  const {
    enteredInputId,
    enteredInputPw,
    handleInputId,
    handleInputPw,
    handleLogIn,
  } = useLogIn();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onClickIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <LoginTemplate
      inputId={enteredInputId}
      setIsPasswordVisible={setIsPasswordVisible}
      onChangeInputId={handleInputId}
      inputPw={enteredInputPw}
      onChangeInputPw={handleInputPw}
      isPasswordVisible={isPasswordVisible}
      onClickIsPasswordVisible={onClickIsPasswordVisible}
      onClickLoginLogic={handleLogIn}
    />
  );
};

export default Login;
