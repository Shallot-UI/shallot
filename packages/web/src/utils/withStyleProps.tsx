import { FunctionComponent } from 'react'

export const withStyleProps =
  <StyleProps extends {}, Props extends {}>(
    Component: FunctionComponent<Props>,
    transformer: (props: Omit<Props, 'getStyles'> & StyleProps) => Props,
  ) =>
  (props: Omit<Props, 'getStyles'> & StyleProps) =>
    <Component {...transformer(props)} />
