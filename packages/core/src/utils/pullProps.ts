type PullAction<T, P> = (props: T) => [T, Omit<T, keyof P>]

export const pullProps = <T, P>(
  props: T,
  actions: PullAction<any, Partial<P>>[],
): [P, Omit<T, keyof P>] => {
  let allPulledProps: Partial<P> = {}
  let allRemainingProps: any = { ...props }

  actions.forEach((pullAction) => {
    const [pulledProps, otherProps] = pullAction(allRemainingProps)
    allPulledProps = { ...allPulledProps, ...pulledProps }
    allRemainingProps = otherProps
  })

  return [allPulledProps as P, allRemainingProps as Omit<T, keyof P>]
}
