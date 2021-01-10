import React from 'react'
import styled, { css } from 'styled-components'

const Base = styled.a`
  font-size: 1.5em;
  font-family: 'Rubik';
  font-weight: normal;
  color: #fff;
  margin: 20px 0;
  width: fit-content;
  white-space: nowrap;

  &:hover {
    /* cursor: pointer; */
    text-decoration: none;
    /* -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: url(https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif); */
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
        ENPU YOU
      </Base>
    )
  }
}

export default Name
