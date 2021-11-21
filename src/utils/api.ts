import { API_URL } from './constants';
import axios from 'axios';

export const LazerApi: any = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setapiPubKey = async (apiPubKey: string) => {
  try {
    if (apiPubKey !== null) {
      LazerApi.defaults.headers.common['x-api-key'] = apiPubKey;
    }
  } catch {
    throw new Error('Error setting API key');
  }
};
