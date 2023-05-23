/* eslint-disable no-param-reassign */

import { useTokenStore } from '@/hooks/useTokenStore';
import { isJwtExpired } from '@/lib/isJwtExpired';
import axios from 'axios';



const http = axios.create({
  baseURL:'http://localhost:3001',
  validateStatus: (status) => status < 500,
});

http.interceptors.request.use((config) => {
  const { token, logout } = useTokenStore.getState();
  if (token) {
    if (isJwtExpired(token)) {
      logout();
      throw new axios.Cancel('Sessão expirada');
    }
    config.headers.Authorization = `Bearer ${token}`;

  }
  return config;
});

export default http;
