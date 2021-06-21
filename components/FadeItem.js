import { useBreakpointValue } from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"

export default function FadeItem({ children, ...props }) {
  const tooSmall = useBreakpointValue({ sm: true, md: false })

  if (tooSmall) {
    return children
  }

  return (
    <Fade {...props}>
      {children}
    </Fade>
  )
}