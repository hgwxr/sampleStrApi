module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a3a8996f2375547c2905ede2e6165b3'),
  },
});
