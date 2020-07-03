import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from '~/components/Footer';
import Header from '~/components/Header';

import GlobalStyle from '~/styles/global';
import { light } from '~/styles/theme';

import MainRote from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <MainRote />
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
