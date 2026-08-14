import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/App';
import '@app/styles/index.css';

const container = document.querySelector('#app');

if (!container) throw new Error("Root element 'app' not found");

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
