import { HTMLAttributes } from 'react'
import { getTagStyles, TagProps } from '@shallot-ui/tag'

import { Box } from '../../containers'
import { Text } from '../Text'

export const Tag = (props: TagProps<HTMLAttributes<HTMLDivElement>>) => {
  const [styles, nonStyleProps] = getTagStyles(props)
  return (
    <Box shallot={styles?.container} {...nonStyleProps}>
      <Text shallot={styles?.label}>{props.title}</Text>
    </Box>
  )
}
