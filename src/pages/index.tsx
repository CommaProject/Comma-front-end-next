import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { userInfomationAsync } from '../apis/auth';

const Home = () => {
  const router = useRouter();
  const userInfo = userInfomationAsync();

  // console.log(userInfo);

  // userInfo.then((response) => {
  //   const { isSuccess, result } = response;
  //   if (isSuccess) {
  //     const { code, msg, data } = result;
  //     console.log('Data1: ', data);
  //     if (data?.data.nickname == null) {
  //       router.push('/signup');
  //     }
  //   }
  // });

  // useEffect(() => {
  //   console.log(userInfo);

  //   userInfo.then((response) => {
  //     const { isSuccess, result } = response;
  //     if (isSuccess) {
  //       const { code, msg, data } = result;
  //       console.log('Data2: ', data);
  //       if (data?.data.nickname == null) {
  //         router.push('/signup');
  //       }
  //     }
  //   });
  // }, []);

  return (
    <main>
      <div>
        <p>Get started by editing</p>
      </div>
    </main>
  );
};

export default Home;
