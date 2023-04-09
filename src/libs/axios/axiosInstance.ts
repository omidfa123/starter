import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = 'http://127.0.0.1:8082/api/v1';

const config: AxiosRequestConfig = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
