import React from 'react';
import Routes from './Routes';
import Provider from './context/Provider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
