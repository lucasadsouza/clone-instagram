import axios from 'axios';

const api = axios.create({
  baseURL: 'http://b71e077d18f2.ngrok.io',
});

export default api;
