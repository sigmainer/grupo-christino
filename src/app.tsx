import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from '~/components/Footer';

import GlobalStyle from '~/styles/global';
import { light } from '~/styles/theme';

import Header from './components/Header';
import MainRote from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <Header />
      <MainRote />
      <Footer />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
