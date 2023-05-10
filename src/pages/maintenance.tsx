import { Box, Center, Highlight, VStack } from '@chakra-ui/react';
import { AngleDownIcon, DangerIcon } from 'components/common/Icons';
import { MaintenanceVector } from 'components/common/Icons/Vectors';
import type { NextPage } from 'next';

const Maintenance: NextPage = () => {
  return (
    <Box as="main" layerStyle="container" py={['44px', '54px', '64px']}>
      <VStack spacing="54px">
        <MaintenanceVector />
        <Center
          as="h1"
          fontWeight="500"
          fontSize={[10, 12, 14, 20]}
          bgColor="primary.500"
          rounded={16}
          h="79px"
          px={[4, 6, 8, 12]}
          pos="relative"
          _before={{
            content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='19' height='21' fill='none' viewBox='0 0 19 21'%3E%3Cpath stroke='%2315121D' d='m3.53 3.118 14.572 17.22'/%3E%3Cpath stroke='%2315121D' d='m6.814.726 7.526 2.236'/%3E%3Cpath stroke='%2315121D' d='M.489 5.663 3.02 17.477'/%3E%3C/svg%3E")`,
            pos: 'absolute',
            right: '-4',
            bottom: '-28px',
          }}
          _after={{
            content: '""',
            w: '100%',
            h: '100%',
            pos: 'absolute',
            border: '2.5px solid',
            borderColor: 'text',
            rounded: '16',
            top: '-8px',
            left: '-9px',
          }}
        >
          <DangerIcon ml={4} />
          <Highlight
            query="خیلی زود بر
          میگردیم !"
            styles={{
              color: 'white',
              mr: '6px',
              '&::after': {
                content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='68' height='71' fill='none' viewBox='0 0 68 71'%3E%3Cpath fill='%2315121D' d='M31.151 68.528C24.42 59.544 18.201 48.972 20.613 37.3c1.11-5.363 3.756-10.253 6.643-14.845 3.41-5.424 7.126-10.662 10.718-15.966.628-.925.17-2.308-1.098-2.248-3.288.155-6.284 1.292-8.805 3.414-1.051.886-.363 3.091 1.164 2.415 2.526-1.116 5.047-2.253 7.582-3.346 1.697-.73 2.103.595 2.65 1.992a69.877 69.877 0 0 1 1.453 4.149c.517 1.627 3.045.804 2.522-.824-.652-2.024-1.343-4.056-2.21-5.996-.52-1.165-1.227-2.28-2.606-2.461-1.534-.201-3.099.804-4.442 1.388-1.93.839-3.856 1.681-5.785 2.52.39.806.777 1.613 1.165 2.415 2.175-1.815 4.626-2.813 7.462-2.963-.367-.747-.732-1.5-1.099-2.248-3.69 5.512-7.51 10.961-11.011 16.597-3.141 5.054-5.933 10.51-6.888 16.447-1.901 11.784 4.276 23.294 12.262 31.537.45.466 1.248-.232.861-.75Z'/%3E%3C/svg%3E")`,
                pos: 'absolute',
                left: '-70px',
                top: '-46px',
              },
            }}
          >
            با عرض شرمندگی پیج تا اطلاع ثانویه در دست تغییر است ، خیلی زود بر
            میگردیم !
          </Highlight>
          <DangerIcon mr={4} />
        </Center>
      </VStack>
    </Box>
  );
};

export default Maintenance;
