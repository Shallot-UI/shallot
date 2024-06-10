import { getFontFamily, getFontSize } from '@shallot-ui/core-mixins'
import { ShallotProp } from '@shallot-ui/core-theme'

const Text: Record<string, ShallotProp> = {
  H1: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('xl'),
    fontWeight: 600,
  },
  H2: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('lg'),
    fontWeight: 600,
  },
  H3: {
    fontFamily: getFontFamily('Body'),
    fontSize: getFontSize('md'),
    fontWeight: 600,
  },
}

export default Text
