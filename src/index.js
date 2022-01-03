import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/map/Map';
import Table from './components/table/Table';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';
import './css/index.css';

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