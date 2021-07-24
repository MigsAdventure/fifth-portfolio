/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: '/',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/en'
  });
  const homeQuery = await graphql(`
    query homeQuery {
      allStrapiHeader {
        edges {
          node {
            Title
            Subtitle
            locale
          }
        }
      }
    }
  `);
  
  // Template to create dynamic pages from.
  const languageTemplate = path.resolve(`src/pages/index.js`);
  homeQuery.data.allStrapiHeader.edges.forEach(
    ({ node: {Title, Subtitle, locale} }) =>
    {
      return createPage({
        path: `/${locale}`,
        component: languageTemplate,
        context: {
          intLocale: locale,
          locale,
          Title,
          Subtitle
        }
      })
    }
  );
};
