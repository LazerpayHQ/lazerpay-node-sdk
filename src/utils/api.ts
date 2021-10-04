import { API_URL } from './constants';
import axios, { AxiosInstance } from 'axios';

export const LazerApi: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setApiKey = async (apiKey: string) => {
  try {
    if (apiKey !== null) {
      LazerApi.defaults.headers?.common['x-api-key'] = apiKey;
    }
  } catch {
    throw new Error('Error setting API key');
  }
};
