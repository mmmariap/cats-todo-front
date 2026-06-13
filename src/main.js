import './style.css';
import { state } from './state.js';
import { getPacks } from './api.js';

init();

function init() {
  console.log('App initialized');
  console.log(state);

  getPacks();
}


