require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Celostní terapie',
    description:
      'Poradenství a konzultace osobní rozvoj, léčení a uzdravení na úrovni vědomí. Celostní poradenství, vztahy. Napojení na vnitřní sílu a moudrost těla. Vedené meditace ke stažení',
    author: '@veronikaFraitova',
    siteUrl: 'https://celostniterapie.cz/',
    keywords: [
      'léčení',
      'etikoterapie',
      'meditace',
      'životní enrgie',
      'zdraví',
      'vztahy',
      'uzdravení',
      'poradenství',
      'workshop',
      'konzultace',
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: 'any maskable',
        },
        name: 'Veronika Fraitová',
        short_name: 'VF',
        start_url: 'www.veronikafraitova.cz',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'fullscreen',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '108q9jxb4j44',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
