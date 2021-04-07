import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const hello = React.createElement(
  'div',
  {
    className: 'wraper',
  },
  [
    React.createElement(
      'h1',
      null,
      'Tytul pierwszy',
    ),
    React.createElement(
      'p',
      null,
      'Tresc dokumentu',
    )
  ],
);

ReactDOM.render(
  hello,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
