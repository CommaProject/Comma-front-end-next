/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      //Spotify Image URL 접근 허용
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/**',
      },
      //TODO: [need-check] home.tsx에서 playlistImageSources 테스트 데이터 관련 코드, 필요없을시 삭제
      {
        protocol: 'http',
        hostname: 'news.samsungdisplay.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.travie.com',
        pathname: '/**',
      },
    ],
  },
});
