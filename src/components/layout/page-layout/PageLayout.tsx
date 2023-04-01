import React from 'react';

import Navigation from '@/components/common/navigation';

import * as style from './PageLayout.style';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => (
  <style.Wrapper>
    <div className="content">{children}</div>
    <Navigation />
  </style.Wrapper>
);

export default PageLayout;
