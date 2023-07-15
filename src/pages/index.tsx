import { useEffect } from 'react';
import { getRedirectionURLCookie, userInfomationAsync } from '../apis/auth';
import { setCookie } from '../utils/cookies';
import { Button } from '../components/template/login/LoginTemplate.style';
import { API_URL } from '../constants/apis';

const Home = () => {
  const currentURL = window.location.href;
  const REDIRECTION_URL = `http://43.201.239.102:3000/`;

  useEffect(() => {
    if (currentURL === REDIRECTION_URL) {
      // Redirection URL에 도달한 경우 처리 로직 작성

      const CookieResponse = getRedirectionURLCookie();
      console.log('CookieResponse', CookieResponse);
    }

    console.log('userInfomationAsync', userInfomationAsync());
  }, [currentURL, REDIRECTION_URL]);

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
