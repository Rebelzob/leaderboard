import './index.css';
import { getRequest, postRequest } from './modules/api.js';

const form = document.querySelector('.form');
const scores = document.querySelector('.table-body');
const refresh = document.querySelector('#refresh-btn');
const submit = document.getElementById('submit-btn');

window.addEventListener = ('DOMContentLoaded', () => {
  getRequest();
});

refresh.addEventListener('click', async () => {
  scores.innerHTML = '';
  await getRequest();
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const data = {
    user: name,
    score,
  };
  postRequest(data);
  form.reset();
});