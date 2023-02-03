import { UnitPaddingProps } from '@shallot-ui/theme'

export const getUnitPadding = ({
  unitPadding,
  unitPaddingAbove,
  unitPaddingBelow,
  unitPaddingLeft,
  unitPaddingRight,
}: UnitPaddingProps) => {
  let styles = ''
  if (typeof unitPadding === 'number') {
    styles += `padding: ${unitPadding * 12}px;`
  }
  if (typeof unitPaddingAbove === 'number') {
    styles += `padding-top: ${unitPaddingAbove * 12}px;`
  }
  if (typeof unitPaddingBelow === 'number') {
    styles += `padding-bottom: ${unitPaddingBelow * 12}px;`
  }
  if (typeof unitPaddingLeft === 'number') {
    styles += `padding-left: ${unitPaddingLeft * 12}px;`
  }
  if (typeof unitPaddingRight === 'number') {
    styles += `padding-right: ${unitPaddingRight * 12}px;`
  }
  return styles
}
