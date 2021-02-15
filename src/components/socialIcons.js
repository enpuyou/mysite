import React from 'react'
import styled, { css } from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Icon = ({ name, href }) => (
  <a href={href}>
    <FontAwesome name={name} size="1x"/>
  </a>
)

const Base = styled.div`
  margin: 20px 0;
  text-align: center;
  & a {
    display: inline-block;
    margin 5px;
    color: #fff;
  }
  & a span {
    transition: color .2s ease-in;
  }
  & a:hover {
    text-decoration: none;
    color: #006d77;
  }
  /* & a:hover span.fa-linkedin {
    color: #006d77;
  }
  & a:hover span.fa-github-alt {
    color: #006d77;
  }
  & a:hover span.fa-youtube {
    color: #006d77;
  } */
`

class SocialIcons extends React.Component {
  render() {
    const icons = this.props.icons.map(function(icon) {
      return <Icon key={icon.name} name={icon.name} href={icon.href} />
    })
    return <Base {...this.props}>{icons}</Base>
  }
}

export default SocialIcons
