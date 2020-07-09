import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Routes from './routes';

import { AuthProvider } from './hooks/Auth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer />
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
}

export default App;
