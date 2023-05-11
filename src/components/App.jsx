import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalFonts from 'fonts/fonts';
import { GlobalStyle } from './GlobalStyle';
import { theme } from 'constants/theme';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/MainPage'));
const GamePage = lazy(() => import('pages/GamePage'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
