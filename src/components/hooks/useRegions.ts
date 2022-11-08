import { useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from 'libs/axios/axiosInstance';
import { queryKeys } from 'libs/react-query/constants';
import { IRegions } from 'types';

async function getRegions(): Promise<IRegions> {
  const { data } = await axiosInstance.get('/country/regions');
  return data;
}

export function useRegions(defaultText: string) {
  const { data } = useQuery({
    queryKey: [queryKeys.regions],
    queryFn: getRegions,
  });

  const states = data?.regions?.map(e => ({ value: e.id, label: e.name }));

  if (defaultText && data) {
    const defaultOpt = data?.regions
      ?.find(region => region.name === defaultText)
      ?.cities?.map(e => ({ value: e.id, label: e.name }));
    return [states, defaultOpt];
  }

  if (data) return [states, []];
  return [];
}
// export function usePrefetchRegions(): void {
//   const queryClient = useQueryClient();
//   queryClient.prefetchQuery(queryKeys.regions, getRegions);
// }
