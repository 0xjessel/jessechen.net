import { css, Global } from '@emotion/react';
import { useColorMode } from '@chakra-ui/react'

// Base16 Atelier Sulphurpool Light
const prismLightTheme = css`
code[class*="language-"],
pre[class*="language-"] {
	font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
	font-size: var(--chakra-fontSizes-sm);
	line-height: 1.375;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
	background: #f5f7ff;
	color: #5e6687;
}

pre > code[class*="language-"] {
	font-size: var(--chakra-fontSizes-sm);
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #dfe2f1;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #dfe2f1;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #898ea4;
}

.token.punctuation {
	color: #5e6687;
}

.token.namespace {
	opacity: .7;
}

.token.operator,
.token.boolean,
.token.number {
	color: #c76b29;
}

.token.property {
	color: #c08b30;
}

.token.tag {
	color: #3d8fd1;
}

.token.string {
	color: #22a2c9;
}

.token.selector {
	color: #6679cc;
}

.token.attr-name {
	color: #c76b29;
}

.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #22a2c9;
}

.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit {
	color: #ac9739;
}

.token.statement,
.token.regex,
.token.atrule {
	color: #22a2c9;
}

.token.placeholder,
.token.variable {
	color: #3d8fd1;
}

.token.deleted {
	text-decoration: line-through;
}

.token.inserted {
	border-bottom: 1px dotted #202746;
	text-decoration: none;
}

.token.italic {
	font-style: italic;
}

.token.important,
.token.bold {
	font-weight: bold;
}

.token.important {
	color: #c94922;
}

.token.entity {
	cursor: help;
}

pre > code.highlight {
	outline: 0.4em solid #c94922;
	outline-offset: .4em;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers .line-numbers-rows {
	border-right-color: #dfe2f1;
}

.line-numbers-rows > span:before {
	color: #979db4;
}

/* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
.line-highlight {
	background: rgba(107, 115, 148, 0.2);
	background: -webkit-linear-gradient(left, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
	background: linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
}
`

// Atom One Dark
const prismDarkTheme = css`
code[class*="language-"],
pre[class*="language-"] {
  color: #ABB2BF;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: var(--chakra-fontSizes-sm);
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #383e49;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
  text-shadow: none;
  background: #9aa2b1;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}
/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #282c34;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #5C6370;
}

.token.punctuation {
  color: #abb2bf;
}

.token.selector,
.token.tag {
  color: #e06c75;
}

.token.property,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.attr-name,
.token.deleted {
  color: #d19a66;
}

.token.string,
.token.char,
.token.attr-value,
.token.builtin,
.token.inserted {
  color: #98c379;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #56b6c2;
}

.token.atrule,
.token.keyword {
  color: #c678dd;
}

.token.function {
  color: #61afef;
}

.token.regex,
.token.important,
.token.variable {
  color: #c678dd;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

pre.line-numbers {
	position: relative;
	padding-left: 3.8em;
	counter-reset: linenumber;
}

pre.line-numbers > code {
	position: relative;
}

.line-numbers .line-numbers-rows {
	position: absolute;
	pointer-events: none;
	top: 0;
	font-size: 100%;
	left: -3.8em;
	width: 3em; /* works for line-numbers below 1000 lines */
	letter-spacing: -1px;
	border-right: 0;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

}

.line-numbers-rows > span {
	pointer-events: none;
	display: block;
	counter-increment: linenumber;
}

.line-numbers-rows > span:before {
	content: counter(linenumber);
	color: #5C6370;
	display: block;
	padding-right: 0.8em;
	text-align: right;
}
`

export const PrismGlobal = () => {
  const { colorMode } = useColorMode()
  return (
    <Global styles={colorMode === 'light' ? prismLightTheme : prismDarkTheme} />
  )
}