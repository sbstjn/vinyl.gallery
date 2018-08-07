import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Headline = styled.h1`
  margin: 0;
  text-align: center;
`

const Header = () => (
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
