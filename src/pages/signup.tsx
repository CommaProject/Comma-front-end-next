import { ChangeEvent, useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import TopBar from '~/src/components/pages/signup/top-bar';
import NavBtn from '~/src/components/pages/signup/buttons/nav-btn';
import NameInputForm from '~/src/components/pages/signup/name-input-form';
import GenderAgeInputForm from '~/src/components/pages/signup/gender-age-input-form';
import TimePickerForm from '~/src/components/pages/signup/time-picker-form';
import {
  SignUpContainer,
  SignUpWrapper,
  StyledSlide,
  StyledSwiper,
} from '~/src/components/pages/signup/SignUpCommon.style';
import { AgeType, GenderType, TimeType } from '@/constants/types/authTypes';

/**
 * 회원가입시 필요한 데이터
 */
export interface SignUpStateType {
  /** 이름 */
  name: string;
  /** 성별 남/여/x */
  gender: GenderType;
  /** 연령 20대 미만/20대/30대/40대/50대 이상/x */
  age: AgeType;
  /** 아티스트 선택 리스트 */
  artist: string[];
  /** 장르 선택 리스트 */
  genre: string[];
  /** 오전/오후 - 시간- 분 */
  time: TimeType;
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
  const [topBarState, setTopBarState] = useState(0);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpState({ ...signUpState, name: e.target.value });
  };
  const handleSelect = (name: string, value: string) => {
    setSignUpState({ ...signUpState, [name]: value });
  };

  const useCheckSignupStep = () => {
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
    <SignUpContainer>
      <TopBar
        step={slideStep}
        topBarState={topBarState}
        onClickNext={handleNext}
        onClickPrev={handlePrev}
      />
      <SignUpWrapper>
        <StyledSwiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides
          noSwiping
          mousewheel={false}
          centerInsufficientSlides
          allowTouchMove={false}
          onSlideChange={(swiper) => {
            setSlideStep(swiper.realIndex);
          }}
        >
          <StyledSlide>
            <NameInputForm
              onChange={handleNameInput}
              len={signUpState.name.length}
            />
          </StyledSlide>
          <StyledSlide>
            <GenderAgeInputForm
              name={signUpState.name}
              gender={signUpState.gender}
              age={signUpState.age}
              onChageSelect={handleSelect}
            />
          </StyledSlide>
          <StyledSlide>
            <div>category</div>
          </StyledSlide>
          <StyledSlide>
            <TimePickerForm
              meridiem={signUpState.time.meridiem}
              setMeridiem={(text: string) =>
                setSignUpState({
                  ...signUpState,
                  time: { ...signUpState.time, meridiem: text },
                })
              }
              hour={signUpState.time.hour}
              setHour={(num: number) =>
                setSignUpState({
                  ...signUpState,
                  time: { ...signUpState.time, hour: num },
                })
              }
              min={signUpState.time.min}
              setMin={(num: number) =>
                setSignUpState({
                  ...signUpState,
                  time: { ...signUpState.time, min: num },
                })
              }
            />
          </StyledSlide>
          <StyledSlide>
            <div>success</div>
          </StyledSlide>
        </StyledSwiper>
        <NavBtn
          isActivate={useCheckSignupStep()}
          onClick={() => {
            setTopBarState(topBarState + 20);
            handleNext();
          }}
        />
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
