/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const ThemeContext = require('./src/context/theme.jsx');

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ThemeContext.ThemeWrapper;
