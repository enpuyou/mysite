import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import FlickrHero from 'react-flickr-hero'
import { Document } from 'react-pdf'
import resumePDF from '../../static/resume.pdf'

import { media } from '../utils/style'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'
import Showcase from '../components/showcase'

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      /* div {
        border-bottom: 1px solid #333 !important;
      } */
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`

export default props => {
  const content = (
    <Content>
      <FlickrHero
        api_key="42e9a5830cdc4ce953c13fb89063fcd8"
        user_id="185367030@N02"
        album_id="72157711662983962"
        fillPage
      />
      <HeroText />
      <SocialIcons
        style={{
          position: 'absolute',
          margin: '0 auto',
          left: 0,
          right: 0,
          bottom: 16,
        }}
        icons={[
          {
            name: 'github-alt',
            href: 'https://github.com/enpuyou',
          },
          {
            name: 'linkedin',
            href: 'https://linkedin.com/in/enpuyou',
          },
          {
            name: 'fab fa-youtube',
            href: 'https://www.youtube.com/channel/UC1jivHCNYHYxwruBZgnMtrw',
          },
        ]}
      />
      {/* <a id="about-me">About Me</a>
      <Section>
        <Title>About Me</Title>

        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>
            My name is
            <a href={resumePDF} view> Enpu</a>. I am a software developer and pianist,
            thinking about the interaction of music and humanity
            in the digital world, currently researching natural
            language processing and electro-acoustic music.
            </p>
          </Box>
        </Flex>
      </Section>
      <Title small>Portfolio</Title>
      <a id="portfolio">Portfolio</a>
      <Portfolio items={props.data.allMarkdownRemark.edges} />
      <a id="experience">Experience</a>
      <Section center dark>
        <h4>Experience</h4>

        <Item>
          <span>AUG 2019 - PRESENT</span>
          <h6>Allegheny Mozilla Fellow</h6>
          <p>Allegheny College</p>
        </Item>
        <Item>
          <span>AUG 2019 - PRESENT</span>
          <h6>Technical Lead</h6>
          <p>Allegheny College Computer Science Department</p>
        </Item>
        <Item>
          <span>MAY 2019 - PRESENT</span>
          <h6>Founder/President</h6>
          <p>Electronic Music at Allegheny College (EMAC)</p>
        </Item>
      </Section>
      <a id="tech">Tech</a>
      <Section center>
        <h4>Tech</h4>
        <span>Technologies I enjoy working with.</span>
        <Showcase
          images={
            props.data.allImageSharp ? props.data.allImageSharp.edges : []
          }
        />
      </Section>
      <a id="education">Education</a>
      <Section dark center>
        <h4>EDUCATION</h4>
        <Item>
          <span>2017 - 2021</span>
          <h6>Bachelor of Science</h6>
          <p>Allegheny College, Computer Science and Music Double Major</p>
        </Item>
      </Section>
      <a id="honorsAndAwards">Honors & Awards</a>
      <Section center>
        <h4>HONORS & AWARDS</h4>
        <Item>
          <span>May 2020</span>
          <h6>Outstanding Junior Major Prize</h6>
          <p>Allegheny College Department of Computer Science</p>
        </Item>
        <Item>
          <span>MAY 2020</span>
          <h6>Lauretta Good Strayer Memorial Prize</h6>
          <p>Allegheny College Department of Music</p>
        </Item>
        <Item>
          <span>2018 - 2020</span>
          <h6>Distinguished Alden Scholar</h6>
          <p>Allegheny College</p>
        </Item>
        <Item>
          <span>March 2020</span>
          <h6>Cupper Scholar</h6>
          <p>Allegheny College Department of Computer Science</p>
        </Item>
        <Item>
          <span>MAY 2019</span>
          <h6>Frederick and Lucille Marantz Memorial Prize</h6>
          <p>Allegheny College Department of Music</p>
        </Item>
        <Item>
          <span>2017 - 2018</span>
          <h6>Alden Scholar</h6>
          <p>Allegheny College</p>
        </Item>
      </Section> */}
    </Content>
  )
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              childImageSharp {
                sizes(
                  maxWidth: 500
                  duotone: {
                    highlight: "#333333"
                    shadow: "#111111"
                    opacity: 65
                  }
                  ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    allImageSharp: allFile(filter: { relativePath: { regex: "/logos/" } }) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 300, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
