require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Demuxed, the conference for video engineers',
    description: 'Demuxed, the conference for video engineers.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Demuxed, the conference for video engineers',
        short_name: 'Demuxed',
        start_url: '/',
        background_color: '#efeaf3',
        theme_color: '#362b5c',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      // Requires GATSBY_AIRTABLE_API_KEY env variable to be set
      resolve: `gatsby-source-airtable`,
      options: {
        tables: [
          {
            baseId: `appNzvLTUWY5c8z6W`,
            tableName: `Events`,
            tableView: `All Upcoming`,
            tableLinks: [`Location`],
          },
          {
            baseId: `appNzvLTUWY5c8z6W`,
            tableName: `Locations`,
            tableView: `All`,
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-source-twitter',
    //   options: {
    //     q: 'from:demuxed',
    //     credentials: {
    //       consumer_key: process.env.TWITTER_CONSUMER_KEY,
    //       consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    //       bearer_token: process.env.TWITTER_BEARER_TOKEN,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
