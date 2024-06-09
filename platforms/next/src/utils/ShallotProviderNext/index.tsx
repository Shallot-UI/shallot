'use client'

// We re-export the web version of ShallotProvider from the web package
// using the 'use client' pragma to ensure that next will allow us to
// use the provider.

import { ShallotProvider } from '@repo/web'

export const ShallotProviderNext: typeof ShallotProvider = (props) => (
  <ShallotProvider {...props} />
)
