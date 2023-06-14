import { ComponentProps, FunctionComponent } from 'react'
import NextLink from 'next/link'
import { Text } from '@shallot-ui/web'

export const Link: FunctionComponent<
  ComponentProps<typeof Text> & ComponentProps<typeof NextLink>
> = (props) => <Text as={NextLink as any} {...props} />
