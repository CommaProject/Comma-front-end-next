import { useEffect } from 'react';
import { userInfomationAsync } from '../apis/auth';
import { setCookie } from '../utils/cookies';
import { Button } from '../components/template/login/LoginTemplate.style';

const Home = () => {
  useEffect(() => {
    console.log('userInfomationAsync', userInfomationAsync());
  }, []);
  return (
    <main>
      <div>
        <Button
          onClick={() => {
            userInfomationAsync();
          }}
        />
        <p>Get started by editing</p>
      </div>
    </main>
  );
};

export default Home;
