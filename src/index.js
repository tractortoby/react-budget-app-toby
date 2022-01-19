import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BudgetsContext} from './contexts/BudgetsContext'

ReactDOM.render(
  <React.StrictMode>
    <BudgetsContext>
      <App />
    </BudgetsContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
