import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { AngleDownIcon, SearchIcon, TwoDotIcon } from 'components/common/Icons';

function JoinNewsLatter() {
  return (
    <Box maxW="1440px" mx={{ base: 10, lg: 'auto' }} px={{ base: 0, lg: 9 }}>
      <Box
        bgColor={['#F2EDFF', 'secondary.500']}
        rounded="32"
        py={['5', '8']}
        px="4"
        mb="16"
        pos="relative"
        _before={{
          content: '""',
          w: { base: '86%', lg: '100%' },
          bgColor: '#B89FFF',
          borderRadius: '40',
          pos: 'absolute',
          h: { base: '116%', lg: '100%' },
          top: { base: '-8%', lg: '0' },
          left: { base: '50%', lg: '0' },
          transform: { base: 'translate(-50% , 0)', lg: 'rotate(-1.5deg)' },
          zIndex: '-1',
          display: ['none', 'block'],
        }}
        _after={{
          content: '""',
          w: '74%',
          bgColor: '#CAB7FF',
          borderRadius: '40',
          pos: 'absolute',
          h: '128%',
          top: '-14%',
          left: '50%',
          transform: 'translate(-50% , 0)',
          zIndex: '-2',
          display: ['none', 'block', 'none'],
        }}
      >
        <TwoDotIcon
          color={['secondary.500', 'white']}
          w="9"
          filter={[
            'drop-shadow(0px 0px 4px rgba(21, 18, 29, 0.25))',
            'drop-shadow( 0px 0px 6px rgba(255, 255, 255, 0.48))',
          ]}
          mx="auto"
          display="block"
        />
        <Text
          textAlign="center"
          fontSize={['20', '24', '32']}
          fontWeight="600"
          color={['secondary.500', 'white']}
          mb="4"
          position={'relative'}
        >
          فقط با ایمیل ، عضو خبرنامه ما شو !
        </Text>
        <InputGroup isolation="isolate" maxW="684px" mx="auto">
          <InputLeftElement
            left="1.5"
            top="1"
            bgColor="secondary.500"
            rounded="12"
          >
            <AngleDownIcon
              transform="rotate(90deg)"
              color="white"
              boxSize={5}
            />
          </InputLeftElement>
          <Input
            variant="outline"
            bgColor="#fff"
            focusBorderColor="secondary.500"
            placeholder="ایمیل خود را وارد کنید"
            h="12"
            _placeholder={{
              color: 'text',
              fontWeight: '600',
              fontSize: [13, 16],
            }}
            fontSize={['13', 16]}
            fontWeight={'600'}
            p="0 12px"
            rounded="12"
          />
        </InputGroup>
      </Box>
    </Box>
  );
}

export default JoinNewsLatter;
