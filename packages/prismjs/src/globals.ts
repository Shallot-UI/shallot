import { createGlobalStyle } from 'styled-components'

export const PrismJSGlobalStyle = createGlobalStyle`
  code[class*="language-"],
  pre[class*="language-"] {
    color: #d6deeb;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    font-size: 1em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: rgba(29, 59, 83, 0.99);
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: rgba(29, 59, 83, 0.99);
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 0;
    margin: 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    color: ${({ theme }) => theme.colors['Shading.350']};
    background: ${({ theme }) => theme.colors['Shading.150']};
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: ${({ theme }) => theme.colors['Shading.300']};
    font-style: italic;
  }

  .token.punctuation {
    color: ${({ theme }) => theme.colors['Warning.300']};
  }

  .namespace {
    color: rgb(178, 204, 214);
  }

  .token.deleted {
    color: rgba(239, 83, 80, 0.56);
    font-style: italic;
  }

  .token.symbol,
  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: ${({ theme }) => theme.colors['Shading.275']};
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.constant,
  .token.function,
  .token.builtin,
  .token.char {
    color: ${({ theme }) => theme.colors['Primary.325']};
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: italic;
  }

  .token.attr-name,
  .token.inserted {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.string,
  .token.url,
  .token.entity,
  .language-css .token.string,
  .style .token.string {
    color: ${({ theme }) => theme.colors['Success.300']};
  }

  .token.class-name,
  .token.atrule,
  .token.attr-value {
    color: rgb(255, 203, 139);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: ${({ theme }) => theme.colors['Primary.300']};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

`
