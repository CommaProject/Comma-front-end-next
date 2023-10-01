import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import SwiperCore from 'swiper';

import { SignUpStateType } from '@/constants/types';
import GenderAgeInputForm from '@/components/pages/signup/gender-age-input-form';
import NameInputForm from '@/components/pages/signup/name-input-form';
import NavBtn from '@/components/pages/signup/nav-btn';
import TimePickerForm from '@/components/pages/signup/time-picker-form';
import TopBar from '@/components/pages/signup/top-bar';
import CategoryForm from '@/components/pages/signup/category-form';
import SuccessBox from '@/components/pages/signup/success-box';
import * as style from './SignUpTemplate.style';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface SignUpTemplateProps {
  slideStep: number;
  signUpState: SignUpStateType;
  categoryTypeState: string;
  artists: string[];
  genres: string[];
  rightRef: MutableRefObject<any>;
  onClickNext: () => void;
  onClickPrev: () => void;
  setSwiperRef: Dispatch<SetStateAction<SwiperClass | undefined>>;
  onSlideChange: (swiper: any) => void;
  onChageNameInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (name: string, value: string | number) => void;
  checkSignupStep: () => boolean;
  onClickNavBtn: () => void;
  onChangeMeridiem: (text: string) => void;
  onChangeHour: (swiper: SwiperCore) => void;
  onChangeMin: (swiper: SwiperCore) => void;
  onClickCategory: (category: string) => void;
  onClickGenre: (genre: string) => void;
  onClickArtist: (artist: string) => void;
}
const SignUpTemplate = ({
  slideStep,
  signUpState,
  categoryTypeState,
  artists,
  genres,
  rightRef,
  onClickNext,
  onClickPrev,
  setSwiperRef,
  onSlideChange,
  onChageNameInput,
  onChangeSelect,
  checkSignupStep,
  onClickNavBtn,
  onChangeMeridiem,
  onChangeHour,
  onChangeMin,
  onClickCategory,
  onClickGenre,
  onClickArtist,
}: SignUpTemplateProps) => (
  <style.Wrapper>
    <TopBar
      step={slideStep}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      isActivate={checkSignupStep()}
    />
    <style.Box>
      <style.CustomSwiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides
        noSwiping
        mousewheel={false}
        centerInsufficientSlides
        allowTouchMove={false}
        onSlideChange={onSlideChange}
      >
        <style.Slide>
          <NameInputForm
            onChange={onChageNameInput}
            len={signUpState.nickName.length}
          />
        </style.Slide>
        <style.Slide>
          <GenderAgeInputForm
            name={signUpState.nickName}
            gender={signUpState.sex}
            age={signUpState.age}
            onChageSelect={onChangeSelect}
          />
        </style.Slide>
        <style.Slide>
          <CategoryForm
            categoryTypeState={categoryTypeState}
            artists={artists}
            genres={genres}
            selectedArtists={signUpState.artistNames}
            selectedGenres={signUpState.genres}
            rightRef={rightRef}
            onClickCategory={onClickCategory}
            onClickGenre={onClickGenre}
            onClickArtist={onClickArtist}
          />
        </style.Slide>
        <style.Slide>
          <TimePickerForm
            meridiem={signUpState.recommendTime.meridiem}
            onChangeMeridiem={onChangeMeridiem}
            hour={signUpState.recommendTime.hour}
            onChangeHour={onChangeHour}
            min={signUpState.recommendTime.min}
            onChangeMin={onChangeMin}
          />
        </style.Slide>
        <style.Slide>
          <SuccessBox />
        </style.Slide>
      </style.CustomSwiper>
      {slideStep === 4 ? null : (
        <NavBtn isActivate={checkSignupStep()} onClick={onClickNavBtn} />
      )}
    </style.Box>
  </style.Wrapper>
);

export default SignUpTemplate;
