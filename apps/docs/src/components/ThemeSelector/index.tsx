import { FC } from 'react'
import { Row, Switch, useShallot } from '@shallot-ui/next'

import { useDynamicTheme } from '@/theme'

export const ThemeSelector: FC = () => {
  const { dynamicColors } = useDynamicTheme()
  const { setThemeMode } = useShallot()

  return (
    <Row>
      <select onChange={(e) => dynamicColors.setKey(e.target.value)}>
        {dynamicColors.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Switch
        title="Dark Mode"
        onChange={(e) => setThemeMode(e.target.checked ? 'dark' : 'default')}
        unitSize={2}
      />
    </Row>
  )
}
