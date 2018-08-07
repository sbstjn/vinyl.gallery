import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Tracking from './tracking'
import Header from './header'

import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query GaugeID {
        site {
          siteMetadata {
            tracking {
              gauges
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title="vinyl.gallery">
          <html lang="en" />
        </Helmet>
        <Header />
        <Tracking id={data.site.siteMetadata.tracking.gauges} />
      </>
    )}
  />
)

export default Layout
