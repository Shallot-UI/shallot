export type StaticProps<SharedProps, ComponentStyles> = SharedProps & {
  styles?: ComponentStyles
}

export type StatefulProps<SharedProps, ComponentStyles, State> = SharedProps & {
  getStyles?: (state: State) => ComponentStyles
}
