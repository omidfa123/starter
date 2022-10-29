import { axiosInstance } from 'libs/axios/axiosInstance';

async function getRegions() {
  const { data } = await axiosInstance.get('/country/regions');
  return data;
}

export function useRegions() {
  const data = getRegions();
  console.log(data);
}
