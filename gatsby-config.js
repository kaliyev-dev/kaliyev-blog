module.exports = {
  siteMetadata: {
    title: `kaliyev. blog`,
    description: `A good person's blog`,
    author: `almaz@kaliyev.dev`,
    siteUrl: `https://blog.kaliyev.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kaliyev. blog`,
        short_name: `kaliyev. blog`,
        start_url: `/`,
        background_color: `#e1e1e1`,
        theme_color: `#ff4d00`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto Slab`, `Merriweather`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },
  ],
};
