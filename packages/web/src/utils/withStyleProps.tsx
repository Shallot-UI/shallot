import { FunctionComponent } from 'react'

export const withStyleProps =
  <StyleProps extends {}, Props extends {}, HtmlProps extends {} = {}>(
    Component: FunctionComponent<Props & HtmlProps>,
    transformer: (props: Props & StyleProps & HtmlProps) => Props & HtmlProps,
  ) =>
  (props: Props & StyleProps & HtmlProps) =>
    <Component {...transformer(props)} />
