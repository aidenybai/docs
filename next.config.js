const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_contentDump: true,
});
module.exports = withNextra({
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
});
