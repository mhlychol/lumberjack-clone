// src/services/AxiosPiniaService.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/src/data', // JSON dosyasının bulunduğu dizin
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
