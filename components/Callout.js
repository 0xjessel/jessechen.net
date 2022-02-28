import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/react'

export default function Callout({status, icon, children, ...props}) {
  return (
    <Alert 
      status={status}
      variant="left-accent"
      {...props}>
      <AlertIcon />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}