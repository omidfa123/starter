import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import Image from 'next/future/image';

export default function CreditTable() {
  return (
    <Table
      variant="striped"
      sx={{
        '&': {
          borderCollapse: 'separate',
          borderSpacing: '0 16px',
          mt: '-10px',
        },
      }}
      mb={6}
    >
      <Thead
        sx={{
          '& tr th': {
            borderColor: '#D8D8D8',
            color: 'text',
            fontSize: '14px',
            letterSpacing: 'unset',
            fontWeight: '400',
            pb: '16px',
            pt: '0',
            pl: 0,
            pr: 0,
            '&:first-of-type': { pr: 6 },
          },
        }}
      >
        <Tr>
          <Th>محصول</Th>
          <Th>شماره درخواست</Th>
          <Th>شماره پیگیری</Th>
          <Th>نحوه پرداخت</Th>
          <Th>اعتبار ( تومان )</Th>
          <Th pr="10px !important">زمان ثبت</Th>
          <Th pr="10px !important">وضعیت</Th>
          <Th>وضعیت اکنون</Th>
          <Th>عملیات</Th>
        </Tr>
      </Thead>
      <Tbody
        sx={{
          '& tr:nth-of-type(even) td': {
            bgColor: '#eee',
            borderBottom: '1.5px solid #eee',
            borderTop: '1.5px solid #eee',
          },
          '& tr:nth-of-type(odd) td': {
            bgColor: '#F5F5F5',
            borderBottom: '1.5px solid #f5f5f5',
            borderTop: '1.5px solid #f5f5f5',
          },
          '& tr td:first-of-type': {
            borderBottomRightRadius: '20px',
            borderTopRightRadius: '20px',
            pr: 7,
            borderRight: '1.5px solid transparent',
          },
          '& tr td:last-of-type': {
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            borderLeft: '1.5px solid transparent',
          },
          '& tr td': { py: '14px', pl: 0, pr: 0 },
          '& tr:hover td': {
            bg: 'white',
            borderBottom: '1.5px solid #9773FF',
            borderTop: '1.5px solid #9773FF',
            '&:first-of-type': {
              borderRight: '1.5px solid #9773FF',
              boxShadow: '3px 0px 10px 0px rgba(0, 0, 0, 0.08)',
            },
            '&:last-of-type': {
              borderLeft: '1.5px solid #9773FF',
              boxShadow: '-6px 0px 10px 0 rgba(0, 0, 0, 0.08)',
            },
            boxShadow: '-8px 0px 10px 0 rgba(0, 0, 0, 0.08)',
          },
        }}
      >
        {Array.from('omidfa1236').map((_, index) => (
          <Tr key={index}>
            <Td>
              <Image
                src="/images/mouse.png"
                alt="mouse"
                width={32}
                height={54}
              />
            </Td>
            <Td pr="10px !important">۲۰۰۰۱۵۹۴۹</Td>
            <Td>۵۶۳۵۸۹۴۱</Td>
            <Td>چند قسطه</Td>
            <Td pr="10px !important">۱۲٬۲۲۰٬۰۰۰</Td>
            <Td>۱۲/۵/۱۴۰۲</Td>
            <Td>تایید شده</Td>
            <Td>پرداخت شده</Td>
            <Td>موفق</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
