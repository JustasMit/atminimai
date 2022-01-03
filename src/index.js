import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Table from './Table';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';
import './index.css';

applyPolyfills().then(() => {
  defineCustomElements(window);
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <Table />
    </React.StrictMode>,
    document.getElementById('root')
  );
});