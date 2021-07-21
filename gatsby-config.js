const siteUrl = `https://migsadventure.com`;
  module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // add new plugins under here
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        collectionTypes: [
          {
            name: `project`,
            api: { qs: { _locale: `all` } }
          },
          {
            name: `category`,
            api: { qs: { _locale: `all` } }
          },
        ],
        singleTypes: [
          {
            name: 'bitmoji',
            api: { qs: { _locale: 'en' } },
          },
          {
            name: 'bitmoji',
            api: { qs: { _locale: 'es' } },
          },
          {
            name: 'bitmoji',
            api: { qs: { _locale: 'ko' } },
          },          {
            name: 'bitmoji',
            api: { qs: { _locale: 'ja' } },
          },
          {
            name: 'header',
            api: { qs: { _locale: 'en' } },
          },
          {
            name: 'header',
            api: { qs: { _locale: 'es' } },
          },
          {
            name: 'header',
            api: { qs: { _locale: 'ko' } },
          },          {
            name: 'header',
            api: { qs: { _locale: 'ja' } },
          },
        ],
        queryLimit: 1000,
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "SWAPI",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "swapi",
    //     // Url to query from
    //     url: "http://localhost:1337/graphql",
    //   },
    // },
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [
          'images', /* Matches Gatsby default rules for images */
          'media', /* Matches Gatsby default rules for media (video/audio) */
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-json-output`,
    //   siteUrl: siteUrl,
    //   options: {
    //     siteUrl: siteUrl, // defined on top of plugins
    //     graphQLQuery: `
    //     {
    //     allImageSharp {
    //         nodes {
    //             fluid {
    //                 src
    //             }
    //         }
    //       }
    //     }
    //     `,
    //     serialize: results => {
    //       console.log("results: ", results.data.allImageSharp);
    //       const arr = [];
    //       results.data.allImageSharp.nodes.map((node) => {
    //           arr.push(node.fluid.src);
    //         }
    //       )
    //       return [{images: arr, path: 'page-2'}];
    //     }
    //   },
    // }
  ],
}
