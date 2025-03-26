'use client'

import { H3 } from '@shallot-ui/next'
import { FC, ReactNode, useState } from 'react'

type CollapsableProps = {
  title: string
  children: ReactNode
  initialOpen?: boolean
}

export const Collapsable: FC<CollapsableProps> = ({
  title,
  children,
  initialOpen = false,
}) => {
  const [open, setOpen] = useState(initialOpen)

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <H3>{title}</H3>
      </button>
      {open && children}
    </div>
  )
}
