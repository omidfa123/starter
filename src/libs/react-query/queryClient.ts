import { createStandaloneToast } from '@chakra-ui/react';
import { QueryClient } from 'react-query';
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
    },
  },
});
