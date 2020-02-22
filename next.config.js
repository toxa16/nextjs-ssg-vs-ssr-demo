module.exports = {
  // these env vars are applied for dev mode and during build stage
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3001',
  },
};
