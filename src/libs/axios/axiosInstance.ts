import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = 'http://ms_03_nginx/api/v1';

const config: AxiosRequestConfig = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
