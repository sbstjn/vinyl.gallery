module.exports = {
  siteMetadata: {
    title: 'vinyl.gallery',
    tracking: {
      gauges: '5b694df7d3cc9a5aaa9ebca3',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'vinyl.gallery',
        short_name: 'vinyl.gallery',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
  ],
}
