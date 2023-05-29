<<<<<<< HEAD
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { WavesIcon } from "components/common/Icons";
import Logo from "components/custom/Logo";

import TopNav from "../Naves/TopNav";
import NavList from "components/common/Header/HeaderNormal/Naves/NavList";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      autoFocus={false}
    >
      <DrawerOverlay zIndex={0} />
      <DrawerContent rounded={"0 0 0 24px"}>
        <DrawerHeader display="flex" justifyContent="space-between">
          <Logo />
          <DrawerCloseButton
            position={"static"}
            color="white"
            bgColor="black"
            w={6}
            h={6}
          />
        </DrawerHeader>
        <DrawerBody display="flex" flexDir="column" gap={3}>
          <hr />
          <TopNav isMobile />
          <hr />
          <NavList isMobile />
        </DrawerBody>
        <DrawerFooter p="0" display="static">
          <WavesIcon boxSize="107.9%" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
=======
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { WavesIcon } from 'components/common/Icons';
import Logo from 'components/custom/Logo';
import NavList from '../../../../../../index';
import TopNav from '../Naves/TopNav';

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      autoFocus={false}
    >
      <DrawerOverlay zIndex={0} />
      <DrawerContent rounded={'0 0 0 24px'}>
        <DrawerHeader display="flex" justifyContent="space-between">
          <Logo />
          <DrawerCloseButton
            position={'static'}
            color="white"
            bgColor="black"
            w={6}
            h={6}
          />
        </DrawerHeader>
        <DrawerBody display="flex" flexDir="column" gap={3}>
          <hr />
          <TopNav isMobile />
          <hr />
          <NavList isMobile />
        </DrawerBody>
        <DrawerFooter p="0" display="static">
          <WavesIcon boxSize="107.9%" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
>>>>>>> d7d871d22490353884ccd4210328c3c84f27241a
