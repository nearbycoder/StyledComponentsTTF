import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Deck,
  Slide,
  H1,
  H2,
  H3,
  H4,
  H5,
  Center,
  Button,
  TomatoButton,
  AlertButton,
  Rotate,
  Card,
  StyledCard,
  Link,
  ThemedButton,
  Image,
  Input,
  theme as th
} from '../components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/styles/monokai-sublime';
/*eslint-disable no-template-curly-in-string */
class Home extends Component {
  render() {
    return (
      <Deck navigation={false} routing={true} slideCount={true} color="#1D1F27">
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="rgb(219, 112, 147)">Slides at</H1>
            <H3 color="#DA9962">styled.nearbycoder.com</H3>
            <H5 color="rgb(219, 112, 147)">
              https://github.com/nearbycoder/StyledComponentsTTF
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="rgb(219, 112, 147)">Styled Components</H1>
            <H3 color="#DA9962">The Future of Styling Web Apps</H3>
            <H5 color="rgb(219, 112, 147)" right p="10px">
              <Image src="./nearbycoder.jpg" />by Josh Hamilton
            </H5>
          </Center>
        </Slide>
        <Slide
          transition="cross-fade"
          bgColor="#2B2B2B"
          bgImage="./mbm.svg"
          p="30px"
        />
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="rgb(219, 112, 147)">History of styling</H1>
            <H1 color="#DA9962">on the web</H1>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              First Draft of Cascading HTML Style Sheets
            </H3>
            <H4 color="rgb(219, 112, 147)">October 1994 by Hakon Wium Lie</H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              In total nine different style sheet proposals were submitted
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              It took 3 years until any browser would come close to fully implementing CSS
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              The first browser was Microsoft Internet Explorer
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Soon after Netscape followed suit
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              CSS 1's Recommendation was made in December 1996 and supported
            </H4>
            <H5 color="#DA9962">
              font properties, text attributes, alignment of text, tables, images and more, colors of text and backgrounds, spacing of words, letters and lines, margins, borders, padding and positioning, and unique identification and classification of groups of attributes
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              CSS 2 was released on May of 1998
            </H4>
            <H5 color="#DA9962">
              added new capabilities including z-index, media types, bidirectional text, absolute, relative and fixed positioning, and support for aural style sheets
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              It wasn’t until June 2011 that W3C released CSS 2.1
            </H4>
            <H5 color="rgb(219, 112, 147)">
              fixed errors and aligned the capabilities better with browser functions
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              CSS3 was broken up into modules and delivered between June 2011 and June 2012
            </H4>
            <H5 color="#DA9962">
              color (RGBA and Opacity), selectors level 3(pseudo-elements :: convention), namespaces and media queries
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              We are still slowly getting new features to the CSS spec such as
            </H4>
            <H5 color="#DA9962">
              @supports, grid layout, and native variables
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              This is all to say that native CSS has been a slow rollout process
            </H4>
            <H5 color="#DA9962">
              Browser Support is still a battlefield
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              Alternatives to base CSS
            </H3>
            <H5 color="rgb(219, 112, 147)">
              meaning preprocessors
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              Sass
            </H3>
            <H3 color="rgb(219, 112, 147)">
              Less
            </H3>
            <H3 color="#DA9962">
              Stylus
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              What is a preprocessor
            </H3>
            <H5 color="rgb(219, 112, 147)">
              A preprocessor is a program that takes one type of data and converts it to another type of data
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              SCSS Nesting
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {`
$link-color: #999;
$link-hover: #229ed3;

ul {
    margin: 0;

    li {
        float: left;
    }

    a {
        color: $link-color;

        &:hover {
            color: $link-hover;
        }
    }
}
              `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              CSS Nesting Not Avaliable
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {`
ul { margin: 0; }
ul li { float: left; }
ul a { color: #999; }
ul a:hover { color: #229ed3; }
              `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              SCSS Mixins
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {`
@mixin bordered($width) {
    border: $width solid #ddd;

    &:hover {
        border-color: #999;
    }
}

h1 {
    @include bordered(5px);
}
              `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              CSS Mixins Not Avaliable
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {`
h1 { border: 5px solid #ddd; }
h1:hover { border-color: #999; }
              `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              SCSS Extends
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {`
.block { margin: 10px 5px; }

p {
  @extend .block;
  border: 1px solid #eee;
}

ul, ol {
  @extend .block;
  color: #333;
  text-transform: uppercase;
}
              `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              CSS Extends Not Avaliable
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {`
.block, p, ul, ol { margin: 10px 5px; }

p { border: 1px solid #eee; }
ul, ol { color: #333; text-transform: uppercase; }
              `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              Other features include
            </H3>
            <H5 color="rgb(219, 112, 147)">
              color operations, if/else statements, loops, math, and imports
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="#DA9962">
              Pretty Amaxing Right?
            </H1>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="rgb(219, 112, 147)">
              Con's to using a Preprocessor
            </H2>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)" left>
              - Compilation Step Needed
            </H4>
            <H4 color="#DA9962" left>
              - Still stuck in Cascade hell
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Debugging can be harder
            </H4>
            <H4 color="#DA9962" left>
              - Maintainence and overengineering
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Enter Styled Components
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              What is Styled Components
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              Mouthful of Marketing Words
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              Using React, React-Native or Vue it's a way to style components in your application.
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Pro's of Styled Components
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)" left>
              - Component styling doesn't cascade
            </H4>
            <H4 color="#DA9962" left>
              - Can use all valid CSS
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Your styles reside in your JS files
            </H4>
            <H4 color="#DA9962" left>
              - Dynamic style changes are made easy
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Cons's of Styled Components
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)" left>
              - Designers have to jump into code
            </H4>
            <H4 color="#DA9962" left>
              - Currently limited to three front-end frameworks
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Your styles reside in your JS files
            </H4>
            <H4 color="#DA9962" left>
              - It's a new way of thinking about styles
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="rgb(219, 112, 147)">
              Let's Jump in
            </H2>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              Base Styled Component
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const Button = styled.button`\n\
  color: #FFFFFF;\n\
  margin: 0 5px;\n\
  background: #008DF2;\n\
  font-size: 40px;\n\
  border: 1px solid #0172C3;\n\
  &:hover {\n\
    background-color: #007ed9;\n\
  }\n\
`;\n\
'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`<Button>I am a Button</Button>`}
            </SyntaxHighlighter>

            <Button>I am a Button</Button>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              Props
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const Button = styled.button`\n\
  ...\n\
  ${props => props.peach && `\n\
    background-color: #DA9962;\n\
  `}\n\
  &:hover {\n\
    ...\n\
    ${props => props.peach && `\n\
      background-color: #DA9962;\n\
    `}\n\
  }\n\
`;\n\
'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`
<Button>I am a Button</Button>
<Button peach>I am a Button</Button>`}
            </SyntaxHighlighter>
            <Button>I am a Button</Button>
            <Button peach>I am a Button</Button>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Let's Break down the magic behind Styled Components
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="#DA9962">
              Tagged Template Literals
            </H2>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter language="javascript" style={theme}>
              {
                '\
const logArgs = (...args) => console.log(...args)\n\
\n\
logArgs("a", "b") // a b\n\
\n\
logArgs`` // [""]\n\
\n\
logArgs`I like pizza` // ["I like pizza"]\n\
              '
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter language="javascript" style={theme}>
              {
                '\
const favoriteFood = "pizza"\n\
\n\
logArgs`I like ${favoriteFood}.`\n\
\n\
// -> ["I like ", "."] "pizza"\n\
              '
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              Tagged Template Literals split up your string on interpolation and pass back the values.
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              This allows for Styled Components to inject the props for you to use inside of the template literals
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="rgb(219, 112, 147)">
              Whats the DOM look like?
            </H2>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgImage="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter language="html" style={theme}>
              {`
<div class="sc-iwsKbI klAUZf">
  <h2 class="sc-bZQynM lficzj">
    Whats the DOM look like?
  </h2>
</div>`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Nested Selector
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const Button = styled.button`\n\
  ...\n\
  span {\n\
    color: yellow;\n\
  }\n\
`;\n\
'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`<Button>I am a <span>Button</span></Button>`}
            </SyntaxHighlighter>

            <Button>I am a <span>Button</span></Button>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Pass Prop Values
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const Button = styled.button`\n\
  ...\n\
  ${props => props.p && `\n\
    padding: ${props.p};\n\
  `}\n\
  ${props => props.color && `\n\
    color: ${props.color};\n\
  `}\n\
`;\n\
'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`<Button p="20px" color="yellow">I am a Button</Button>`}
            </SyntaxHighlighter>

            <Button p="20px" color="yellow">I am a Button</Button>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Extend
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const Button = styled.button`\n\
  ...\n\
`;\n\
const TomatoButton = Button.extend`\n\
  color: tomato;\n\
  border-color: tomato;\n\
`;\n\
'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`
<Button>I am a Button</Button>
<TomatoButton>I am a TomatoButton</TomatoButton>`}
            </SyntaxHighlighter>

            <Button>I am a Button</Button>
            <TomatoButton>I am a TomatoButton</TomatoButton>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Mixin
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const borderRaidus = (radius) => {\n\
  return `border-radius: ${radius}px;`\n\
}\n\
\n\
const AlertButton = styled.button`\n\
  color: #FFFFFF;\n\
  font-size: 40px;\n\
  background-color: tomato;\n\
  border-color: tomato;\n\
  ${borderRaidus(5)};\n\
`;\n\
'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`
<AlertButton>I am a Button</AlertButton>`}
            </SyntaxHighlighter>

            <AlertButton>I am a AlertButton</AlertButton>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              Animated
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const rotate360 = keyframes`\n\
  from {\n\
    transform: rotate(0deg);\n\
  }\n\
  to {\n\
    transform: rotate(360deg);\n\
  }\n\
`;\n\
const Rotate = styled.div`\n\
  display: inline-block;\n\
  animation: ${rotate360} 2s linear infinite;\n\
  padding: 2rem 1rem;\n\
  font-size: 1.2rem;\n\
`;\n\
'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`
<Rotate><AlertButton>I am a Button</AlertButton></Rotate>`}
            </SyntaxHighlighter>

            <Rotate><AlertButton>I am a AlertButton</AlertButton></Rotate>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              Custom Component
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
export const Card = ({className, children}) => {\n\
  return <BaseCard className={className}>{children}</BaseCard>;\n\
};\n\
export const BaseCard = styled.div`\n\
  color: white;\n\
  background-color: #DA9962;\n\
  width: 200px;\n\
  margin: 0 auto;\n\
  padding: 20px;\n\
`;\n\
export const StyledCard = styled(Card)`\n\
  color: white;\n\
  background-color: rgb(249, 38, 114);\n\
`;\n\
\n\
'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`
<Card>Base Card Component</Card>
<StyledCard>Styled Card Component</StyledCard>`}
            </SyntaxHighlighter>

            <Card>Card Component</Card>
            <StyledCard>Styled Card Component</StyledCard>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Swap Base Element
            </H4>
            <SyntaxHighlighter language="javascript" style={theme}>
              {
                '\
const Button = styled.button`\n\
  ...\n\
`;\n\
const Link = Button.withComponent("a");\n\
<Link>Link</Link>'
              }
            </SyntaxHighlighter>
            <Link p="10px">Link</Link>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              Media Queries
            </H4>
            <SyntaxHighlighter language="javascript" style={theme}>
              {
                '\
const sizes = {\n\
  giant: 1170,\n\
  desktop: 992,\n\
  tablet: 768,\n\
  phone: 376\n\
}\n\
export const media = Object.keys(sizes).reduce((accumulator, label) => {\n\
  const emSize = sizes[label] / 16\n\
  accumulator[label] = (...args) => css`\n\
    @media (max-width: ${emSize}em) {\n\
      ${css(...args)}\n\
    }\n\
  `\n\
  return accumulator\n\
}, {})\n\
\n\
const Container = styled.div`\n\
  color: #333;\n\
  ${media.desktop`padding: 0 20px;`}\n\
  ${media.tablet`padding: 0 10px;`}\n\
  ${media.phone`padding: 0 5px;`}\n\
`\n\
'
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962">
              Theming
            </H4>
            <SyntaxHighlighter language="javascript" style={theme}>
              {
                '\
const Button = styled.button`\n\
  ...\n\
  color: ${props => props.theme.main};\n\
  border: 2px solid ${props => props.theme.main};\n\
`;\n\
Button.defaultProps = {\n\
  theme: {\n\
    main: "palevioletred"\n\
  }\n\
}\n\
const theme = {\n\
  main: "mediumseagreen"\n\
};\n\
render(\n\
  <div>\n\
    <Button>Normal</Button>\n\
    <ThemeProvider theme={theme}>\n\
      <Button>Themed</Button>\n\
    </ThemeProvider>\n\
  </div>\n\
);\n\
'
              }
            </SyntaxHighlighter>
            <ThemedButton>Normal</ThemedButton>
            <ThemeProvider theme={th}>
              <ThemedButton>Themed</ThemedButton>
            </ThemeProvider>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Static // Dynamic Props
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const Input = styled.input.attrs({\n\
  type: "text",\n\
  padding: props => props.size || "1em"\n\
})`\n\
  color: palevioletred;\n\
  font-size: 1em;\n\
  border: 2px solid palevioletred;\n\
  border-radius: 3px;\n\
  padding: ${props => props.padding};\n\
`;'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language="html" style={theme}>
              {`
<Input placeholder="A small text input" size="2em" /> `}
            </SyntaxHighlighter>

            <Input placeholder="A small text input" size="1em 2em" />
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              React Native
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
import styled from "styled-components/native";\n\
const StyledView = styled.View`\n\
  background-color: papayawhip;\n\
`;\n\
const StyledText = styled.Text`\n\
  color: palevioletred;\n\
`;\n\
class MyReactNativeComponent extends React.Component {\n\
  render() {\n\
    return (\n\
      <StyledView>\n\
        <StyledText>Hello World!</StyledText>\n\
      </StyledView>\n\
    )\n\
  }\n\
}'
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Security
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
// Oh no! The user has given us a bad URL!\n\
const userInput = "/api/withdraw-funds";\n\
\n\
const ArbitraryComponent = styled.div`\n\
  background: url(${userInput});\n\
  /* More styles here... */\n\
`;'
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Passing Refs
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
const Input = styled.input`\n\
  padding: 0.5em;\n\
  margin: 0.5em;\n\
  color: palevioletred;\n\
  background: papayawhip;\n\
  border: none;\n\
  border-radius: 3px;\n\
`;\n\
\n\
const Form = () => (\n\
  <Input\n\
    placeholder="Hover here..."\n\
    innerRef={x => this.input = x}\n\
    onMouseEnter={() => this.input.focus()}\n\
  />\n\
);'
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <H4 color="#DA9962">
              Existing CSS
            </H4>
            <SyntaxHighlighter
              language="scss"
              style={theme}
              showLineNumbers={true}>
              {
                '\
class MyComponent extends React.Component {\n\
  render() {\n\
    // Attach the passed-in className to the DOM node\n\
    return <div className={`some-global-class ${this.props.className}`} />;\n\
  }\n\
}'
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="#DA9962">
              Questions?
            </H2>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)">
              Even this slide deck was built with Styled Components
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter language="javascript" style={theme}>
              {
                '\
<Slide transition="cross-fade" bgColor="#1D1F27">\n\
  <Center>\n\
    <H3 color="rgb(219, 112, 147)">\n\
      Example Slide\n\
    </H3>\n\
  </Center>\n\
</Slide>\n\
              '
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter language="scss" style={theme}>
              {
                '\
const Slide = styled.div`\n\
  ${props => props.bgColor && `\n\
    background-color: ${props.bgColor};\n\
  `}\n\
  ${props => props.bgImage && `\n\
    background: url("${props.bgImage}") no-repeat center center fixed;\n\
    background-size: contain;\n\
  `}\n\
  width: 100vw;\n\
  height: 100vh;\n\
  display: flex;\n\
  align-items: center;\n\
  justify-content: center;\n\
  flex-wrap: wrap;\n\
`;\n\
              '
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <SyntaxHighlighter language="scss" style={theme}>
              {
                '\
const base = css`\n\
  ${props => props.color && `\n\
    color: ${props.color};\n\
  `}\n\
  ${props => props.left && `\n\
    text-align: left;\n\
  `}\n\
  ${props => props.right && `\n\
    text-align: right;\n\
  `}\n\
  ${props => props.p && `\n\
    padding: ${props.p}\n\
  `}\n\
  ${props => props.m && `\n\
    margin: ${props.m}\n\
  `}\n\
  margin: 0;\n\
`;\n\
const Center = styled.div`\n\
  text-align: center;\n\
  margin: 0 auto;\n\
`;\n\
const H3 = styled.h3`\n\
  ${base}\n\
  font-size: 6vw;\n\
`;\n\
              '
              }
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="#DA9962">
              Takaways
            </H2>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)" p="0 20px">
              Styled components is an excellent way to keep your components modularized and easily reusable
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="#DA9962" p="0 20px">
              No more changing focus and getting lost inside of tons and tons of Sass, Less, or Stylus files.
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)" p="0 20px">
              Makes updating the state of your applications styles just as easy as changing the state of the application
            </H4>
          </Center>
        </Slide>
        <Slide
          transition="cross-fade"
          bgColor="#1D1F27"
          bgImage="https://media.giphy.com/media/lD76yTC5zxZPG/giphy.gif"
        />
      </Deck>
    );
  }
}

export default Home;
