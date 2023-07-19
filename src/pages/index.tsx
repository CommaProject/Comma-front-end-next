import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { userInfomationAsync } from '../apis/auth';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const userInfo = userInfomationAsync();

    userInfo
      .then((response) => {
        const { isSuccess, result } = response;
        if (isSuccess) {
          const { code, msg, data } = result;
          console.log('Data:'); // 여기서 데이터에 접근할 수 있습니다.
          if (data?.data.nickname == null) {
            router.push('/signup');
          }
        }
      })
      .catch((error) => {
        console.error('오류:', error);
      });
  }, []);

  return (
    <main>
      <div>
        <p>Get started by editing</p>
      </div>
    </main>
  );
};

export default Home;
