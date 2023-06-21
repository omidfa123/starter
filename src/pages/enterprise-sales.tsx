import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Highlight,
  Icon,
  Text,
} from '@chakra-ui/react';
import { DownloadIcon } from 'components/common/Icons';
import { Banner } from 'components/custom/Banner';
import NextLink from 'components/custom/NextLink';
import Banner_1 from '/public/images/banner_installment_1.png';
import Banner_2 from '/public/images/banner_installment_2.png';
import Banner_3 from '/public/images/banner_installment_3.png';

const banners = [Banner_3, Banner_2, Banner_1];
const bannersTwo = [
  Banner_3,
  Banner_2,
  Banner_1,
  Banner_3,
  Banner_2,
  Banner_1,
  Banner_3,
  Banner_2,
  Banner_1,
  Banner_3,
  Banner_2,
  Banner_1,
];

const steps = [
  {
    heading: 'جستجو و انتخاب کالا',
    detail:
      'شما در این مرحله میتوانید محصولات دلخواه خود را جستجو کنید تا بتواند به محصول مورد نظر خود برسید',
  },
  {
    heading: 'افزودن کالا به سبد خرید اقساطی',
    detail:
      'شما در این مرحله میتوانید محصولات دلخواه خود را جستجو کنید تا بتواند به محصول مورد نظر خود برسید',
  },
  {
    heading: 'تکمیل فرم درخواست',
    detail:
      'شما در این مرحله میتوانید محصولات دلخواه خود را جستجو کنید تا بتواند به محصول مورد نظر خود برسید',
  },
  {
    heading: 'دریافت کد رهگیری',
    detail:
      'شما در این مرحله میتوانید محصولات دلخواه خود را جستجو کنید تا بتواند به محصول مورد نظر خود برسید',
  },
  {
    heading: 'بررسی درخواست و اعلام نتیجه از طریق پیامک و پنل',
    detail:
      'شما در این مرحله میتوانید محصولات دلخواه خود را جستجو کنید تا بتواند به محصول مورد نظر خود برسید',
  },
];

