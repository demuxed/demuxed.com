module.exports = {
  siteMetadata: {
    title: 'Demuxed',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-116940846-1',
        head: false,
        respectDNT: true,
      },
    },
  ],
};
