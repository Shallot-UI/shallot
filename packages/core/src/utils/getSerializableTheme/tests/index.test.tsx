import { makeTheme } from '@shallot-ui/theme'
import { getSerializableTheme } from '..'

describe.only('Test the `getSerializableTheme` function', () => {
  const theme = makeTheme({})

  it('should return a new object', () => {
    const result = getSerializableTheme(theme)
  })
})
