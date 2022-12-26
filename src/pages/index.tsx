import { Box, Grid } from '@chakra-ui/react';
import FeatUres from 'components/custom/Features';
import JoinNewsLatter from 'components/custom/JoinNewsLatter';
import BrandSlider from 'components/custom/Sliders/Home/BrandSlider';
import HomeBlogSlider from 'components/custom/Sliders/Home/HomeBlogSlider';
import TopSaleSlider from 'components/custom/Sliders/Home/TopSaleSlider';
import HomeSliderMain from 'components/custom/Sliders/Home/HomeSliderMain';
import type { NextPage } from 'next';
import Head from 'next/head';
import TopSaleTab from 'components/custom/Tabs/HomeTab/TopSaleTab';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>آرتامارت</title>
        <meta content="فروشگاه" name="description" />
        <meta name="robots" content="follow, index" />
      </Head>
      <Box as="main" flex="1" pt="8">
        <HomeSliderMain />
        <Grid gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}>
          <TopSaleTab />
        </Grid>
        <HomeBlogSlider />
        <FeatUres />
        <JoinNewsLatter />
        <BrandSlider />
      </Box>
    </>
  );
};

export default Home;
