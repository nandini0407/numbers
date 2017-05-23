import React from 'react';
import ReactDOM from 'react-dom';
import NumberFacts from './number_facts';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<NumberFacts />, root);
});
