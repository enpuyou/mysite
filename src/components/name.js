import React from 'react'
import styled, { css } from 'styled-components'

const Base = styled.a`
  font-size: 1.5em;
  font-family: 'Rubik';
  font-weight: normal;
  color: #fff;
  margin: 1.25rem 0;
  width: fit-content;
  white-space: nowrap;

  &:hover {
    /* cursor: pointer; */
    text-decoration: none;
    color: #cce3de;
    /* -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: url(https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif); */
  }

  &:hover span {display:none}
  &:hover:before {
    content:"尤｜恩溥";
    font-size: 1.7rem;
    font-weight: bold;
    letter-spacing: normal;
  }

  ${props =>
    props.dark &&
    css`
      color: #444;
    `}

  ${props =>
    props.block &&
    css`
      display: block;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 1em;
    `}

  ${props =>
    props.big &&
    css`
      font-size: 2em;
    `}
`

class Name extends React.Component {
  render() {
    return (
      <Base {...this.props} href="/">
        <span>ENPU YOU</span>
      </Base>
    )
  }
}

export default Name
