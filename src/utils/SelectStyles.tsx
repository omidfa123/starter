import { Box, Center, CircularProgress, Spinner } from '@chakra-ui/react';
import { AngleDownIcon, CloseIcon, SearchIcon } from 'components/common/Icons';
import { components } from 'react-select';
import {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  StylesConfig,
} from 'react-select/dist/declarations/src';

export const selectStyles: StylesConfig = {
  control: (base, state) => ({
    ...base,
    height: 42,
    borderRadius: 12,
    border: '1px solid transparent',
    maxWidth: '256.44px',
    boxShadow: 'none',
    '&:hover': {
      border: '1.5px solid  #15121D',
      cursor: `${state.menuIsOpen ? 'unset' : 'pointer'}`,
    },
  }),
  valueContainer: (base, state) => ({
    ...base,
    padding: '0 16px 0 16px',
    fontSize: '14px',
  }),
  placeholder: base => ({
    ...base,
    color: '#15121D',
    '&::after': {
      content: '"*"',
      position: 'absolute',
      right: '70px',
      marginInlineStart: '4px',
      color: '#e53e3e',
      role: 'presentation',
      ariaHidden: 'true',
      fontSize: '16px',
    },
  }),

  clearIndicator: base => ({
    ...base,
    color: '#15121D',
  }),
  menuList: base => ({
    ...base,
    backgroundColor: '#fff',
    '&::-webkit-scrollbar': {
      width: '5px',
      background: '#eee',
      borderRadius: '7px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#c1c1c1',
      borderRadius: '7px',
    },
  }),
};
const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <AngleDownIcon
        color="#15121D"
        transitionDuration="0.6s"
        transitionProperty="transform"
        boxSize="13px"
        transform={props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'unset'}
      />
    </components.DropdownIndicator>
  );
};
const ClearIndicator = (props: ClearIndicatorProps) => (
  <components.ClearIndicator {...props}>
    <CloseIcon boxSize="13px" />
  </components.ClearIndicator>
);
const NoOptionsMessage = (props: any) => (
  <components.NoOptionsMessage {...props}>
    <Center gap={2}>
      <SearchIcon color="hsl(0deg 0% 60%)" transform="scale(-1 ,1)" />
      موردی یافت نشد
    </Center>
  </components.NoOptionsMessage>
);
const LoadingMessage = (props: any) => (
  <components.LoadingMessage {...props}>
    <Center gap={2}>
      <CircularProgress
        isIndeterminate
        color="#9773FF"
        size="26px"
        thickness="6px"
      />
      درحال بارگذاری
    </Center>
  </components.LoadingMessage>
);
export const component = {
  DropdownIndicator,
  ClearIndicator,
  IndicatorSeparator: () => null,
  NoOptionsMessage,
  LoadingMessage,
};
