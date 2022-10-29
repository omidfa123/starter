import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = 'http://ms2.atramart.com/api/v1';

const config: AxiosRequestConfig = {
  baseURL: baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

export const axiosInstance = axios.create(config);
