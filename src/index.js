import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => (
 <div className="wraper">
   <h1 className="naglowek1">Pierwszy naglowek</h1>
   <p className="tekst">Przykladowt tekst</p>
 </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
