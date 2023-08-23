# 🧅 Shallot

Welcome to Shallot, an open-source React UI library for design-minded developers looking for a fast and consistent workflow on web & mobile. Drawing inspiration from industry-leading libraries like `material-ui`, `chakra`, and `tailwind`, Shallot understands the layers of component styling. With the power of `styled-components`, we offer a structured yet adaptable styling approach to fit every unique project's design landscape.

* Check out [our Storybook](https://shallotui.com)

## Getting Started

#### 1 — Installation

```bash
# for React Core:
yarn add @shallot-ui/web

# ... or for NextJS:
yarn add @shallot-ui/next

# ... or for React Native:
yarn add @shallot-ui/native
```

#### 2 — Theme Context

All Shallot UI components should be nested within a `<ShallotProvider />`. Under the hood, this is a `ThemeProvider` from `styled-components`, but it comes with our default theme and can be customized with theme options.

```tsx
# For example, on web:
import { ShallotProvider } from '@shallot-ui/web'

const App = () => (
  <ShallotProvider
    theme={{ fontSizes: { sm: 10, md: 12, lg: 14 } }}
  >
     {/* ... your application */}
  </ShallotProvider>
)
```

#### 3 — Components

```tsx
# For example, on web:
import { ShallotProvider, Fold, Text, Button } from '@shallot-ui/web'

const App = () => (
  <ShallotProvider>
    <Fold alignCenter alignMiddle>
      <Text variant="H1" unitsBelow={1}>👋 Welcome to Shallot</Text>
      <Button variant="Primary" title="Let's Go!" />
    </ShallotProvider>
)
```

## Why Shallot?

Where most UI libraries focus on styling components with one specific strategy, Shallot recognizes that there are different types of styling. Essentially, we have three types of styling:

### 1. Layout Styles

This styling discribes how components should be laid out on the page. It's helpful for this styling to be with the markup since these styles are often required to make sense of the markup. For that reason, we provide shared components that can be used to describe layout. For example, `Row`, `Column`, and `Text` components. Each of these can take any of our `BoxLayoutProps` to control layout (e.g., `fullWidth` or `alignBottom`).

### 2. Common Styles

This type of styling is used to describe styles that are shared across components. For example, a `Button` component might have a `primary` and `secondary` variant. These variants might share some styles, but have different colors. Variants for various text headings, buttons, checkboxes, switches, etc. are all examples of common styles and can be set in the theme's `variants` object.

### 3. Component Styles
This type of styling is used to describe styles that are unique to a specific component. For example, a project might require a `UserCard` component that has a specific layout and styling. This styling is done with `styled-components`, but we provide mixins like `getFontSize`, `getColor`, and `getUnits` to make it simple to use the theme's values.

**💡 You can refer to [our docs in Storybook](https://www.shallotui.com/) for more details.**

## License
Shallot UI is proudly open-source, licensed under the MIT License.

Empower your designs with Shallot UI. Together, we will redefine the landscape of intuitive and aesthetic user interfaces.
