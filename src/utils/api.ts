import { API_URL } from './constants';
import axios from 'axios';

export const LazerApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
