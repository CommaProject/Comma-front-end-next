import { ChangeEvent, useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import SwiperCore from 'swiper';
import SignUpTemplate from '@/components/template/signup';
import { SignUpStateType } from '@/constants/types';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}

const SignUp = () => {
  const [signUpState, setSignUpState] = useState<SignUpStateType>({
    name: '',
    gender: 'x',
    age: 'x',
    artist: [],
    genre: [],
    time: { meridiem: 'AM', hour: 1, min: 1 },
  });
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [slideStep, setSlideStep] = useState(0);
  const [topBarState, setTopBarState] = useState(20);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpState({ ...signUpState, name: e.target.value });
  };
  const handleSelect = (name: string, value: string) => {
    setSignUpState({ ...signUpState, [name]: value });
  };
  const handleNavBtn = () => {
    setTopBarState(topBarState + 20);
    handleNext();
  };
  const handleSwiper = (swiper: SwiperClass) => {
    setSlideStep(swiper.realIndex);
  };
  const handleMeridiem = (text: string) => {
    setSignUpState({
      ...signUpState,
      time: { ...signUpState.time, meridiem: text },
    });
  };
  const handleHour = (swiper: SwiperCore) => {
    setSignUpState({
      ...signUpState,
      time: { ...signUpState.time, hour: swiper.realIndex + 1 },
    });
  };
  const handleMin = (swiper: SwiperCore) => {
    setSignUpState({
      ...signUpState,
      time: { ...signUpState.time, min: swiper.realIndex },
    });
  };

  const checkSignupStep = () => {
    switch (slideStep) {
      case 0: // 이름
        return signUpState.name.length >= 1;
      case 1: // 성별 연령
        return signUpState.gender !== 'x' && signUpState.age !== 'x';
      case 2: // 카테고리
        return true;
      case 3: // 시간
        return true;
      default:
        return false;
    }
  };

  return (
    <SignUpTemplate
      slideStep={slideStep}
      topBarState={topBarState}
      signUpState={signUpState}
      onClickNext={handleNext}
      onClickPrev={handlePrev}
      setSwiperRef={setSwiperRef}
      onSlideChange={handleSwiper}
      onChageNameInput={handleInput}
      onChangeSelect={handleSelect}
      checkSignupStep={checkSignupStep}
      onClickNavBtn={handleNavBtn}
      onChangeMeridiem={handleMeridiem}
      onChangeHour={handleHour}
      onChangeMin={handleMin}
    />
  );
};

export default SignUp;
