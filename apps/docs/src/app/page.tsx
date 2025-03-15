'use client'

import { Column, Fold } from '@shallot-ui/next'
import Content from '@/markdown/home.mdx'

const Page = () => (
  <Fold alignCenter>
    <Column maxUnitWidth={60} unitsAround={2}>
      <Content />
    </Column>
  </Fold>
)

export default Page
