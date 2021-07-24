import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './pages';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Application/>
      <ToastContainer/>
    </>
  );
}

export default App;