export default function EnterpriseSales() {
  return (
    <Box as="main" mx="auto" maxW="1440px" px="44px">
      <Breadcrumb as="section" color="disableText" pt={4} mb={6} fontSize={13}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" as={NextLink}>
            فروشگاه آترامارت
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage color="#FF5E5E">
          <BreadcrumbLink href="#">فروش سازمانی</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex as="section" mb="143px">
        <Box mt={'50px'}>
          <Heading
            as="h1"
            w="max-content"
            mb={12}
            fontSize={36}
            pos={'relative'}
            _before={{
              content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='21' fill='none'%3E%3Cpath stroke='%23FFA826' d='m4.097 2.96 14.572 17.22M7.381.568l7.525 2.236M1.056 5.505l2.531 11.814'/%3E%3C/svg%3E")`,
              pos: 'absolute',
              bottom: '-12',
              right: '72px',
            }}
            _after={{
              content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='30' fill='none'%3E%3Cg clip-path='url(%23a)' filter='url(%23b)'%3E%3Cpath fill='%23FFA826' d='M14.57 20.271c-2.103-1.386-3.639-4.224-4.072-7.654-.433 3.43-1.97 6.268-4.072 7.654C6.02 20.546 5 20.96 5 20.96s1.02.418 1.43.687c2.103 1.386 3.639 4.23 4.072 7.654.433-3.424 1.97-6.268 4.072-7.654.41-.269 1.43-.687 1.43-.687s-1.024-.413-1.434-.688Z'/%3E%3C/g%3E%3Cg clip-path='url(%23c)' filter='url(%23d)'%3E%3Cpath fill='%23FFA826' d='M6.96 12.116C5.43 11.126 4.314 9.098 4 6.648c-.316 2.45-1.433 4.478-2.962 5.468-.295.196-1.037.49-1.037.49s.742.3 1.04.492c1.53.99 2.646 3.021 2.961 5.467.316-2.446 1.433-4.477 2.962-5.468.298-.192 1.04-.49 1.04-.49s-.745-.295-1.043-.491Z'/%3E%3C/g%3E%3Cg clip-path='url(%23e)' filter='url(%23f)'%3E%3Cpath fill='%23FFA826' d='M10.22 4.522C9.073 3.83 8.235 2.41 8 .695 7.763 2.41 6.925 3.83 5.778 4.522 5.556 4.66 5 4.866 5 4.866s.556.21.78.344C6.927 5.903 7.765 7.325 8 9.037c.236-1.712 1.074-3.134 2.221-3.827.224-.135.78-.344.78-.344s-.558-.206-.782-.344Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M5 12.617h11v16.69H5z'/%3E%3C/clipPath%3E%3CclipPath id='c'%3E%3Cpath fill='%23fff' d='M0 6.648h8V18.57H0z'/%3E%3C/clipPath%3E%3CclipPath id='e'%3E%3Cpath fill='%23fff' d='M5 .695h6V9.04H5z'/%3E%3C/clipPath%3E%3Cfilter id='b' width='27.004' height='32.684' x='-3' y='4.617' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 0.658824 0 0 0 0 0.14902 0 0 0 0.4 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_2110_614'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_2110_614' result='shape'/%3E%3C/filter%3E%3Cfilter id='d' width='24.003' height='27.918' x='-8' y='-1.352' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 0.658824 0 0 0 0 0.14902 0 0 0 0.4 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_2110_614'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_2110_614' result='shape'/%3E%3C/filter%3E%3Cfilter id='f' width='22.002' height='24.34' x='-3' y='-7.305' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 0.658824 0 0 0 0 0.14902 0 0 0 0.4 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_2110_614'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_2110_614' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")`,
              pos: 'absolute',
              top: '-100%',
              right: '48%',
            }}
          >
            <Highlight
              query={'سازمانت رو'}
              styles={{
                color: 'primary.500',
                pos: 'relative',
                ml: '3',
                mr: '1',
                '&::before': {
                  content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='197' height='100' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23FFA826' d='M122.559.015c-4.36.06-8.668.297-12.977.668-2.104-.193-4.258-.237-6.387-.208-3.067.06-6.134.312-9.15.64-3.017.34-6.033.757-8.998 1.232-5.956.98-11.811 2.11-17.514 3.506-5.55 1.351-11 2.926-16.07 4.813a102.24 102.24 0 0 0-7.324 3.045c-2.408 1.114-4.69 2.317-6.895 3.55-1.09.609-2.154 1.233-3.218 1.872-3.371 1.41-6.692 2.852-9.86 4.426a93.698 93.698 0 0 0-5.221 2.852c-1.673.98-3.27 1.99-4.816 3.045a50.185 50.185 0 0 0-4.41 3.402 32.165 32.165 0 0 0-3.574 3.669c-1.064 1.292.38 2.473-.532 3.795-.913 1.337-1.578 3.174.71 5.251.4.363 2.582 1.465 3.114 1.644.33.118.042-1.629.397-1.688.33-.06-.015-.345.111-.538.811-1.054-5.143-1.958-4.332-2.998a121.53 121.53 0 0 1 2.661-3.268 40.243 40.243 0 0 1 2.915-3.134 39.416 39.416 0 0 1 3.32-2.807c1.673-1.263 3.498-2.436 5.373-3.595a52.402 52.402 0 0 0-4.917 4.887c-2.762 3.15-4.79 6.521-5.93 10.012a20.365 20.365 0 0 0-.938 5.333c-.076 1.797.152 3.58.557 5.347.837 3.565 2.636 7.041 5.019 10.354 2.382 3.283 5.297 6.432 8.541 9.447 3.245 3 6.844 5.853 10.9 8.497 7.983 5.214 18.02 9.24 28.944 12.032 11.304 2.882 23.521 4.427 35.789 4.857 6.209.223 12.444.104 18.603-.297 6.185-.4 12.319-1.084 18.3-2.109a146.668 146.668 0 0 0 16.906-3.936 112.187 112.187 0 0 0 14.878-5.6c9.378-4.323 16.855-9.983 21.848-16.326 5.171-6.595 7.553-13.844 8.06-21.063.254-3.684-.05-7.383-.836-11.037-.786-3.64-2.154-7.22-4.081-10.695-.938-1.708-2.027-3.387-3.193-5.036-1.166-1.678-2.459-3.327-3.98-4.917-2.914-3.06-6.742-5.793-11.05-8.214-2.206-1.233-4.588-2.362-7.047-3.417-2.433-1.04-5.018-1.946-7.679-2.763-5.475-1.663-11.381-2.837-17.413-3.55C135.866.282 130.34 0 124.815 0c-.761 0-1.521 0-2.256.015Zm-18.984 1.159c.355 0 .709-.015 1.039-.015-.355.044-.684.074-1.039.118C91.333 2.644 79.547 5.17 68.091 8.021a281.378 281.378 0 0 0-16.653 4.68 230.406 230.406 0 0 0-7.908 2.659c-.659.237-1.318.475-1.977.727a89.794 89.794 0 0 1 4.613-2.258 106.537 106.537 0 0 1 10.67-4.13c3.701-1.202 7.503-2.272 11.407-3.237-.026 0-.026 0-.051.015.05-.015.076-.015.127-.03h.025-.025c2.331-.58 4.714-1.114 7.096-1.604 2.459-.506 4.968-.951 7.477-1.382 4.943-.847 9.961-1.574 15.056-1.99h-.05c1.9-.164 3.776-.268 5.677-.298ZM135.485 3c2.89.237 5.729.579 8.542 1.01 2.813.445 5.576.995 8.288 1.649 4.664 1.173 9.074 2.688 13.129 4.5 4.233 1.946 8.086 4.16 11.406 6.64a40.134 40.134 0 0 1 4.537 4.07c1.419 1.486 2.636 3.03 3.751 4.59 1.698 2.377 3.194 4.799 4.41 7.264a37.752 37.752 0 0 1 2.864 8.051c1.242 5.615 1.293 11.334.026 16.95-1.039 4.367-2.915 8.645-5.805 12.73.051-.06.077-.12.127-.164-2.509 3.49-5.753 6.774-9.707 9.79a68.943 68.943 0 0 1-6.007 3.98c-2.18 1.278-4.537 2.466-6.996 3.58.076-.03.127-.06.203-.089a111.26 111.26 0 0 1-9.454 3.728c-3.32 1.144-6.767 2.125-10.29 3.016.076-.015.152-.045.228-.06a152.73 152.73 0 0 1-12.242 2.481c-4.335.698-8.745 1.189-13.18 1.545-4.765.371-9.53.564-14.321.58-4.917.014-9.834-.179-14.7-.55h.05c-9.048-.713-17.945-2.065-26.36-4.13-6.64-1.663-12.951-3.758-18.68-6.328h-.025c-.076-.03-.127-.06-.203-.089.051.015.076.045.127.06-2.915-1.337-5.677-2.763-8.263-4.308-2.585-1.53-4.967-3.209-7.223-4.917-2.864-2.198-5.475-4.53-7.883-6.907-2.382-2.377-4.537-4.828-6.387-7.353.025.03.05.044.05.074-2.382-3.313-4.13-6.774-4.992-10.339 0 .03 0 .045.025.075 0-.03-.025-.075-.025-.105v-.044.03a19.66 19.66 0 0 1-.457-4.204c0-1.411.178-2.822.482-4.234 0 .015 0 .045-.025.06 0-.03.025-.075.025-.104v-.03.03c.71-2.912 2.078-5.749 4.005-8.467 0 .015-.026.03-.026.044.025-.044.05-.074.076-.119v-.014c2.839-3.892 6.692-7.487 11.076-10.83l1.065-.801a86.99 86.99 0 0 1 3.219-1.53c2.915-1.322 5.93-2.57 8.947-3.803a190.066 190.066 0 0 1 9.809-3.67c6.793-2.302 13.89-4.322 21.138-6.12-.177.045-.33.09-.507.12 6.742-1.664 13.586-3.209 20.556-4.472a222.08 222.08 0 0 1 21.113-2.762c2.18-.164 4.36-.298 6.539-.387.482.104.964.208 1.42.312-.051-.015-.102-.03-.152-.03.101.03.202.045.278.075.279.089.659.044.812-.119.101-.104.101-.223.025-.312 5.221-.134 10.417-.03 15.562.357Zm-.532-.045c.102.015.203.015.33.03-.127 0-.228-.015-.33-.03Zm-23.445.134c-.051 0-.127.015-.177.015.05-.015.101-.015.177-.015Zm53.987 7.115c.101.045.177.09.279.134-.076-.06-.178-.09-.279-.134ZM25.788 26.07c-.025.014-.025.03-.05.044 0-.03.025-.03.05-.044Zm-11.254 6.699c-.025.03-.05.044-.1.074.025-.03.075-.044.1-.074Zm-4.03 21.257v.03c0-.016 0-.045-.025-.06.026.015.026.03.026.03Zm.026-8.497v.06-.06c0-.015 0-.015 0 0ZM68.319 6.432c-.026 0-.051.015-.076.015.025 0 .05 0 .076-.015Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M.594 0h196v100h-196z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
                  pos: 'absolute',
                  top: '-20px',
                  right: '-8px',
                },
              }}
            >
              لوازم سازمانت رو از ما خریداری کن !
            </Highlight>
          </Heading>
          <Text color="#7D7D7D" mb={'6'} w={'80%'}>
            فروشگاه آترامارت این امکان را به سازمان ها و شرکت ها داده است تا
            بتوانند لوازم های مورد نیاز خود را مانند کامپیوتر و لوازم الکترونیکی
            از ای ن قبیل را به صورت سازمانی از فروشگاه آترامارت خریداری کنند !
          </Text>
          <Flex gap={4}>
            <Button
              w={'136px'}
              variant="solid"
              rounded="12"
              fontWeight="medium"
              colorScheme="primary"
              color="text"
            >
              خرید سازمانی
            </Button>
            <Button
              variant="outline"
              rounded="12"
              fontWeight="medium"
              w={'136px'}
              color="primary.500"
            >
              شرایط خرید
            </Button>
          </Flex>
        </Box>

        <video
          width={768}
          controls
          src="https://res.cloudinary.com/rixso/video/upload/v1661859817/rixsoShop/landingSlider/game_pzascn.mp4"
          poster="/images/poster_2.png"
          style={{
            borderRadius: '40px',
            boxShadow: '-23px 28px 0 -4px #FFA826',
          }}
        />
      </Flex>
      <Box as="section" mb={48}>
        <Heading
          mb={'106px'}
          fontSize={32}
          display="flex"
          gap="1"
          alignItems="baseline"
          justifyContent="center"
          _before={{
            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='17' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%239773FF' d='M11.31 7.983c-2.485-1.33-4.3-4.05-4.812-7.338-.512 3.288-2.328 6.009-4.813 7.338-.48.263-1.685.659-1.685.659s1.206.4 1.69.658c2.485 1.33 4.3 4.056 4.812 7.339.512-3.283 2.328-6.01 4.813-7.339.484-.257 1.69-.658 1.69-.658s-1.21-.396-1.695-.66Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 .645h13v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
          }}
          _after={{
            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='17' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%239773FF' d='M11.31 7.983c-2.485-1.33-4.3-4.05-4.812-7.338-.512 3.288-2.328 6.009-4.813 7.338-.48.263-1.685.659-1.685.659s1.206.4 1.69.658c2.485 1.33 4.3 4.056 4.812 7.339.512-3.283 2.328-6.01 4.813-7.339.484-.257 1.69-.658 1.69-.658s-1.21-.396-1.695-.66Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 .645h13v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
          }}
        >
          <Highlight
            query={'سازمانی'}
            styles={{
              color: 'secondary.500',
            }}
          >
            مراحل خرید سازمانی
          </Highlight>
        </Heading>
        <Grid
          gridTemplateColumns="1fr 1fr"
          pos="relative"
          gridRowGap="24"
          sx={{
            '& > div:nth-of-type(even)': {
              color: 'secondary.500',
              gridColumn: 2,
              justifyContent: 'end',
            },
            '& > div:nth-of-type(odd)': { color: 'primary.500' },
          }}
        >
          <Icon
            width="717"
            height="241"
            viewBox="0 0 717 241"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            pos="absolute"
            inset="-10% 14% 0 0"
          >
            <path
              d="M715.771 69.6635C715.771 69.6635 505.511 -12.2532 350.774 3.21829C192.42 19.0513 1.25 239.878 1.25 239.878"
              stroke="#15121D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="10 10"
            />
          </Icon>
          <Icon
            width="692"
            height="175"
            viewBox="0 0 692 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            pos="absolute"
            inset="20% 10% 0 0"
          >
            <path
              d="M1.77252 70.2377C1.77252 70.2377 212.033 -11.6789 366.77 3.79251C525.123 19.6256 690.873 173.482 690.873 173.482"
              stroke="#15121D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="10 10"
            />
          </Icon>
          <Icon
            width="713"
            height="181"
            viewBox="0 0 713 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            pos="absolute"
            inset="56% 8% 0 0"
          >
            <path
              d="M1.06067 132.435C1.06067 132.435 250.803 192.276 405.54 176.804C563.894 160.971 711.5 1.11935 711.5 1.11935"
              stroke="#15121D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="10 10"
            />
          </Icon>
          <Icon
            width="738"
            height="307"
            viewBox="0 0 738 307"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            pos="absolute"
            bottom="-14%"
            right="8%"
          >
            <path
              d="M736.474 206.173C736.474 206.173 411.665 341.906 262.931 296.507C110.721 250.047 1.35919 1.1993 1.35919 1.1993"
              stroke="#15121D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="10 10"
            />
          </Icon>

          {steps.map((step, index) => (
            <Flex
              gap={5}
              key={index}
              gridRow={index === 0 ? undefined : index + 1}
            >
              <Box
                fontSize="128px"
                fontWeight="bold"
                pos="relative"
                lineHeight="90px"
              >
                <Box
                  as="span"
                  position="absolute"
                  top="1"
                  left="1.5"
                  zIndex={-1}
                >
                  {index + 1}
                </Box>
                <Box
                  as="span"
                  color="transparent"
                  sx={{ WebkitTextStroke: '2px black' }}
                  textShadow="none"
                >
                  {index + 1}
                </Box>
              </Box>
              <Box>
                <Flex
                  fontSize={20}
                  gap={2}
                  alignItems="center"
                  fontWeight="medium"
                  mb={2}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="17"
                    fill="none"
                  >
                    <g clipPath="url(#a)" filter="url(#b)">
                      <path
                        fill="currentColor"
                        d="M11.408 8.237c-2.485-1.33-4.3-4.05-4.813-7.339-.512 3.289-2.327 6.01-4.812 7.339-.48.263-1.685.659-1.685.659s1.205.4 1.69.658c2.485 1.33 4.3 4.056 4.812 7.339.512-3.283 2.327-6.01 4.813-7.339.484-.257 1.69-.658 1.69-.658s-1.21-.396-1.695-.66Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M.098.898h13v16h-13z" />
                      </clipPath>
                      <filter
                        id="b"
                        width="21.005"
                        height="23.994"
                        x="-3.902"
                        y="-3.102"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0.592157 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 0.4 0" />
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2001_710"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2001_710"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  {step.heading}
                </Flex>
                <Text color="#7D7D7D" width="40ch">
                  {step.detail}
                </Text>
              </Box>
            </Flex>
          ))}
          <Box
            minW="100"
            h="100"
            top="0"
            left={'50%'}
            pos="absolute"
            bgColor="transparent"
          ></Box>
        </Grid>
      </Box>
      <Box as="section" mb={20}>
        <Box
          display="grid"
          gridAutoColumns={'auto'}
          gridTemplateColumns={'repeat(auto-fit,minmax(320px,1fr))'}
          placeItems="center"
        >
          {banners.map((banner, index) => (
            <Banner key={index} {...banner} />
          ))}
        </Box>
      </Box>
      <Box
        as="section"
        mb={20}
        bgColor="#FFD18D"
        rounded="40"
        border="4px solid #15121D"
        px="28"
        pos="relative"
        _after={{
          content: '""',
          w: { base: '86%', lg: '100%' },
          bgColor: '#15121D',
          borderRadius: '40',
          pos: 'absolute',
          h: { base: '104%', lg: '105%' },
          top: { base: '-2%', lg: '-3' },
          left: { base: '50%', lg: '0' },
          transform: {
            base: 'translate(-50% , 0)',
            lg: 'rotate(-1.5deg)  ',
          },
          zIndex: '-1',
          display: ['none', 'block'],
        }}
      >
        <Center
          as="p"
          gap={1.5}
          bgColor="primary.500"
          color="white"
          w="max-content"
          mx="auto"
          textStyle={'bold24'}
          py="2.5"
          px="6"
          mb="12"
          roundedBottom={32}
          _after={{
            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='17' fill='none'%3E%3Cg clip-path='url(%23a)' filter='url(%23b)'%3E%3Cpath fill='%23fff' d='M11.81 8.28C9.325 6.95 7.51 4.23 6.998.94 6.486 4.23 4.67 6.951 2.185 8.28 1.705 8.543.5 8.939.5 8.939s1.206.4 1.69.658c2.485 1.33 4.3 4.056 4.812 7.339.512-3.283 2.328-6.01 4.813-7.339.484-.257 1.69-.658 1.69-.658s-1.21-.396-1.695-.66Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M.5.941h13v16H.5z'/%3E%3C/clipPath%3E%3Cfilter id='b' width='21.005' height='23.996' x='-3.5' y='-3.059' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_1534_7196'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_1534_7196' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")`,
          }}
          _before={{
            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='17' fill='none'%3E%3Cg clip-path='url(%23a)' filter='url(%23b)'%3E%3Cpath fill='%23fff' d='M11.81 8.28C9.325 6.95 7.51 4.23 6.998.94 6.486 4.23 4.67 6.951 2.185 8.28 1.705 8.543.5 8.939.5 8.939s1.206.4 1.69.658c2.485 1.33 4.3 4.056 4.812 7.339.512-3.283 2.328-6.01 4.813-7.339.484-.257 1.69-.658 1.69-.658s-1.21-.396-1.695-.66Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M.5.941h13v16H.5z'/%3E%3C/clipPath%3E%3Cfilter id='b' width='21.005' height='23.996' x='-3.5' y='-3.059' color-interpolation-filters='sRGB' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_1534_7196'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_1534_7196' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")`,
          }}
        >
          شرایط استفاده از خرید سازمانی
        </Center>
        <Text
          fontWeight="medium"
          sx={{ '& span': { display: 'block', mb: '4' } }}
          mb="12"
        >
          فروشگاه اینترنتی آترامارت نزدیک به یک دهه در زمینه فروش انواع محصولات
          اعم از کامپیوتر ، موبایل ، لپ تاپ و لوازم خانگی به صورت نقد و اقساط
          فعالیت دارد.این فروشگاه به منظور گسترش فعالیت های خود اقدام به تاسیس
          واحد تخصصی فروش سازمانی اعم از دولتی و خصوصی نموده است.
          <br /> برای خرید سازمانی ابتدا باید کالای مورد نظر خود را از میان دسته
          بندی های پایین صفحه انتخاب و آن را به «سبد خرید» خود اضافه کنید و در
          بعد رو دکمه «صدورپیش فاکتور» کلیک کنید تا پیش فاکتور برای شما صادر
          شود.این پیش فاکتور توسط کارشناسان فروش سازمانی آترامارت بررسی و تایید
          می شود. پس از این مرحله می توانید کالای خود را به همراه فاکتور رسمی
          تحویل بگیرید.
        </Text>
        <Center gap="4" mb="12">
          <Button
            leftIcon={<DownloadIcon boxSize={5} />}
            variant="solid"
            colorScheme="primary"
            rounded="16"
            fontWeight="medium"
            fontSize="14"
            shadow="0px 0px 8px rgba(151, 115, 255, 0.4)"
          >
            مشاهده کامل راهنما ، شرایط و مراحل خرید اقساطی با چک
          </Button>
          <Button
            leftIcon={<DownloadIcon boxSize={5} />}
            variant="solid"
            bgColor="white"
            _hover={{ bgColor: 'rgba(255, 255, 255, 0.9)' }}
            _active={{ bgColor: 'rgba(255, 255, 255, 0.9)' }}
            color="primary.500"
            rounded="16"
            fontWeight="medium"
            fontSize="14"
            shadow=" 0px 0px 8px rgba(255, 255, 255, 0.4)"
          >
            مشاهده کامل راهنما ، شرایط و مراحل خرید اقساطی با سفته
          </Button>
        </Center>
      </Box>
      <Box as="section" mb={20}>
        <Box
          display="grid"
          gridAutoColumns={'auto'}
          gridTemplateColumns={'repeat(auto-fit,minmax(342px,1fr))'}
          placeItems="center"
          rowGap={8}
          columnGap={5}
        >
          {bannersTwo.map((banner, index) => (
            <Banner key={index} {...banner} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
