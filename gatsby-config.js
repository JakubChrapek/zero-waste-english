module.exports = {
  siteMetadata: {
    title: `Zero Waste English - ekologiczna nauka języka angielskiego`,
    description: `Redesign Zero Waste English - szkoły języka angielskiego online`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zero Waste English`,
        short_name: `No Waste Eng`,
        start_url: `/`,
        background_color: `#2d2d2d`,
        theme_color: `#2d2d2d`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
