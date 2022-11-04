import ProfileTabs from 'components/custom/Tabs';
import { GetServerSideProps } from 'next';
import nookies, { parseCookies } from 'nookies';

interface IActiveTab {
  label: string;
  index: number;
  slug: string;
}
type routes = {
  'change-information': {
    slug: string;
    index: number;
    label: string;
  };
  orders: {
    slug: string;
    index: number;
    label: string;
  };
  credit: {
    slug: string;
    index: number;
    label: string;
  };
  address: {
    slug: string;
    index: number;
    label: string;
  };
  comments: {
    slug: string;
    index: number;
    label: string;
  };
  favorites: {
    slug: string;
    index: number;
    label: string;
  };
  wallet: {
    slug: string;
    index: number;
    label: string;
  };
};

const routes = [
  { slug: 'change-information', index: 0, label: 'ویرایش اطلاعات' },
  { slug: 'orders', index: 1, label: 'لیست سفارشات' },
  { slug: 'credit', index: 2, label: 'خریدهای اقساطی' },
  { slug: 'address', index: 3, label: 'لیست آدرس ها' },
  { slug: 'comments', index: 4, label: 'نظرات داده شده' },
  { slug: 'favorites', index: 5, label: 'علاقه مندی ها' },
  { slug: 'wallet', index: 6, label: 'تاریخچه کیف پول' },
];

export const getServerSideProps: GetServerSideProps = async ctx => {
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
  console.log(Object.keys(routes));

  const { access_token, user_info } = nookies.get(ctx);
  if (!access_token || !user_info) {
    return {
      redirect: {
        destination: '/unauthorized',
        permanent: false,
      },
    };
  }
  return {
    props: {
      activeTab,
      routes,
      user_info,
      access_token,
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
  console.log(user_info);
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
