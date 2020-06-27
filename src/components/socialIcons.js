import React from 'react'
import styled, { css } from 'styled-components'
import FontAwesome from 'react-fontawesome'

const Icon = ({ name, href }) => (
  <a href={href}>
    <FontAwesome name={name} />
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
  }
  & a:hover span.fa-linkedin {
    color: #0e76a8;
  }
  & a:hover span.fa-github-alt {
    color: #34d058;
  }
  & a:hover span.fa-youtube {
    color: #c4302b;
  }
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
