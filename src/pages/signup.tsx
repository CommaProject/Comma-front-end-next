import { ChangeEvent, useCallback, useState } from 'react';
import { useAtom } from 'jotai';
import { Swiper } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { signUpStateAtom } from '@/stores/atoms';
import useCheckSignupStep from '@/hooks/useCheckSignupStep';
import TopBar from '@/components/top-bar';
import NavBtn from '@/components/buttons/nav-btn';
import NameInputForm from '@/components/signup/name-input-form';
import GenderAgeInputForm from '@/components/signup/gender-age-input-form';
import TimePickerForm from '@/components/signup/time-picker-form';
import {
  SignUpContainer,
  SignUpWrapper,
  StyledSlide,
} from '@/components/signup/SignUpCommon.style';

const SignUp = () => {
  const [signUpState, setSignUpState] = useAtom(signUpStateAtom);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [slideStep, setSlideStep] = useState(0);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpState({ ...signUpState, name: e.target.value });
  };

  return (
    <SignUpContainer>
      <TopBar
        onClickNext={handleNext}
        onClickPrev={handlePrev}
        step={slideStep}
      />
      <SignUpWrapper>
        <Swiper
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
          style={{ height: '600px' }}
        >
          <StyledSlide>
            <NameInputForm
              onChange={handleNameInput}
              len={signUpState.name.length}
            />
          </StyledSlide>
          <StyledSlide>
            <GenderAgeInputForm name={signUpState.name} />
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
        </Swiper>
        <NavBtn
          isActivate={useCheckSignupStep(slideStep)}
          onClick={() => {
            setSignUpState({
              ...signUpState,
              percent: signUpState.percent + 20,
            });
            handleNext();
          }}
        />
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
