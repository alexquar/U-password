import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { PassProvider } from './context/PassContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PassProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </PassProvider>
  </React.StrictMode>
);
