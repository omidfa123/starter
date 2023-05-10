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

export default function Installment() {
  return (
    <Box as="main" mx="auto" maxW="1440px" px="44px">
      <Breadcrumb as="section" color="disableText" pt={4} mb={6} fontSize={13}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" as={NextLink}>
            فروشگاه آترامارت
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage color="#FF5E5E">
          <BreadcrumbLink href="#">خرید اقساطی</BreadcrumbLink>
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
              content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='21' fill='none'%3E%3Cpath stroke='%239773FF' d='m4.097 2.96 14.572 17.22M7.381.568l7.525 2.236M1.056 5.505l2.531 11.814'/%3E%3C/svg%3E")`,
              pos: 'absolute',
              bottom: '-9',
              right: '4',
            }}
            _after={{
              content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='59' height='40' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%239773FF' d='M11.382 39.858C7.216 38.575 3.483 36.405.416 33.379c-.64-.63-.521-1.56.213-2.063l8.725-5.955c1.415-.965 2.823 1.256 1.408 2.22l-4.677 3.192c16.876 1.86 35.87-2.24 45.605-16.886 2.423-3.646 4.033-7.677 4.666-11.971.245-1.665 2.87-1.077 2.627.572-1.192 8.06-5.801 15.364-12.116 20.655-7.082 5.936-15.98 9.167-25.213 10.26-5.558.657-11.168.51-16.716-.147-.67-.078-.984-.515-1.021-1.003-.158.108-.316.214-.471.322a23.583 23.583 0 0 0 8.527 4.74c1.641.507 1.059 3.052-.59 2.543Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 .926v39h59v-39z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
              pos: 'absolute',
              bottom: '-14',
              left: '-16',
            }}
          >
            <Highlight
              query={'خرید اقساطی'}
              styles={{
                color: 'secondary.500',
                pos: 'relative',
                ml: '3',
                mr: '1',
                '&::before': {
                  content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='96' fill='none'%3E%3Cpath fill='%239773FF' d='M137.878.42c-5.071.057-10.084.283-15.096.635-2.447-.183-4.953-.225-7.43-.197-3.567.056-7.135.296-10.644.607-3.508.324-7.017.72-10.466 1.17-6.93.932-13.74 2.005-20.374 3.331-6.457 1.284-12.796 2.78-18.693 4.573a134.935 134.935 0 0 0-8.52 2.892c-2.802 1.059-5.455 2.202-8.02 3.373a149.871 149.871 0 0 0-3.745 1.778c-3.921 1.34-7.784 2.71-11.469 4.205-2.093.861-4.128 1.779-6.074 2.71-1.946.931-3.803 1.89-5.602 2.893a58.564 58.564 0 0 0-5.13 3.231 34.575 34.575 0 0 0-4.157 3.486c-1.238 1.228.442 2.35-.62 3.605-1.06 1.27-1.835 3.015.827 4.989.465.345 3.003 1.392 3.622 1.561.384.113.05-1.547.462-1.603.383-.057-.018-.328.13-.51.943-1.003-5.984-1.861-5.04-2.849a123.909 123.909 0 0 1 3.095-3.104 42.66 42.66 0 0 1 3.391-2.978 44.847 44.847 0 0 1 3.863-2.667c1.945-1.2 4.068-2.314 6.25-3.415-2.093 1.496-4.01 3.048-5.72 4.643-3.213 2.991-5.572 6.194-6.899 9.51a16.187 16.187 0 0 0-1.09 5.067c-.09 1.707.176 3.4.648 5.08.973 3.387 3.066 6.69 5.838 9.836 2.771 3.119 6.162 6.11 9.936 8.975a95.086 95.086 0 0 0 12.678 8.072c9.287 4.953 20.963 8.777 33.67 11.43 13.15 2.738 27.362 4.206 41.632 4.615a263.22 263.22 0 0 0 21.641-.282c7.194-.381 14.33-1.03 21.288-2.004a203.589 203.589 0 0 0 19.666-3.74c6.132-1.496 11.911-3.288 17.307-5.32 10.909-4.106 19.607-9.483 25.415-15.509 6.015-6.265 8.786-13.152 9.376-20.01.295-3.5-.059-7.014-.973-10.485-.914-3.457-2.506-6.858-4.747-10.16-1.091-1.623-2.359-3.218-3.715-4.784a40.877 40.877 0 0 0-4.629-4.671c-3.39-2.907-7.843-5.504-12.855-7.804-2.565-1.171-5.336-2.244-8.196-3.246-2.831-.988-5.838-1.848-8.934-2.625-6.369-1.58-13.238-2.695-20.256-3.372-6.162-.678-12.589-.946-19.017-.946-.884 0-1.769 0-2.624.014Zm-22.084 1.101c.413 0 .826-.014 1.209-.014-.412.042-.796.07-1.209.113-14.24 1.298-27.95 3.697-41.277 6.407a386.067 386.067 0 0 0-19.371 4.445 311.552 311.552 0 0 0-9.2 2.526c-.766.226-1.532.451-2.299.691 1.74-.748 3.509-1.453 5.366-2.145a141.973 141.973 0 0 1 12.413-3.923 226.352 226.352 0 0 1 13.268-3.076c-.03 0-.03 0-.06.014.06-.014.09-.014.148-.028h.03-.03c2.713-.55 5.484-1.059 8.256-1.524 2.86-.48 5.779-.903 8.698-1.313 5.749-.804 11.587-1.496 17.513-1.89h-.059c2.211-.156 4.393-.255 6.604-.283Zm37.121 1.736c3.361.226 6.663.55 9.936.96 3.273.423 6.487.945 9.641 1.566 5.425 1.115 10.556 2.554 15.273 4.276 4.924 1.848 9.406 3.95 13.268 6.308a44.98 44.98 0 0 1 5.278 3.866c1.651 1.411 3.066 2.879 4.363 4.36 1.976 2.259 3.715 4.559 5.13 6.901a31.845 31.845 0 0 1 3.332 7.649c1.445 5.334 1.504 10.767.03 16.101-1.209 4.15-3.391 8.213-6.752 12.094.059-.056.088-.113.147-.155-2.919 3.316-6.693 6.435-11.292 9.3a83.496 83.496 0 0 1-6.988 3.781c-2.536 1.214-5.278 2.343-8.138 3.401.089-.028.148-.056.236-.084a147.767 147.767 0 0 1-10.997 3.542c-3.863 1.086-7.872 2.018-11.971 2.864.089-.014.177-.042.266-.056a213.122 213.122 0 0 1-14.241 2.357c-5.042.663-10.172 1.129-15.332 1.467-5.543.353-11.086.536-16.658.55-5.72.015-11.44-.169-17.101-.522h.059c-10.526-.677-20.875-1.961-30.664-3.923-7.724-1.58-15.066-3.57-21.73-6.011h-.029c-.088-.029-.147-.057-.236-.085.06.014.089.042.148.056-3.39-1.27-6.605-2.624-9.612-4.092-3.007-1.453-5.779-3.048-8.403-4.67a94.935 94.935 0 0 1-9.17-6.563c-2.771-2.258-5.277-4.586-7.43-6.985.03.028.06.042.06.07-2.772-3.146-4.806-6.434-5.809-9.821 0 .028 0 .042.03.07 0-.028-.03-.07-.03-.099v-.042.028A15.41 15.41 0 0 1 7 47.723c0-1.34.206-2.681.56-4.022 0 .014 0 .042-.03.056 0-.028.03-.07.03-.098v-.029.029c.825-2.766 2.417-5.462 4.658-8.044 0 .014-.03.028-.03.042.03-.042.06-.07.089-.113v-.014c3.302-3.697 7.784-7.112 12.884-10.287l1.239-.762c1.209-.494 2.476-.988 3.744-1.454 3.391-1.256 6.9-2.441 10.408-3.612a254.265 254.265 0 0 1 11.41-3.486c7.902-2.187 16.158-4.106 24.59-5.814-.206.042-.383.085-.59.113 7.843-1.58 15.804-3.048 23.912-4.248a313.615 313.615 0 0 1 24.56-2.624c2.536-.156 5.072-.283 7.607-.367.56.098 1.121.197 1.651.296-.059-.014-.118-.028-.177-.028.118.028.236.042.325.07.324.085.766.043.943-.113.118-.098.118-.211.03-.296a220.649 220.649 0 0 1 18.103.339Zm-.619-.043c.118.015.236.015.383.029-.147 0-.265-.014-.383-.029Zm-27.273.127c-.059 0-.147.015-.206.015.059-.015.117-.015.206-.015Zm62.801 6.76c.118.042.206.085.324.127-.088-.056-.206-.085-.324-.127ZM25.308 25.172c-.03.014-.03.029-.059.043 0-.029.03-.029.059-.043Zm-13.091 6.365c-.03.028-.059.042-.118.07.03-.028.089-.042.118-.07ZM7.529 51.73v.028c0-.014 0-.043-.03-.057.03.014.03.029.03.029Zm.03-8.072v.056-.056c0-.014 0-.014 0 0ZM74.782 6.517c-.03 0-.059.014-.088.014.03 0 .059 0 .088-.014Z'/%3E%3C/svg%3E")`,
                  pos: 'absolute',
                  top: '-20px',
                  right: '-8px',
                },
              }}
            >
              با خرید اقساطی همه چی داری !
            </Highlight>
          </Heading>
          <Text color="#7D7D7D" mb={'6'} w={'80%'}>
            فروشگاه آترامارت این امکان را برای کاربران عزیز خود فراهم کرده است
            تا آن ها بتوانند به راحتی و با ساده ترین روش ها و شرایط ، خرید
            اقساطی داشته باشند تا بتوانند هر چیزی را علاقه دارند را داشته باشند!
          </Text>
          <Flex gap={4}>
            <Button
              w={'136px'}
              variant="solid"
              rounded="12"
              fontWeight="medium"
              colorScheme="secondary"
            >
              خرید اقساطی
            </Button>
            <Button
              variant="outline"
              rounded="12"
              fontWeight="medium"
              w={'136px'}
              colorScheme="secondary"
            >
              شرایط خرید
            </Button>
          </Flex>
        </Box>

        <video
          width={768}
          controls
          src="https://res.cloudinary.com/rixso/video/upload/v1661859817/rixsoShop/landingSlider/game_pzascn.mp4"
          poster="/images/poster_1.png"
          style={{
            borderRadius: '40px',
            boxShadow: '-23px 28px 0 -4px #9773FF',
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
            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='17' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23FFA826' d='M11.31 7.983c-2.485-1.33-4.3-4.05-4.812-7.338-.512 3.288-2.328 6.009-4.813 7.338-.48.263-1.685.659-1.685.659s1.206.4 1.69.658c2.485 1.33 4.3 4.056 4.812 7.339.512-3.283 2.328-6.01 4.813-7.339.484-.257 1.69-.658 1.69-.658s-1.21-.396-1.695-.66Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 .645h13v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
          }}
          _after={{
            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='17' fill='none'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23FFA826' d='M11.31 7.983c-2.485-1.33-4.3-4.05-4.812-7.338-.512 3.288-2.328 6.009-4.813 7.338-.48.263-1.685.659-1.685.659s1.206.4 1.69.658c2.485 1.33 4.3 4.056 4.812 7.339.512-3.283 2.328-6.01 4.813-7.339.484-.257 1.69-.658 1.69-.658s-1.21-.396-1.695-.66Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 .645h13v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
          }}
        >
          <Highlight
            query={'اقساطی'}
            styles={{
              color: 'primary.500',
            }}
          >
            مراحل خرید اقساطی
          </Highlight>
        </Heading>
        <Grid
          gridTemplateColumns="1fr 1fr"
          pos="relative"
          gridRowGap="24"
          sx={{
            '& > div:nth-of-type(even)': {
              color: 'primary.500',
              gridColumn: 2,
              justifyContent: 'end',
            },
            '& > div:nth-of-type(odd)': { color: 'secondary.500' },
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
        bgColor="#C6B2FF"
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
          bgColor="secondary.500"
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
          شرایط استفاده از تسهیلات و خرید قسطی
        </Center>
        <Text
          fontWeight="medium"
          sx={{ '& span': { display: 'block', mb: '4' } }}
          mb="12"
        >
          <Box as="span">
            1 - دارا بودن حساب جاری و دسته چک معتبر (نیازی به دسته‌چک کارمندی و
            ضامن نیست و هر نوع چکی قابل قبول است) برای پرداخت با چک و دارای بودن
            ضامن معتبر برای خرید با سفته
          </Box>
          <Box as="span">
            ۲- در صورتی که امکان ارائه چک به تعداد ماه‌‌های اقساط را ندارید،‌
            می‌توانید در ازای هر دو یا سه قسط، یک چک ارائه دهید / در صورت ارائه
            سفته، پرداخت اقساط بصورت ماهیانه است.
          </Box>
          <Box as="span">
            ۳- خرید با چک نیاز به ضامن و یا گواهی کسر از حقوق نیست / خرید با
            سفته نیاز به ضامن است.
          </Box>
          <Box as="span">
            ۴- فروش اقساطی از حداقل ۱ ماه تا حداکثر ۲۴ ماه متناسب با مبلغ خرید و
            شرایط شما امکان‌پذیر است.
          </Box>
          <Box as="span">
            ۵- درصورتیکه با دسته‌ چک شخص دیگری قصد خرید اقساطی دارید، باید
            اطلاعات ایشان را در فرم مربوطه وارد نمایید.
          </Box>
          <Box as="span">
            ۶- برای استفاده از شرایط خرید اقساطی کالای دیجیتال از دکمه «خرید
            اقساطی» استفاده کنید. دکمه «افزودن به سبد خرید» برای خریدهای نقدی و
            دکمه «خرید اقساطی» برای خرید اقساطی است که در این حالت وارد سبد خرید
            اقساطی می شوید
          </Box>
        </Text>
        <Center gap="4" mb="12">
          <Button
            leftIcon={<DownloadIcon boxSize={5} />}
            variant="solid"
            colorScheme="secondary"
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
            color="secondary.500"
            bgColor="white"
            _hover={{ bgColor: 'rgba(255, 255, 255, 0.9)' }}
            _active={{ bgColor: 'rgba(255, 255, 255, 0.9)' }}
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
