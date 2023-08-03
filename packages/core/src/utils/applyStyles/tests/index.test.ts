import { applyStyles } from '../index'

describe('Test the `applyStyles` function', () => {
  // Test case 1: Merge two style objects with no overrides
  it('should merge two style objects with no overrides', () => {
    const baseStyle = {
      color: 'red',
      fontSize: '14px',
    }

    const mergedStyle = applyStyles(baseStyle)

    expect(mergedStyle).toEqual(baseStyle)
  })

  // Test case 2: Merge two style objects with some overrides
  it('should merge two style objects with some overrides', () => {
    const baseStyle = {
      color: 'red',
      fontSize: '14px',
    }

    const overrides = {
      width: '16px',
    }

    const expectedMergedStyle = {
      color: 'red',
      fontSize: '14px',
      width: '16px',
    }

    // @ts-ignore
    const mergedStyle = applyStyles(baseStyle, overrides)

    expect(mergedStyle).toEqual(expectedMergedStyle)
  })

  // Test case 4: Merge two style objects with partial overrides
  it('should merge two style objects with partial overrides', () => {
    const baseStyle = {
      color: 'red',
      fontSize: '14px',
      nestedStyle: {
        padding: '10px',
      },
    }

    const overrides = {
      fontSize: '16px',
    }

    const expectedMergedStyle = {
      color: 'red',
      fontSize: '16px',
      nestedStyle: {
        padding: '10px',
      },
    }

    const mergedStyle = applyStyles(baseStyle, overrides)

    expect(mergedStyle).toEqual(expectedMergedStyle)
  })

  // Test case 4: Merge two style objects with nested overrides
  it('should merge two style objects with nested overrides', () => {
    const baseStyle = {
      color: 'red',
      fontSize: '14px',
      nestedStyle: {
        padding: '10px',
        margin: '5px',
      },
    }

    const overrides = {
      fontSize: '16px',
      nestedStyle: {
        margin: '20px',
        newNestedStyle: {
          fontWeight: 'bold',
        },
      },
    }

    const expectedMergedStyle = {
      color: 'red',
      fontSize: '16px',
      nestedStyle: {
        padding: '10px',
        margin: '20px',
        newNestedStyle: {
          fontWeight: 'bold',
        },
      },
    }

    // @ts-ignore
    const mergedStyle = applyStyles(baseStyle, overrides)

    expect(mergedStyle).toEqual(expectedMergedStyle)
  })

  // Test case 5: Merging with nested objects that have different structures
  it('should handle merging with nested objects with different structures', () => {
    const baseStyle = { nestedStyle: { padding: '10px' } }
    const overrides = { nestedStyle: { margin: '5px' } }
    // @ts-ignore
    const mergedStyle = applyStyles(baseStyle, overrides)
    expect(mergedStyle).toEqual({
      nestedStyle: { padding: '10px', margin: '5px' },
    })
  })

  // Test case 6: Merging with nested objects that have conflicting properties
  it('should handle merging with nested objects with conflicting properties', () => {
    const baseStyle = { nestedStyle: { margin: '10px' } }
    const overrides = {
      nestedStyle: { margin: '20px', newNestedStyle: { fontWeight: 'bold' } },
    }
    const mergedStyle = applyStyles(baseStyle, overrides)
    expect(mergedStyle).toEqual({
      nestedStyle: { margin: '20px', newNestedStyle: { fontWeight: 'bold' } },
    })
  })
})
