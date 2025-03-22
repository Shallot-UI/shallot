'use client'

import { Fold, getFontFamily, withBoxShallot } from '@shallot-ui/next'
import Content from '@/markdown/home.mdx'

const Wrapper = withBoxShallot('div', {
  fontFamily: getFontFamily('Body'),
  lineHeight: 1.5,
})

const Page = () => (
  <Fold alignCenter>
    <Wrapper fullWidth maxUnitWidth={60} unitsAround={2}>
      <Content />
    </Wrapper>
  </Fold>
)

export default Page
