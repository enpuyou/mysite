import React from 'react'
import { navigate } from 'gatsby'
import FlickrHero from 'react-flickr-hero'
import styled from 'styled-components'

import Layout from '../components/layout'
import Button from '../components/button'
import HeroText from '../components/heroText'

const HomeButton = styled(Button)`
  position: absolute;
  bottom: 35%;
  left: 20%;
`

const PageNotFound = () => (
  <Layout>
    <FlickrHero
      api_key="42e9a5830cdc4ce953c13fb89063fcd8"
      user_id="185367030@N02"
      album_id="72157711662983962"
      fillPage
    />
    <HomeButton opaque light onClick={() => navigate('/')}>
      Return To Home Page
    </HomeButton>
    <HeroText text="404 Page Not Found" />
  </Layout>
)

export default PageNotFound
