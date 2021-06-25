import React from "react";
import styled, { css } from "styled-components";
import Typist from "react-typist";
import TypistLoop from 'react-typist-loop'

import { media } from "../utils/style";

// const StyledTypist = styled(Typist)`
//   color: #fff;
//   letter-spacing: normal;
//   max-width: 100%;
//   font-size: 20px;
//   line-height: 30px;
//   font-weight: normal;
//   /* text-transform: uppercase; */
//   font-family: "Raleway";
//   position: absolute;
//   top: 30%;
//   left: 10%;
//   right: 50%;

//   a {
//     background:
//       linear-gradient(
//         to bottom, #ff9800 0%,
//         #ff9800 100%
//       );
//     background-position: 0 100%;
//     background-repeat: repeat-x;
//     background-size: 4px 4px;
//     color: #fff;
//     text-decoration: none;
//     transition: background-size .2s;
//   }

//   a:hover {
//     background-size: 4px 50px;
//   }

//   ${media.md`
//   left: 25%;
//   top: 20%;
// `}
//   ${media.xs`
//   left: 3%;
//   top: 15%;
//   letter-spacing: 12px;
// `}
// `;

const StyledTypist = styled(Typist)`
  font-size: 3rem;
  font-weight: bold;
  border: none;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
`;

const StyledText = styled.div`
  color: #fff;
  letter-spacing: 0.006em;
  max-width: 100%;
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: normal;
  /* text-transform: uppercase; */
  font-family: "Raleway";
  position: absolute;
  top: 23%;
  left: 10%;
  right: 55%;
  h1 {
    font-size: 3rem;
    border: none;
  }
  a {
    background:
      linear-gradient(
        to bottom, #98c1d9 0%,
        #98c1d9 100%
      );
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 3px 5px;
    color: #fff;
    text-decoration: none;
    transition: background-size .4s;
  }

  a:hover {
    background-size: 4px 50px;
    color: #22223b;
  }

  ${media.md`
  top: 20%;
  left: 15%;
  right: 15%;
`}
  ${media.xs`
  left: 3%;
  top: 15%;
  right: 3%;
`}
`;

const HoverText = styled.strong`
  &#name:hover span {
    display:none
  }

  &#name:hover:before {
    content:"恩溥";
    color: #cce3de;
    font-weight: bold;
  }

	&:hover {
		color: #ff6b35;
	}
`

class HeroText extends React.Component {
  render() {
    // if (this.props.text) {
    //   return (
    //     <Typist>
    //       <StyledTypist {...this.props}>
    //         <strong>
    //           {this.props.text.split(" ").slice(0, 1)}
    //           <br />
    //         </strong>
    //         {this.props.text
    //           .split(" ")
    //           .slice(1)
    //           .join(" ")}
    //       </StyledTypist>
    //     </Typist>
    //   );
    // }

    return (
      <StyledText>
        <TypistLoop interval={400}>
          {[
            'Hello!',
            '你好 👋',
          ].map(text =>
          <StyledTypist key={text} delay={1000}>
            {text}
            <Typist.Backspace count={text.length} delay={1000} />
          </StyledTypist>)}
        </TypistLoop>
        I'm <HoverText id="name"><span>Enpu</span></HoverText>, a <HoverText>software developer</HoverText> and <HoverText>pianist</HoverText>.
        <br />
        A recent graduate from <a href="http://www.allegheny.edu/" target="_blank" rel="noopener noreferrer">Allegheny College</a> double majoring in <HoverText>Computer Science</HoverText> and <HoverText>Music</HoverText>, I'm currently working at <a href="https://sciencelogic.com" target="_blank" rel="noopener noreferrer">ScienceLogic</a> as a software engineer Intern
        <br />
        I build <a href="https://github.com/enpuyou" target="_blank" rel="noopener noreferrer">Python projects</a> and am learning more about <HoverText>front-end web development</HoverText> and <HoverText>machine learning</HoverText>.
        <br />
        Recent projects include a <a href="https://github.com/enpuyou/hearSound" target="_blank" rel="noopener noreferrer">sound project</a> that transcribes <HoverText>human speech</HoverText> into <HoverText>musical composition</HoverText>.
        <br />
        Check out my <a href="https://github.com/enpuyou/resume/blob/main/main.pdf" target="_blank" rel="noopener noreferrer">resume</a> and <a href = "mailto: youenpu@gmail.com">get in touch</a>!
      </StyledText>
    );
  }
}

export default HeroText;
