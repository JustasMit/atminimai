import React from 'react';
import ReactDOM from 'react-dom';
import ObjectMap from './components/map/ObjectMap';
import ObjectTable from './components/table/ObjectTable';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';
import './css/index.css';

applyPolyfills().then(() => {
  defineCustomElements(window);
  ReactDOM.render(
    <React.StrictMode>
      <ObjectMap />
      <ObjectTable />
    </React.StrictMode>,
    document.getElementById('root')
  );
});