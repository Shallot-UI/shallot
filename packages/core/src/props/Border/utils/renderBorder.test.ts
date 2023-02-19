import { minifyCss } from '../../../utils/minifyCss'
import renderBorder from './renderBorder'

describe('renderBorder', () => {
  test('returns styles for a full border', () => {
    const width = 2
    const position = 'all'
    const expectedStyles = minifyCss(`border-width: ${width}px;`)
    expect(minifyCss(renderBorder(width, position))).toEqual(expectedStyles)
  })

  test('returns styles for a top-positioned border', () => {
    const width = 1
    const position = 'top'
    const expectedStyles = minifyCss(`
      border-width: 0;
      border-top-width: ${width}px;
    `)
    expect(minifyCss(renderBorder(width, position))).toEqual(expectedStyles)
  })

  test('returns styles for a left-positioned border', () => {
    const width = 3
    const position = 'left'
    const expectedStyles = minifyCss(`
      border-width: 0;
      border-left-width: ${width}px;
    `)
    expect(minifyCss(renderBorder(width, position))).toEqual(expectedStyles)
  })

  test('returns styles for a right-positioned border', () => {
    const width = 4
    const position = 'right'
    const expectedStyles = minifyCss(`
      border-width: 0;
      border-right-width: ${width}px;
    `)
    expect(minifyCss(renderBorder(width, position))).toEqual(expectedStyles)
  })

  test('returns styles for a bottom-positioned border', () => {
    const width = 2
    const position = 'bottom'
    const expectedStyles = minifyCss(`
      border-width: 0;
      border-bottom-width: ${width}px;
    `)
    expect(minifyCss(renderBorder(width, position))).toEqual(expectedStyles)
  })
})
