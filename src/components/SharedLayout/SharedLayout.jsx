import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  LayoutStyled,
  ContentContainer,
  FooterContainer,
} from './SharedLayout.styled';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <LayoutStyled>
      <ContentContainer>
        <Header />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </ContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutStyled>
  );
};

export default SharedLayout;
