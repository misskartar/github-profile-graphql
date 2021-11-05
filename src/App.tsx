import React, { ReactNode } from 'react';
import './App.css';
import ProfilePage from './pages/ProfilePage';

interface AppProps {
  children?: ReactNode
}

function App({ children }: AppProps) {
  return (
    <ProfilePage />
  );
}

export default App;
