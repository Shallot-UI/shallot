import { pick } from '.'

describe('pick', () => {
  it('picks specified keys from an object', () => {
    const input = { a: 1, b: 'two', c: true }
    const expected = { a: 1, b: 'two' }
    const actual = pick(input, ['a', 'b'])
    expect(actual).toEqual(expected)
  })

  it('returns an empty object if no keys are specified', () => {
    const input = { a: 1, b: 'two', c: true }
    const expected = {}
    const actual = pick(input, [])
    expect(actual).toEqual(expected)
  })

  it('works with objects that have optional keys', () => {
    interface Person {
      name: string
      age?: number
      address?: string
    }

    const input: Person = { name: 'John', age: 30, address: '123 Main St.' }
    const expected = { name: 'John', age: 30 }
    const actual = pick(input, ['name', 'age'])
    expect(actual).toEqual(expected)
  })
})
