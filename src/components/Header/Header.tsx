import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'

const Wrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  text-align: center;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Headline = styled.h1`
  margin: 0 auto;
  font-size: 32px;
  line-height: 42px;
  padding-top: 8px;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  color: white;
  display: inline-block;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: left 4px;
  padding-left: 62px;
`

export const Header = () => (
  <Wrapper>
    <Content>
      <Headline>vinyl.gallery</Headline>
    </Content>
  </Wrapper>
)
