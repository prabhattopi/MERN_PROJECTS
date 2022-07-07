import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlbalProvider } from './context/GlobalState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlbalProvider>
    <App />
    </GlbalProvider>
  </React.StrictMode>
);

