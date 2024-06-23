import { getTextAlignmentShallot } from '../index'

describe('getTextAlignmentShallot', () => {
  it('should return textAlign left when alignTextLeft is true', () => {
    const textAlignmentProps = {
      alignTextLeft: true,
      alignTextCenter: false,
      alignTextRight: false,
    }

    const textAlign = getTextAlignmentShallot(textAlignmentProps)

    expect(textAlign).toEqual({ textAlign: 'left' })
  })

  it('should return textAlign center when alignTextCenter is true', () => {
    const textAlignmentProps = {
      alignTextLeft: false,
      alignTextCenter: true,
      alignTextRight: false,
    }

    const textAlign = getTextAlignmentShallot(textAlignmentProps)

    expect(textAlign).toEqual({ textAlign: 'center' })
  })

  it('should return textAlign right when alignTextRight is true', () => {
    const textAlignmentProps = {
      alignTextLeft: false,
      alignTextCenter: false,
      alignTextRight: true,
    }

    const textAlign = getTextAlignmentShallot(textAlignmentProps)

    expect(textAlign).toEqual({ textAlign: 'right' })
  })

  it('should return an empty object when no alignment props are provided', () => {
    const textAlignmentProps = {
      alignTextLeft: false,
      alignTextCenter: false,
      alignTextRight: false,
    }

    const textAlign = getTextAlignmentShallot(textAlignmentProps)

    expect(textAlign).toEqual({})
  })
})
