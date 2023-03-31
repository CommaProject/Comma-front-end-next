import { ChangeEvent } from 'react';
import * as style from './NameInputForm.style';

/**
 * 이름 입력 폼 인터페이스
 */
interface NameInputFormProps {
  /** 이름값 change event 함수 */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 이름 길이 */
  len: number;
}
export const NameInputForm = ({ onChange, len }: NameInputFormProps) => (
  <style.Wrapper>
    <style.Text>안녕하세요,</style.Text>
    <div>
      <style.Box>
        <style.Input maxLength={8} onChange={onChange} />
        <style.Text>님</style.Text>
      </style.Box>
      <style.Length>{`(${len}/8)`}</style.Length>
    </div>
  </style.Wrapper>
);
