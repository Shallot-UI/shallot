
import { getAlignmentShallot } from '../index'

describe('getAlignmentShallot', () => {
  it('should return correct alignment for row direction', () => {
    const flexDirection: string = 'row'
    const alignmentProps = {
      alignTop: true,
      alignMiddle: false,
      alignBottom: false,
      alignLeft: true,
      alignCenter: false,
      alignRight: false,
    }

    const alignment = getAlignmentShallot(flexDirection, alignmentProps)

    expect(alignment).toEqual({
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    })
  })

  it('should return correct alignment for column direction', () => {
    const flexDirection: string = 'column'
    const alignmentProps = {
      alignTop: false,
      alignMiddle: true,
      alignBottom: false,
      alignLeft: false,
      alignCenter: true,
      alignRight: false,
    }

    const alignment = getAlignmentShallot(flexDirection, alignmentProps)

    expect(alignment).toEqual({
      alignItems: 'center',
      justifyContent: 'center',
    })
  })

  it('should return empty object if no alignment props are provided', () => {
    const flexDirection: string = 'row'
    const alignmentProps = {
      alignTop: false,
      alignMiddle: false,
      alignBottom: false,
      alignLeft: false,
      alignCenter: false,
      alignRight: false,
    }

    const alignment = getAlignmentShallot(flexDirection, alignmentProps)

    expect(alignment).toEqual({})
  })
})
