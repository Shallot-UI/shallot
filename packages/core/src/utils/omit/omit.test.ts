import { omit } from '.'

describe('omit', () => {
  it('omits specified keys from an object', () => {
    const input = { a: 1, b: 'two', c: true }
    const expected = { a: 1 }
    const actual = omit(input, ['b', 'c'])
    expect(actual).toEqual(expected)
  })

  it('returns the same object if no keys are specified', () => {
    const input = { a: 1, b: 'two', c: true }
    const expected = { a: 1, b: 'two', c: true }
    const actual = omit(input, [])
    expect(actual).toEqual(expected)
  })

  it('works with objects that have optional keys', () => {
    interface Person {
      name: string
      age?: number
      address?: string
    }

    const input: Person = { name: 'John', age: 30, address: '123 Main St.' }
    const expected = { name: 'John' }
    const actual = omit(input, ['age', 'address'])
    expect(actual).toEqual(expected)
  })
})
