import { createStandaloneToast } from '@chakra-ui/react';
import { QueryClient } from '@tanstack/react-query';
import theme from 'theme';

const { toast } = createStandaloneToast({ theme });

export function queryErrorHandler(error: unknown): void {
  const id = 'react-query-error';
  const title =
    error instanceof Error
      ? error.toString().replace(/^AxiosError:\s*/, '')
      : 'خطای اتصال به شبکه';

  toast.closeAll();
  toast({ id, title, status: 'error' });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000, // 10 min
      cacheTime: 900000, // 15 min
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
