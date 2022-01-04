import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});