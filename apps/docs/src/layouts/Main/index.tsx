import { FC, ReactNode } from 'react'

const MainLayout: FC<Readonly<{ children: ReactNode }>> = ({ children }) => (
  <>{children}</>
)

export default MainLayout
