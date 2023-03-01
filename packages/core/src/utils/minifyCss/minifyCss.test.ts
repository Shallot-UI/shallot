import { minifyCss } from '.'

describe('minifyCss', () => {
  test('removes leading and trailing whitespace', () => {
    const input = '   \n \t body { color: red; } \n   '
    const expected = 'body{color:red;}'
    expect(minifyCss(input)).toBe(expected)
  })

  test('replaces multiple spaces with a single space', () => {
    const input = 'body {   margin:    0  10px   ; }'
    const expected = 'body{margin:0 10px;}'
    expect(minifyCss(input)).toBe(expected)
  })

  test('removes spaces before and after colons and semicolons', () => {
    const input = 'p   {  font-size : 16px;   color:  blue  ; }'
    const expected = 'p{font-size:16px;color:blue;}'
    expect(minifyCss(input)).toBe(expected)
  })

  test('returns an empty string for an empty input', () => {
    const input = ''
    const expected = ''
    expect(minifyCss(input)).toBe(expected)
  })
})
