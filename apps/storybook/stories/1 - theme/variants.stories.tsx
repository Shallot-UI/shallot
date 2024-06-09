import { StoryFn, Meta } from '@storybook/react'
import {
  Fold,
  H1,
  ShallotProvider,
  getColor,
  getFontSize,
} from '@repo/web'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '🎨 Theme / Variants',
} as Meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = () => {
  return (
    <ShallotProvider
      theme={{
        variants: {
          Text: {
            H1: {
              fontSize: getFontSize('xxl'),
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: getColor('Primary', 800),
            },
          },
        },

        fontSizes: {
          xxxl: 34,
          xxl: 24,
          xl: 20,
          lg: 14,
          md: 12,
          sm: 10,
          xs: 8,
          xxs: 6,
        },
        breakpoints: {
          960: {
            fontSizes: {
              xxxl: 54,
              xxl: 36,
              xl: 30,
              lg: 24,
              md: 20,
              sm: 16,
              xs: 12,
              xxs: 6,
            },
          },
          768: {
            fontSizes: {
              xxxl: 50,
              xxl: 32,
              xl: 28,
              lg: 22,
              md: 18,
              sm: 16,
              xs: 12,
              xxs: 6,
            },
          },
          640: {
            fontSizes: {
              xxxl: 46,
              xxl: 30,
              xl: 26,
              lg: 20,
              md: 16,
              sm: 14,
              xs: 12,
              xxs: 6,
            },
          },
          480: {
            fontSizes: {
              xxxl: 42,
              xxl: 28,
              xl: 24,
              lg: 18,
              md: 16,
              sm: 14,
              xs: 12,
              xxs: 6,
            },
          },
          320: {
            fontSizes: {
              xxxl: 36,
              xxl: 26,
              xl: 22,
              lg: 16,
              md: 14,
              sm: 12,
              xs: 10,
              xxs: 6,
            },
          },
        },
      }}
    >
      <Fold alignCenter alignMiddle>
        <H1>With Shallot</H1>
      </Fold>
    </ShallotProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
