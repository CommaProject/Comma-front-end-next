import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * API 호출 함수의 반환 타입 (비동기 결과 Promise)
 * @param T 호출에 성공할 경우 가져오는 데이터 타입
 */
export type APIResult<T> = Promise<
  | {
      isSuccess: true;
      result: T;
    }
  | {
      isSuccess: false;
      result: APIError;
    }
>;

/**
 * API 호출 함수에서 발생하는 에러 타입
 */
export interface APIError {
  statusCode: number;
  errMessage: string;
}
