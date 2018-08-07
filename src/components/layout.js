import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, data }) => (
  <>
    <Helmet>
      <html lang="en" />
    </Helmet>
    <Header />
  </>
)

export default Layout
