import { useAtom } from 'jotai';
import { signUpStateAtom } from '../stores/atoms';

/**
 * 회원가입시 step 별로 아래 nav 버튼 활성화 상태 반환하는 hook
 * @param step 회원가입 step
 * @returns nav버튼 활성화 상태 boolean 값으로 Return
 */
const useCheckSignupStep = (step: number) => {
  const [signUpState] = useAtom(signUpStateAtom);
  switch (step) {
    case 0: // 이름
      return signUpState.name.length >= 1 ? true : false;
    case 1: // 성별 연령
      return signUpState.gender !== 'x' && signUpState.age !== 'x'
        ? true
        : false;
    case 2: // 카테고리
      return true;
    case 3: // 시간
      return true;
    default:
      return false;
  }
};

export default useCheckSignupStep;
