import {
  Box,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import { TimeQuatreIcon } from 'components/common/Icons';

export default function WalletTables() {
  return (
    <TableContainer
      h="178px"
      overflowY="scroll"
      dir="ltr"
      pr={2}
      sx={{
        '&::-webkit-scrollbar': {
          width: '4px',
          background: '#eee',
          borderRadius: '7px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#FFA826',
          borderRadius: '7px',
        },
        ' &::-webkit-scrollbar-track-piece:end': {
          background: '#eee',
          borderRadius: '7px',
          marginBottom: '34px',
        },
        ' &::-webkit-scrollbar-track-piece:start': {
          background: '#eee',
          borderRadius: '7px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#fff',
        },
      }}
    >
      <Table
        variant="striped"
        sx={{
          '&': {
            borderCollapse: 'separate',
            borderSpacing: '0 16px',
            mt: '-10px',
          },
        }}
        dir="rtl"
      >
        <Tbody
          sx={{
            '& tr:nth-of-type(even) td': {
              bgColor: '#eee',
              borderColor: '#eee',
            },
            '& tr:nth-of-type(odd) td': {
              bgColor: '#F5F5F5',
              borderColor: '#f5f5f5',
            },
            '& tr td:nth-of-type(even)': {
              px: '0',
            },
            '& tr td:first-of-type': {
              borderBottomRightRadius: '12px',
              borderTopRightRadius: '12px',
              pl: 2,
              pr: 3,
              w: 0,
            },
            '& tr td:last-of-type': {
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
              pl: 3,
              w: 0,
            },
            '& tr td': { py: '11px' },
          }}
        >
          <Tr>
            <Td>
              <Center
                bgColor="comparison"
                color="white"
                w="23px"
                h="23px"
                rounded={6}
                fontSize="13px"
              >
                ۱
              </Center>
            </Td>
            <Td fontSize="12px">
              مقدار پرداخت :
              <Box as="span" mx={1} fontSize="14px">
                ۲٬۳۶۶٬۰۰۰
              </Box>
              تومان
            </Td>
            <Td>
              <Center gap={2}>
                <TimeQuatreIcon />
                <Box as="span" fontSize="12px">
                  ۱۲:۳۰ - ۱۲ مرداد ۱۴۰۱
                </Box>
              </Center>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Center
                bgColor="comparison"
                color="white"
                w="23px"
                h="23px"
                rounded={6}
                fontSize="13px"
              >
                ۲
              </Center>
            </Td>
            <Td fontSize="12px">
              مقدار پرداخت :
              <Box as="span" mx={1} fontSize="14px">
                ۲٬۳۶۶٬۰۰۰
              </Box>
              تومان
            </Td>
            <Td>
              <Center gap={2}>
                <TimeQuatreIcon />
                <Box as="span" fontSize="12px">
                  ۱۲:۳۰ - ۱۲ مرداد ۱۴۰۱
                </Box>
              </Center>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Center
                bgColor="comparison"
                color="white"
                w="23px"
                h="23px"
                rounded={6}
                fontSize="13px"
              >
                ۳
              </Center>
            </Td>
            <Td fontSize="12px">
              مقدار پرداخت :
              <Box as="span" mx={1} fontSize="14px">
                ۲٬۳۶۶٬۰۰۰
              </Box>
              تومان
            </Td>
            <Td>
              <Center gap={2}>
                <TimeQuatreIcon />
                <Box as="span" fontSize="12px">
                  ۱۲:۳۰ - ۱۲ مرداد ۱۴۰۱
                </Box>
              </Center>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Center
                bgColor="comparison"
                color="white"
                w="23px"
                h="23px"
                rounded={6}
                fontSize="13px"
              >
                ۴
              </Center>
            </Td>
            <Td fontSize="12px">
              مقدار پرداخت :
              <Box as="span" mx={1} fontSize="14px">
                ۲٬۳۶۶٬۰۰۰
              </Box>
              تومان
            </Td>
            <Td>
              <Center gap={2}>
                <TimeQuatreIcon />
                <Box as="span" fontSize="12px">
                  ۱۲:۳۰ - ۱۲ مرداد ۱۴۰۱
                </Box>
              </Center>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Center
                bgColor="comparison"
                color="white"
                w="23px"
                h="23px"
                rounded={6}
                fontSize="13px"
              >
                ۵
              </Center>
            </Td>
            <Td fontSize="12px">
              مقدار پرداخت :
              <Box as="span" mx={1} fontSize="14px">
                ۲٬۳۶۶٬۰۰۰
              </Box>
              تومان
            </Td>
            <Td>
              <Center gap={2}>
                <TimeQuatreIcon />
                <Box as="span" fontSize="12px">
                  ۱۲:۳۰ - ۱۲ مرداد ۱۴۰۱
                </Box>
              </Center>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
