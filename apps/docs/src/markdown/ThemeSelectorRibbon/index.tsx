'use client'

import { ComponentProps, FC } from 'react'
import { Row, Switch, useShallot } from '@shallot-ui/next'

import { useDynamicTheme } from '@/theme'
import S from './styles'

const ThemeSelectorRibbon: FC<ComponentProps<typeof Row>> = (props) => {
  const { dynamicColors, dynamicVariants } = useDynamicTheme()
  const { setThemeMode } = useShallot()

  return (
    <S.Ribbon>
      <Row alignMiddle unitGap={1} unitsAround={1} {...props}>
        <select onChange={(e) => dynamicColors.setKey(e.target.value)}>
          {dynamicColors.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select onChange={(e) => dynamicVariants.setKey(e.target.value)}>
          {dynamicVariants.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Switch
          title="Dark Mode"
          onChange={(e) => setThemeMode(e.target.checked ? 'dark' : 'default')}
        />
      </Row>
    </S.Ribbon>
  )
}

export default ThemeSelectorRibbon
