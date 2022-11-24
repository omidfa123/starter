import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = 'http://ms_02_nginx/api/v1';

const config: AxiosRequestConfig = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
