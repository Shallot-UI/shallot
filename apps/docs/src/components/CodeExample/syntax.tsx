import { getColor, getFontFamily, getFontSize } from '@shallot-ui/next'
import styled from 'styled-components'

export const SyntaxStyles = styled.div`
  font-family: ${getFontFamily('Monospace')};
  font-size: ${getFontSize('sm')}px;

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${getColor('Shading', 800)};
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    color: ${getColor('Shading', 900)};
    background: ${getColor('Shading', 400)};
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${getColor('Yellow', 50)};
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: ${getColor('Yellow', 500)};
  }

  .token.delimiter,
  .token.boolean,
  .token.keyword,
  .token.selector,
  .token.important,
  .token.atrule {
    color: ${getColor('Red', 800)};
  }

  .token.operator,
  .token.punctuation,
  .token.attr-name {
    color: ${getColor('Shading', 600)};
  }

  .token.tag,
  .token.tag .punctuation,
  .token.doctype,
  .token.builtin {
    color: ${getColor('Yellow', 600)};
  }

  .token.entity,
  .token.number,
  .token.symbol {
    color: ${getColor('Red', 500)};
  }

  .token.property,
  .token.constant,
  .token.variable {
    color: ${getColor('Red', 700)};
  }

  .token.string,
  .token.char {
    color: ${getColor('Green', 700)};
  }

  .token.attr-value,
  .token.attr-value .punctuation {
    color: ${getColor('Gray', 900)};
  }

  .token.url {
    color: ${getColor('Green', 700)};
    text-decoration: underline;
  }

  .token.function {
    color: ${getColor('Yellow', 700)};
  }

  .token.regex {
    background: ${getColor('Green', 700)};
  }

  .token.bold {
    font-weight: 600;
  }

  .token.italic {
    font-style: italic;
  }

  .token.inserted {
    background: ${getColor('Green', 50)};
    color: ${getColor('Green', 700)};
  }

  .token.deleted {
    background: ${getColor('Red', 50)};
    color: ${getColor('Red', 700)};
  }
`
