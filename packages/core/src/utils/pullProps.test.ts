import { pullProps, PullAction } from './pullProps'

describe('pullProps', () => {
  type TestProps = {
    a: string
    b: number
    c: boolean
    d: string[]
    e: Record<string, any>
  }

  type TestPulledProps = {
    a: string
    d: string[]
    e: Record<string, any>
  }

  const testActions: PullAction<any, Partial<TestPulledProps>>[] = [
    (props: TestProps) => {
      // Pull out `a` and `d` from the props
      const { a, d, ...otherProps } = props
      return [{ a, d }, otherProps]
    },
    (props: TestProps) => {
      // Pull out `e` from the props
      const { e, ...otherProps } = props
      return [{ e }, otherProps]
    },
  ]

  const testProps: TestProps = {
    a: 'hello',
    b: 123,
    c: true,
    d: ['world', 'foo', 'bar'],
    e: { foo: 'bar', baz: 42 },
  }

  test('returns the correct pulled and remaining props', () => {
    const [pulledProps, remainingProps] = pullProps(testProps, testActions)

    expect(pulledProps).toEqual({
      a: 'hello',
      d: ['world', 'foo', 'bar'],
      e: { foo: 'bar', baz: 42 },
    })

    expect(remainingProps).toEqual({ b: 123, c: true })
  })

  test('does not modify the input props', () => {
    const originalProps = { ...testProps }
    pullProps(testProps, testActions)

    expect(testProps).toEqual(originalProps)
  })
})
