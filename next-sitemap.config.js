const siteUrl = 'https://www.decarbonify.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/dashboard/*' },
      { userAgent: '*', disallow: '/data' },
      { userAgent: '*', disallow: '/dashboard' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/dashboard/*', '/data', '/dashboard'],
};
