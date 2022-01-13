import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';

import GlobalStyle from './global/styles';

import { UserStorage } from './contexts/UserContext';
import { LoadStorage } from './contexts/LoadContext';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <LoadStorage>
            <UserStorage>
              <Header />
              <main className="AppBody">
                <MainRoutes />
              </main>
              <Footer />
            </UserStorage>
          </LoadStorage>
        </BrowserRouter>
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
