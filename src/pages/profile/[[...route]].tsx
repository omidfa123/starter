import { dehydrate, QueryClient } from '@tanstack/react-query';
import ProfileTabs from 'components/custom/Tabs';
import { axiosInstance } from 'libs/axios/axiosInstance';
import { queryKeys } from 'libs/react-query/constants';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import { routes } from 'types';

interface IActiveTab {
  label: string;
  index: number;
  slug: string;
}

const getUserInfo = async (token: string, id: string) => {
  const { data } = await axiosInstance.get('/user/user', {
    headers: { Authorization: `Bearer ${token}` },
    params: { id },
  });
  return data;
};

const routes = {
  'change-information': {
    slug: 'change-information',
    index: 0,
    label: 'ویرایش اطلاعات',
  },
  orders: { slug: 'orders', index: 1, label: 'لیست سفارشات' },
  credit: { slug: 'credit', index: 2, label: 'خریدهای اقساطی' },
  address: { slug: 'address', index: 3, label: 'لیست آدرس ها' },
  comments: { slug: 'comments', index: 4, label: 'نظرات داده شده' },
  favorites: { slug: 'favorites', index: 5, label: 'علاقه مندی ها' },
  wallet: { slug: 'wallet', index: 6, label: 'تاریخچه کیف پول' },
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const queryClient = new QueryClient();

  let activeTab;
  if (ctx.params && Object.keys(ctx.params).length === 0) {
    activeTab = routes['change-information'];
  }
  if (ctx.params?.route && routes[ctx.params.route[0] as keyof routes]) {
    activeTab = routes[ctx.params.route[0] as keyof routes];
  }
  if (!activeTab) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  const { access_token, user_info } = nookies.get(ctx);
  if (!access_token && !user_info) {
    return {
      redirect: {
        destination: '/unauthorized',
        permanent: false,
      },
    };
  }

  await queryClient.prefetchQuery({
    queryKey: [queryKeys.userInfo],
    queryFn: () => getUserInfo(access_token, JSON.parse(user_info).id),
  });
  return {
    props: {
      activeTab,
      routes,
      user_info,
      access_token,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Routes = ({
  activeTab,
  routes,
  user_info,
  access_token,
}: {
  activeTab: IActiveTab;
  routes: routes;
  user_info: string;
  access_token: string;
}) => {
  return (
    <ProfileTabs
      activeTab={activeTab}
      routes={Object.entries(routes).map(e => e[1]) as unknown as IActiveTab[]}
      user={JSON.parse(user_info)}
      token={access_token}
    />
  );
};

export default Routes;
