import { FunctionComponent } from 'react'

export const withStyleProps =
  <StyleProps extends {}, Props extends {}>(
    Component: FunctionComponent<Props>,
    transformer: (props: Props & StyleProps) => Props,
  ) =>
  (props: Props & StyleProps) =>
    <Component {...transformer(props)} />
