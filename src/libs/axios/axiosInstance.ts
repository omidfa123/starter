import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = 'https://ms2.atramart.com/api/v1';

const config: AxiosRequestConfig = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
