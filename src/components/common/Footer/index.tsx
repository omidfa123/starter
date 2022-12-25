import { Hide, Show } from "@chakra-ui/react"
import FooterDesktop from "./FooterDesktop"
import FooterMobileApp from "./FooterMoblieApp"


function Footer() {
  return (
    <>
    <Show above="sm">
    <FooterDesktop/>
    </Show>
    <Hide above="sm">
   <FooterMobileApp/>
    </Hide>
    </>
  )
}

export default Footer