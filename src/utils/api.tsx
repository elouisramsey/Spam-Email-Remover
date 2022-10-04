import axios from 'axios';

const defaults = {
  timeout: 30000,
  validateStatus: (status: number) =>
    [200, 400, 401, 404, 500].includes(status),
  headers: {
    'Content-Type': 'application/json',
  },
};

const api = axios.create({
  baseURL: 'http://localhost:7000/api/v1',
});

export default api;
