const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const getAboutEntry = entry => entry.sys.contentType.sys.id === 'about';

const plugins = [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `p1fhae7qcmga`,
      accessToken: `16bcf9cd974f48e7d151dd12652ab16efd7a325f9925b3e122ec6f0a05d5b3d9`,
    },
  },

  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig,
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: ['cabin', 'Open Sans'],
    },
  },
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-offline',
];

module.exports = client.getEntries().then(entries => {
  // const { mediumUser = '@medium' } = entries.items.find(getAboutEntry).fields;

  plugins.push({
    resolve: 'gatsby-source-medium',
    options: {
      username: '@maacpiash',
    },
  });

  if (ANALYTICS_ID) {
    plugins.push({
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: ANALYTICS_ID,
      },
    });
  }

  return {
    plugins,
  };
});
