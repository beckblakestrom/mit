module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1144e75bfbc56cb5a5429577cdf5dcc3'),
  },
});
