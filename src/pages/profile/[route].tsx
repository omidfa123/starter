import ProfileTabs from 'components/custom/Tabs';
import { GetServerSideProps } from 'next';

interface IActiveTab {
  label: string;
  index: number;
  slug: string;
}

const routes = [
  { slug: 'change-information', index: 0, label: 'ویرایش اطلاعات' },
  { slug: 'orders', index: 1, label: 'لیست سفارشات' },
  { slug: 'credit', index: 2, label: 'خریدهای اقساطی' },
  { slug: 'address', index: 3, label: 'لیست آدرس ها' },
  { slug: 'comments', index: 4, label: 'نظرات داده شده' },
  { slug: 'favorites', index: 5, label: 'علاقه مندی ها' },
  { slug: 'wallet', index: 6, label: 'تاریخچه کیف پول' },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const activeTab = routes.find(route => route.slug === params?.route);

  if (!activeTab) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  return {
    props: { activeTab, routes },
  };
};

const Routes = ({
  activeTab,
  routes,
}: {
  activeTab: IActiveTab;
  routes: IActiveTab[];
}) => {
  return <ProfileTabs activeTab={activeTab} routes={routes} />;
};


export default Routes;
