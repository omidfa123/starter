import { queryKeys } from './../../libs/react-query/constants';

import { axiosInstance } from './../../libs/axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

const getUserInfo = async (token: string, id: string) => {
  const { data } = await axiosInstance.get('/user/user', {
    headers: { Authorization: `Bearer ${token}` },
    params: { id },
  });
  return data;
};

export const useUser = (token: string, id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.userInfo],
    queryFn: () => getUserInfo(token, id),
  });
  return { data, isLoading };
};
