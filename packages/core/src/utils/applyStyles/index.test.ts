import { applyStyles } from './index'

describe('applyStyles', () => {
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
      fontSize: '16px',
    }

    const expectedMergedStyle = {
      color: 'red',
      fontSize: '16px',
    }

    const mergedStyle = applyStyles(baseStyle, overrides)

    expect(mergedStyle).toEqual(expectedMergedStyle)
  })

  // // Test case 3: Merge two style objects with nested overrides
  // it('should merge two style objects with nested overrides', () => {
  //   const baseStyle = {
  //     color: 'red',
  //     fontSize: '14px',
  //     nestedStyle: {
  //       padding: '10px',
  //       margin: '5px',
  //     },
  //   }

  //   const overrides = {
  //     fontSize: '16px',
  //     nestedStyle: {
  //       margin: '20px',
  //       newNestedStyle: {
  //         fontWeight: 'bold',
  //       },
  //     },
  //   }

  //   const expectedMergedStyle = {
  //     color: 'red',
  //     fontSize: '16px',
  //     nestedStyle: {
  //       padding: '10px',
  //       margin: '20px',
  //       newNestedStyle: {
  //         fontWeight: 'bold',
  //       },
  //     },
  //   }

  //   const mergedStyle = applyStyles(baseStyle, overrides)

  //   expect(mergedStyle).toEqual(expectedMergedStyle)
  // })

  // // Test case 4: Merge two style objects with null overrides
  // it('should merge two style objects with null overrides', () => {
  //   const baseStyle = {
  //     color: 'red',
  //     fontSize: '14px',
  //   }

  //   const overrides = null

  //   const mergedStyle = applyStyles(baseStyle, overrides)

  //   expect(mergedStyle).toEqual(baseStyle)
  // })

  // Test case 5: Merge two style objects with undefined overrides
  it('should merge two style objects with undefined overrides', () => {
    const baseStyle = {
      color: 'red',
      fontSize: '14px',
    }

    const overrides = undefined

    const mergedStyle = applyStyles(baseStyle, overrides)

    expect(mergedStyle).toEqual(baseStyle)
  })

  // Test case 6: Merge two style objects with partial overrides
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
})
