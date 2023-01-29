import { useTheme } from 'styled-components'
import { Code } from '@/components'

export const ThemeCode = () => {
  const theme = useTheme()
  return <Code language="javascript">{JSON.stringify(theme, null, 2)}</Code>
}
