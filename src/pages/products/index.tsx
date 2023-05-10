import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
  Menu,
  Text,
  useRadio,
  chakra,
  Input,
  Center,
  useRadioGroup,
  MenuButton,
  Button,
  Portal,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { AngleDownIcon } from 'components/common/Icons';
import ProductsAccordion from 'components/custom/Accordions/ProductsAccordion';
import NextLink from 'components/custom/NextLink';

import ProductsGrid from 'components/custom/Grids/ProductsGrid';
import { useState } from 'react';

const options = [
  { value: 'ویترین', label: 'ویترین' },
  { value: 'خانگی و اداری', label: 'خانگی و اداری' },
  { value: 'گیمینگ', label: 'گیمینگ' },
  { value: 'رندرینگ', label: 'رندرینگ' },
  { value: 'ماینینگ', label: 'ماینینگ' },
];

function CustomRadio(props: any) {
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(props);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <Input {...getInputProps({})} hidden />
      <Center
        {...getCheckboxProps()}
        bg={state.isChecked ? 'secondary.500' : 'transparent'}
        color={state.isChecked ? 'white' : '#bdbdbd'}
        fontWeight="500"
        rounded={16}
        p="13px 22.5px"
        userSelect="none"
      >
        <Box as="span" {...getLabelProps()}>
          {props.label}
        </Box>
      </Center>
    </chakra.label>
  );
}

export default function Products() {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'ویترین',
  });
  const [isLoading, setIsLoading] = useState(false);
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
            فروشگاه اینترنتی Atramart
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/profile/change-information" as={NextLink}>
            کیس های اسمبل شده
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage color="#FF5E5E">
          <BreadcrumbLink href="#">کیس های ویترین</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Grid
        gridTemplateColumns="repeat(3 , 1fr) 1.1fr"
        gridTemplateAreas={`
      "variants  variants  variants  sort"
      "filters   products products  products"
      `}
        rowGap="6"
      >
        <Center
          gridArea="variants"
          bgColor="white"
          p="9.5px  16px"
          rounded={24}
          justifyContent="start"
          gap={6}
          w="max-content"
        >
          <Text textStyle="medium16" color="black">
            کامپیوتر های اسمبل شده :
          </Text>
          <Flex {...getRootProps()}>
            {options.map(opt => {
              return (
                <Box key={opt.label}>
                  <CustomRadio
                    label={opt.label}
                    {...getRadioProps({ value: opt.value })}
                  />
                </Box>
              );
            })}
          </Flex>
        </Center>
        <Menu isLazy lazyBehavior="keepMounted" gutter={8} matchWidth>
          <MenuButton
            as={Button}
            rightIcon={<AngleDownIcon />}
            variant="none"
            color="black"
            fontWeight="500px"
            bgColor="white"
            rounded="24"
            w="100%"
            p="22px 16px"
            h="100%"
            textAlign="right"
          >
            مرتب سازی بر اساس:
          </MenuButton>
          <Portal>
            <MenuList
              rounded="24"
              border="none"
              fontWeight="500"
              p="34px 13.33px 28px  13.33px"
              sx={{
                '& button': {
                  p: '4.69px 10px',
                  rounded: '12px',
                  '&:hover': { bgColor: 'secondary.500', color: 'white' },
                },
              }}
              display="flex"
              flexDir="column"
              pos="relative"
              gap="6"
              _before={{
                content: "''",
                position: 'absolute',
                top: '0',
                right: '50%',
                transform: 'translate(50%, 0%)',
                bgColor: '#EEE',
                h: '15px',
                w: '67%',
                roundedBottom: '24',
              }}
              _after={{
                content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%2315121D' d='M1.172 8.213a.625.625 0 0 0 .442-.183L4.81 4.833a1.042 1.042 0 0 1 1.474 0l3.192 3.192a.625.625 0 0 0 .884-.883L7.17 3.949a2.294 2.294 0 0 0-3.241 0L.73 7.146a.625.625 0 0 0 .442 1.067Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M.545.746v10h10v-10z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
                textAlign: 'center',
                position: 'absolute',
                bottom: '0',
                right: '50%',
                transform: 'translate(50%, 0%)',
                bgColor: '#EEE',
                h: '15px',
                w: '19%',
                roundedTop: '24',
              }}
            >
              <MenuItem>ارزان ترین ها</MenuItem>
              <MenuItem>محبوب ترین ها</MenuItem>
              <MenuItem>پر بازدید ترین ها</MenuItem>
              <MenuItem>پر فروش ترین ها</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
        <ProductsAccordion setIsLoading={setIsLoading} />
        <ProductsGrid isLoading={isLoading} />
      </Grid>
    </Box>
  );
}
