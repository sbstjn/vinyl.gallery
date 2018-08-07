import React from 'react'
import Helmet from 'react-helmet'

import { graphql, StaticQuery } from 'gatsby'

import Header from './header'
import Tracking from './tracking'

import './layout.css'

const Layout = () => (
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
