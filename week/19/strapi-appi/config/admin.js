module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ac8af6b95f9c9613b7f3d14f9f06d4d'),
  },
});
