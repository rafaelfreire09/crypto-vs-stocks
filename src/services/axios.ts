import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.ALPHA_ADVANTAGE_BASE_URL,
});
