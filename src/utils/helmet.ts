const title = 'Give Your Lunch';
const description = 'Donate your lunch money to a local restaurant cooking meals for hospital workers.';

const favicon = require('assets/images/favicon.png');
const share = require('assets/images/share.png');

export const helmet = {
  title,
  titleTemplate: 'Give your Lunch',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: share },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: share },
    { name: 'twitter:site', content: '@uenodotco' },
    { name: 'twitter:creator', content: '@uenodotco' },
    { name: 'twitter:description', content: description },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: favicon },
  ],
};
