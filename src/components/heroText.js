import React from "react";
import styled, { css } from "styled-components";
import Typist from "react-typist";

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
  }

  ${media.md`
  top: 20%;
  left: 15%;
  right: 15%;
`}
  ${media.xs`
  left: 3%;
  top: 8%;
  right: 3%;
`}
`;

const HoverText = styled.strong`
	:hover {
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
        <h1>Hello</h1>
        {/* <Typist.Backspace count={2} delay={800} /> */}
        I'm <HoverText>Enpu</HoverText>, a software developer and pianist.
        {/* <Typist.Delay ms={400} /> */}
        {/* <Typist.Delay ms={400} /> */}
        <br />
        Currently a senior at <a href="http://www.allegheny.edu/" target="_blank" rel="noopener noreferrer">Allegheny College</a>, double majoring in <HoverText>Computer Science</HoverText> and <HoverText>Music</HoverText>.
        <br />
        I build <a href="https://github.com/enpuyou" target="_blank" rel="noopener noreferrer">Python projects</a> and am learning more about <HoverText>web development</HoverText> and <HoverText>machine learning</HoverText>.
        <br />
        Currently working on a <a href="https://github.com/enpuyou/hearSound" target="_blank" rel="noopener noreferrer">sound project</a> that extracts musical information from human speech.
        <br />
        Check out my <a href="https://github.com/enpuyou/resume/blob/main/main.pdf" target="_blank" rel="noopener noreferrer">resume</a> and <a href = "mailto: youenpu@gmail.com">get in touch</a>!
        {/* <strong>I Make</strong> Softwares
        <Typist.Backspace count={10} delay={300} />
        <span> Music</span>
        <Typist.Backspace count={6} delay={300} />
        <span> Coffee</span>
        <Typist.Backspace count={7} delay={300} />
        <span> Poor Life Decisions</span>
        <Typist.Delay ms={100} />
        <span>.</span>
        <Typist.Delay ms={200} />
        <span>.</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Backspace count={29} delay={10} />
        <strong>But Mostly Just</strong> Cool Stuff */}
      </StyledText>
    );
  }
}

export default HeroText;
