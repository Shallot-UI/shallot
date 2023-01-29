import React, { FunctionComponent, SVGProps } from 'react'

export const CheckmarkIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="8"
    viewBox="0 0 10 8"
    {...props}
  >
    <path
      fill-rule="nonzero"
      d="m2.235 3.822 1.51 1.635L7.712.384a1 1 0 0 1 1.576 1.232l-4.693 6a1 1 0 0 1-1.522.062l-2.308-2.5a1 1 0 1 1 1.47-1.356Z"
    />
  </svg>
)
