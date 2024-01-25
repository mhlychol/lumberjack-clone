// services/axiosservice.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'src/data',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
