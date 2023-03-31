import { ChangeEvent } from 'react';
import * as style from './LoginInputForm.style';

// interface LoginInputsProps {
//   inputId: string;
//   onChangeInputId: (event: ChangeEvent<HTMLInputElement>) => void;
//   inputPw: string;
//   onChangeInputPw: (event: ChangeEvent<HTMLInputElement>) => void;
//   isPasswordVisible: boolean;
//   setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   onChangeIsPasswordVisible: () => void;
//   onClickLoginLogic: () => void;
// }

// export const LoginInputBox = ({
//   inputId,
//   onChangeInputId,
//   inputPw,
//   onChangeInputPw,
//   isPasswordVisible,
//   setIsPasswordVisible,
//   onClickLoginLogic,
// }: LoginInputsProps) => {
//   return (
//     <style.Wrapper>
//       <style.Input
//         type="text"
//         placeholder="아이디"
//         name="id"
//         value={inputId}
//         onChange={onChangeInputId}
//       />
//       <style.Input
//         name="password"
//         type={isPasswordVisible ? 'text' : 'password'}
//         placeholder="비밀번호"
//         value={inputPw}
//         onChange={onChangeInputPw}
//       />
//       {isPasswordVisible ? (
//         <style.NowPasswordVisibleIcon onClick={setIsPasswordVisible} />
//       ) : (
//         <style.NowPasswordInvisibleIcon onClick={setIsPasswordVisible} />
//       )}
//       <style.Button onClick={onClickLoginLogic}>로그인</style.Button>
//     </style.Wrapper>
//   );
// };
interface LoginInputFormProps {
  input: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isPassword: boolean;
  isPasswordVisible: boolean;
}
export const LoginInputForm = ({
  input,
  onChange,
  isPassword,
  isPasswordVisible,
}: LoginInputFormProps) => {
  const isPasswordAndPasswordVisible = isPassword && !isPasswordVisible;
  return (
    <style.Input
      type={isPasswordAndPasswordVisible ? 'password' : 'text'}
      placeholder={isPassword ? '비밀번호' : '아이디'}
      value={input}
      onChange={onChange}
    />
  );
};
