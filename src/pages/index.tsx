import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getRedirectionURLCookie, userInfomationAsync } from '../apis/auth';
import { Button } from '../components/template/login/LoginTemplate.style';

const Home = () => {
  const router = useRouter();
  const currentURL = `http://43.201.239.102:3000${router.asPath}`;
  const REDIRECTION_URL = `http://43.201.239.102:3000/`;
  console.log('currentURL', currentURL);
  if (currentURL === REDIRECTION_URL) {
    // Redirection URL에 도달한 경우 처리 로직 작성

    const CookieResponse = getRedirectionURLCookie();
    console.log('CookieResponse', CookieResponse);
  }

  useEffect(() => {
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
