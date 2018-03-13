/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import WebFont from 'webfontloader';

 exports.onClientEntry = () => {
  WebFont.load({
    typekit: {
      id: 'nte1xds'
    }
  });
}
