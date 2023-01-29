import { UnitsAroundProps } from '@shallot-ui/theme'

export const getUnitsAround = ({
  fullWidth,
  fullHeight,
  unitsAround,
  unitsAbove,
  unitsBelow,
  unitsLeft,
  unitsRight,
}: UnitsAroundProps) => {
  let styles = ''
  if (fullWidth) {
    styles += `
      width: calc(100% -
        ${
          12 * (unitsLeft ?? unitsAround ?? 0) +
          12 * (unitsRight ?? unitsAround ?? 0)
        }px);
    `
  }
  if (fullHeight) {
    styles += `
      height: calc(100% -
        ${
          12 * (unitsAbove ?? unitsAround ?? 0) +
          12 * (unitsBelow ?? unitsAround ?? 0)
        }px);
    `
  }
  if (typeof unitsAround === 'number') {
    styles += `margin: ${unitsAround * 12}px;`
  }
  if (typeof unitsAbove === 'number') {
    styles += `margin-top: ${unitsAbove * 12}px;`
  }
  if (typeof unitsBelow === 'number') {
    styles += `margin-bottom: ${unitsBelow * 12}px;`
  }
  if (typeof unitsLeft === 'number') {
    styles += `margin-left: ${unitsLeft * 12}px;`
  }
  if (typeof unitsRight === 'number') {
    styles += `margin-right: ${unitsRight * 12}px;`
  }
  return styles
}
