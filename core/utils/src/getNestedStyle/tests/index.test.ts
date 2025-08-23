import { makeTheme } from '@shallot-ui/core-theme'
import { getNestedStyle } from '../index'
import { DefaultTheme } from 'styled-components'

describe('getNestedStyle', () => {
  const theme: DefaultTheme = makeTheme({
    tokens: {
      colors: {
        Primary: { 500: '#blue' },
      },
    },
  })

  it('should extract nested component styles', () => {
    const shallot = {
      Container: {
        backgroundColor: '#red',
        padding: '8px',
      },
      Title: {
        fontSize: '16px',
        color: '#blue',
      },
    }

    const result = getNestedStyle('Container')({ shallot })({ theme })

    expect(result).toEqual({
      backgroundColor: '#red',
      padding: '8px',
    })
  })

  it('should extract nested component styles with state', () => {
    const shallot = {
      ':hover': {
        Container: {
          backgroundColor: '#darkred',
        },
      },
    }

    const result = getNestedStyle('Container', ':hover')({ shallot })({ theme })

    expect(result).toEqual({
      backgroundColor: '#darkred',
    })
  })

  it('should return empty object when component not found', () => {
    const shallot = {
      Container: {
        backgroundColor: '#red',
      },
    }

    const result = getNestedStyle('NotFound')({ shallot })({ theme })

    expect(result).toEqual({})
  })

  it('should return empty object when state not found', () => {
    const shallot = {
      Container: {
        backgroundColor: '#red',
      },
    }

    const result = getNestedStyle('Container', ':hover')({ shallot })({ theme })

    expect(result).toEqual({})
  })

  it('should handle empty shallot object', () => {
    const result = getNestedStyle('Container')({ shallot: {} })({ theme })

    expect(result).toEqual({})
  })
})