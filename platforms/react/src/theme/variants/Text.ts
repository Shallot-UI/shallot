import {
  getColor,
  getFontFamily,
  getFontSize,
  getGlobal,
} from '@shallot-ui/core-mixins'
import { ShallotProp } from '@shallot-ui/core-theme'

const Text: Record<string, ShallotProp> = {
  Default: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('md'),
    color: getGlobal('foregroundColor'),
    fontWeight: 300,
  },
  P: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('md'),
    color: getGlobal('foregroundColor'),
    fontWeight: 300,
  },
  H1: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('xl'),
    color: getGlobal('foregroundFadeColor'),
    fontWeight: 600,
  },
  H2: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('lg'),
    color: getGlobal('foregroundFadeColor'),
    fontWeight: 600,
  },
  H3: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('md'),
    color: getGlobal('foregroundColor'),
    fontWeight: 600,
  },
}

export default Text
