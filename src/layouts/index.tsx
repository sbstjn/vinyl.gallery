import React from 'react'
import Helmet from 'react-helmet'

import { graphql, StaticQuery } from 'gatsby'

import { Header } from '../components/Header/Header'
import Gauges from 'gauges-react'

import './reset.css'
import './fonts.css'

export const Layout = () => (
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
        <Gauges id={data.site.siteMetadata.tracking.gauges} />
      </>
    )}
  />
)
