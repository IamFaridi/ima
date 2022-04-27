import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStore from './modules/store';
import Modal from './components/Modal';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const modalRoot =ReactDOM.createRoot(
  document.getElementById('modal-root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStore>
      <App />
    </GlobalStore>
   </React.StrictMode>
);

modalRoot.render(
    <GlobalStore>
      <Modal />
    </GlobalStore>
);