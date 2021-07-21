/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const languageQuery = await graphql(`
query MyQuery {
  allStrapiBitmoji {
    edges {
      node {
        id
        visited
        locale
        firstVisit
        charsPerLine
        localizations {
          locale
        }
      }
    }
  }
}

  `);
  
  // Template to create dynamic pages from.
  const productsTemplate = path.resolve(`src/pages/index.js`);
  
  languageQuery.data.allStrapiBitmoji.edges.forEach(
    ({ node: {visited, localizations, locale} }) =>
    {
      return createPage({
        path: `/${locale}`,
        component: productsTemplate,
        context: { locale, visited, localizations, current_locale_single: locale }
      })
    }
  );
};
