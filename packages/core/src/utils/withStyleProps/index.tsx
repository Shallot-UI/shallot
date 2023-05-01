import { FunctionComponent } from 'react'

export const withStyleProps =
  <StyleProps extends {}, Props extends {}, NativeProps extends {} = {}>(
    Component: FunctionComponent<Props & NativeProps>,
    transformer: (
      props: Props & StyleProps & NativeProps,
    ) => Props & NativeProps,
  ) =>
  (props: Props & StyleProps & NativeProps) =>
    <Component {...transformer(props)} />
