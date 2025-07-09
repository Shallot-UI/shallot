# 🧅 Shallot UI

A React UI library for design-minded developers who need flexibility without the constraints.

> During years of cross-platform work in React & React Native, I never found a design system whose benefits were worth the limitations. Many systems seem promising until you leave the boundaries of the components they offer. Others have such an imposing groove that everything you build starts to look the same. I wanted something that would let me write concise markup, use a single cross-platform approach to styling, and always use the best component for the job. Shallot is my attempt to formalize these patterns.
>
> -- [Mitchell Butler](https://mitchellbutler.com)

## Why Shallot?

Traditional UI libraries often force you into their way of thinking. You either work within their constraints or fight against them with hacky workarounds. Shallot takes a different approach by recognizing that styling has layers (just like a shallot).

Instead of providing a rigid set of pre-styled components, Shallot gives you:

- **Flexible theming** that can be applied wholly or partially
- **Layered styling** that separates layout, common styles, and component-specific styles
- **Cross-platform consistency** between web and React Native
- **Type-safe styling** with full TypeScript support
- **No lock-in** - use as much or as little as you need

## Core Concepts

### 🎨 Themes

Themes in Shallot have three parts:

- **Tokens**: Shared values like colors and font sizes
- **Globals**: Symbolic names (like `backgroundColor`) that can change based on mode
- **Variants**: Pre-composed styles for common components

```tsx
const tokens = makeThemeTokens({
  colors: {
    Primary: { 500: '#0066cc', 600: '#0052a3' },
  },
})

const globals = makeThemeGlobals({
  backgroundColor: '#ffffff',
  foregroundColor: '#000000',
  'mode:dark': {
    backgroundColor: '#000000',
    foregroundColor: '#ffffff',
  },
})
```

### 🧅 Shallots (Layered Styles)

A "shallot" is a style object that can have layers for different component parts and states:

```tsx
const buttonShallot = {
  Container: {
    backgroundColor: getColor('Primary', 500),
    padding: getUnits(2)
  },
  Title: {
    color: 'white',
    fontSize: getFontSize('md')
  },
  ':hover': {
    Container: { backgroundColor: getColor('Primary', 600) }
  }
}

// Use it directly on a component
<Button shallot={buttonShallot} title="Click me" />
```

### 🔧 Mixins

Mixins connect your styles to the theme:

- `getColor('Primary', 500)` - Get color from palette
- `getUnits(2)` - Get spacing units
- `getFontSize('lg')` - Get font size
- `getGlobal('backgroundColor')` - Get global value

## Getting Started

### Installation

```bash
# For web projects:
npm install @shallot-ui/web

# For Next.js:
npm install @shallot-ui/next

# For React Native:
npm install @shallot-ui/native
```

### Basic Setup

```tsx
import { ShallotProvider, Column, Text, Button } from '@shallot-ui/web'

const App = () => (
  <ShallotProvider>
    <Column alignCenter unitGap={2}>
      <Text variant="H1">Welcome to Shallot</Text>
      <Text variant="Body">
        Build beautiful, flexible UIs without the constraints.
      </Text>
      <Button variant="Primary" title="Get Started" />
    </Column>
  </ShallotProvider>
)
```

### Custom Theme

```tsx
import {
  ShallotProvider,
  makeTheme,
  makeThemeTokens,
  makeThemeVariants
} from '@shallot-ui/web'

const customTheme = makeTheme({
  tokens: makeThemeTokens({
    fontFamilies: {
      Body: 'Inter, sans-serif',
      Heading: 'Poppins, sans-serif'
    }
  }),
  variants: makeThemeVariants({
    Text: {
      H1: {
        fontFamily: getFontFamily('Heading'),
        fontSize: getFontSize('xl')
      }
    }
  })
})

<ShallotProvider theme={customTheme}>
  {/* Your app */}
</ShallotProvider>
```

## Component Types

### Layout Components

`Row`, `Column`, `Box` - For structuring your page with props like:

- `unitGap`, `unitsAround` - Spacing using theme units
- `alignCenter`, `alignMiddle` - Alignment
- `fullWidth`, `wrap` - Layout behavior

### Text Components

`Text`, `H1`, `H2`, `P` - For typography with automatic theme integration

### Form Components

`Input`, `Checkbox`, `Switch`, `Button` - Styled form elements that work out of the box

### Creating Custom Components

```tsx
import { withShallot } from '@shallot-ui/web'

const Card = withShallot('div', {
  backgroundColor: getGlobal('surfaceColor'),
  borderRadius: getRadius('md'),
  padding: getUnits(3),
  boxShadow: getShadow('sm')
})

// Use it with overrides
<Card shallot={{ padding: getUnits(4) }}>
  Custom content
</Card>
```

## Monorepo Setup

In a monorepo, you can share themes across apps:

```tsx
// packages/theme/index.ts
export const sharedTheme = makeTheme({ ... })

// apps/web/App.tsx
import { sharedTheme } from '@repo/theme'
<ShallotProvider theme={sharedTheme}>
```

## Contributing

Shallot is open source (MIT licensed) and we welcome contributions! While I primarily maintain it for my own projects, I'm happy to review PRs that align with the library's philosophy of flexibility and simplicity.

## License

MIT © Mitchell Butler
