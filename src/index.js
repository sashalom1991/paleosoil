import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from './i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './components/App';

import './index.css';

let indexView = document.getElementById('root');

const root = createRoot(indexView);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
