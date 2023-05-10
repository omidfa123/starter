import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
} from '@chakra-ui/react';

import SingleProductsDetails from 'components/custom/Grids/singleProducGrid/SingleProductsDetails';

import NextLink from 'components/custom/NextLink';
import SingleProductsBlogSlider from 'components/custom/Sliders/SingleProduct/SingleProductBlogSlider';
import SingleProductsSlider from 'components/custom/Sliders/SingleProduct/SingleProductSlide';
import SingleProductsSmilerSlider from 'components/custom/Sliders/SingleProduct/SingleProductsSmilerSlider';
import SingleProductTab from 'components/custom/Tabs/SingleProductTab';

export default function Product() {
  return (
    <Box as="main" layerStyle="container" mb="124px">
      <Breadcrumb
        as="section"
        color="disableText"
        pt={2.5}
        pb={6}
        fontSize={13}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" as={NextLink}>
            فروشگاه آترامارت
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/profile/change-information" as={NextLink}>
            کالای دیجیتال
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/profile/change-information" as={NextLink}>
            کامپیوتر و تجهیزات جانبی
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage color="#FF5E5E">
          <BreadcrumbLink href="#">مانیتور</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Grid
        bgColor="white"
        rounded={40}
        p={6}
        gridTemplateColumns="1fr  1.34fr"
        gridTemplateAreas={` 
      "slider details"
      "options options"
      "smiler  smiler "
      "tab tab"
      "blog blog"
      `}
      >
        <SingleProductsSlider />
        <SingleProductsDetails />
        <SingleProductsSmilerSlider />
        <SingleProductTab />
        <SingleProductsBlogSlider />
      </Grid>
    </Box>
  );
}
