import { FunctionComponent } from 'react'

export const withStyleProps =
  <
    Props extends { getStyles: (state?: State) => Styles },
    State extends {},
    Styles extends {},
    StyleProps extends {},
  >(
    Component: FunctionComponent<Props>,
    getStyles: (state: State, props: StyleProps) => Styles,
    splitProps: (
      props: Omit<Props, 'getStyles'> & StyleProps,
    ) => [Omit<Props, 'getStyles'>, StyleProps],
  ) =>
  (props: Omit<Props, 'getStyles'> & StyleProps) => {
    const [componentProps, styleProps] = splitProps(props)
    return (
      <Component
        // This is to silence a TS error that's common with inferrence on higher
        // order components. We should be careful to preserve the convention of
        // `getStyles` following the type:
        //   `(state: State, props: StyleProps) => Styles`
        {...(componentProps as Props)}
        getStyles={(state: State) => getStyles(state, styleProps)}
      />
    )
  }
