import { Box, Hide, Show } from "@chakra-ui/react";
import HeaderMobileApp from "./HeaderMobileApp/index ";
import HeaderNormal from "./HeaderNormal";


export default function Header() {

  return (
    <>
    <Show above="sm">
      <HeaderNormal/>
    </Show>
    <Hide above="sm">
   <HeaderMobileApp/>
    </Hide>
    </>
  );
}
