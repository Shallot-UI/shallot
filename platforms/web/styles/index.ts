import { DefaultTheme, createGlobalStyle } from 'styled-components'
import { AllColorShades, ColorName } from '@shallot-ui/theme'

interface GlobalStyleProps {
  backgroundColor?: AllColorShades
  textColor?: AllColorShades
}

const getColorShade = (colorShade: AllColorShades, theme: DefaultTheme) => {
  const [color, shade] = colorShade.split('.')
  const colorName = color as ColorName
  const colorShadeNumber = Number(
    shade,
  ) as keyof DefaultTheme['colors'][ColorName]
  return theme.colors[colorName][colorShadeNumber]
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em,
  img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i,
  center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption,
  tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section,
  summary, time, mark, audio, svg, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu,
  nav, section {
    display: block;
  }
  body { line-height: 1; }
  ol, ul { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  * { box-sizing: border-box; }

  body {
    color: ${({ theme, textColor }) =>
      getColorShade(textColor ?? 'Shading.900', theme)};
    background-color: ${({ theme, backgroundColor }) =>
      getColorShade(backgroundColor ?? 'Shading.50', theme)};
  }

  // SYSTEM FONT
  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 400;
    src: local(".SFNS-Regular"), local(".SFNSText-Regular"), local(".HelveticaNeueDeskInterface-Regular"), local(".LucidaGrandeUI"), local("Segoe UI"), local("Ubuntu"), local("Roboto-Regular"), local("DroidSans"), local("Tahoma");
  }
  @font-face {
    font-family: system-ui;
    font-style: italic;
    font-weight: 400;
    src: local(".SFNS-Italic"), local(".SFNSText-Italic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Italic"), local("Ubuntu Italic"), local("Roboto-Italic"), local("DroidSans"), local("Tahoma");
  }
  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 700;
    src: local(".SFNS-Bold"), local(".SFNSText-Bold"), local(".HelveticaNeueDeskInterface-Bold"), local(".LucidaGrandeUI"), local("Segoe UI Bold"), local("Ubuntu Bold"), local("Roboto-Bold"), local("DroidSans-Bold"), local("Tahoma Bold");
  }
`
