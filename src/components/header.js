import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rebeccapurple;
  marginbottom: 1.45rem;
`

const Content = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
`

const Headline = styled.h1`
  margin: 0;
  text-align: center;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Content>
      <Headline>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          vinyl.gallery
        </Link>
      </Headline>
    </Content>
  </Wrapper>
)

export default Header
