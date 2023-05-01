export interface UserSelectProps {
  userSelect?:
    | 'auto'
    | 'none'
    | 'text'
    | 'contain'
    | 'all'
    | 'inherit'
    | 'initial'
    | 'unset'
}

export const userSelectProps = {
  userSelect: ({ userSelect }: UserSelectProps) =>
    userSelect ? { userSelect } : '',
}
