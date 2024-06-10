import type { ShallotProp } from '@shallot-ui/core-theme'
import {
  getFontFamily,
  getFontSize,
  getLineHeight,
} from '@shallot-ui/core-mixins'

const Text: Record<string, ShallotProp> = {
  H1: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('xl'),
    lineHeight: getLineHeight('xl'),
    fontWeight: 600,
  },
  H2: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('lg'),
    lineHeight: getLineHeight('lg'),
    fontWeight: 600,
  },
  H3: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('md'),
    lineHeight: getLineHeight('md'),
    fontWeight: 600,
  },
}

export default Text
