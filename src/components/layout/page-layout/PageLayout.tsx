import React from 'react';

import Navigation from '@/components/common/navigation';

import * as style from './PageLayout.style';

type PageLayoutProps = {
  children: React.ReactNode;
  isNavigationVisible: boolean;
};

const PageLayout = ({ children, isNavigationVisible }: PageLayoutProps) => (
  <style.Wrapper>
    <section className="content">{children}</section>
    {isNavigationVisible && <Navigation />}
  </style.Wrapper>
);

export default PageLayout;
